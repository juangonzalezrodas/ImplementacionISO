import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { createUserProfile } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isValidUAOEmail, isValidIdNumber, isValidPassword, isNotEmpty } from '../../utils/validators';
import { USER_ROLES } from '../../utils/constants';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    idNumber: '',
    password: '',
    confirmPassword: '',
    role: USER_ROLES.STUDENT
    });
    const [loading, setLoading] = useState(false);

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    };

    const validateForm = () => {
    if (!isNotEmpty(formData.name)) {
        toast.error('El nombre es requerido');
        return false;
    }
    if (!isValidUAOEmail(formData.email)) {
        toast.error('Debe usar un correo institucional (@uao.edu.co)');
        return false;
    }
    if (!isValidIdNumber(formData.idNumber)) {
        toast.error('Documento de identidad inválido (6-10 dígitos)');
        return false;
    }
    if (!isValidPassword(formData.password)) {
        toast.error('La contraseña debe tener al menos 6 caracteres');
        return false;
    }
    if (formData.password !== formData.confirmPassword) {
        toast.error('Las contraseñas no coinciden');
        return false;
    }
    return true;
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    try {
        const userCredential = await register(formData.email, formData.password);

        await createUserProfile(userCredential.user.uid, {
        name: formData.name,
        email: formData.email,
        idNumber: formData.idNumber,
        role: formData.role
        });

        toast.success('¡Cuenta creada exitosamente!');
        navigate('/catalog');
    } catch (error) {
        console.error('Error al registrar:', error);
        if (error.code === 'auth/email-already-in-use') {
        toast.error('Este correo ya está registrado');
        } else {
        toast.error('Error al crear la cuenta');
        }
    } finally {
        setLoading(false);
    }
    };

    return (
    <div className={styles.container}>
        <div className={styles.formCard}>
        <h2>Crear Cuenta</h2>
        <p className={styles.subtitle}>Únete al sistema Nexo UAO</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
            <label htmlFor="name">Nombre Completo</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Juan Pérez"
                required
            />
            </div>

            <div className={styles.formGroup}>
            <label htmlFor="email">Correo Institucional</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="usuario@uao.edu.co"
                required
            />
            </div>

            <div className={styles.formGroup}>
            <label htmlFor="idNumber">Documento de Identidad</label>
            <input
                type="text"
                id="idNumber"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                placeholder="1234567890"
                required
            />
            </div>

            <div className={styles.formGroup}>
            <label htmlFor="role">Rol</label>
            <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
            >
                <option value={USER_ROLES.STUDENT}>Estudiante</option>
                <option value={USER_ROLES.TEACHER}>Profesor</option>
                <option value={USER_ROLES.VISITOR}>Visitante</option>
            </select>
            </div>

            <div className={styles.formGroup}>
            <label htmlFor="password">Contraseña</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
            />
            </div>

            <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
            />
            </div>

            <button 
            type="submit" 
            className={styles.submitButton}
            disabled={loading}
            >
            {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
            </button>
        </form>

        <p className={styles.loginLink}>
            ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
        </p>
        </div>
    </div>
    );
};

export default RegisterForm;