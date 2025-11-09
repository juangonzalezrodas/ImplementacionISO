export const OBJECT_CATEGORIES = [
    { value: 'dispositivo', label: 'Dispositivo Electrónico' },
    { value: 'ropa', label: 'Ropa' },
    { value: 'accesorio', label: 'Accesorio' },
    { value: 'documento', label: 'Documento' },
    { value: 'libro', label: 'Libro/Material Académico' },
    { value: 'deporte', label: 'Artículo Deportivo' },
    { value: 'otro', label: 'Otro' }
];

export const COLORS = [
    { value: 'negro', label: 'Negro' },
    { value: 'blanco', label: 'Blanco' },
    { value: 'gris', label: 'Gris' },
    { value: 'azul', label: 'Azul' },
    { value: 'rojo', label: 'Rojo' },
    { value: 'verde', label: 'Verde' },
    { value: 'amarillo', label: 'Amarillo' },
    { value: 'naranja', label: 'Naranja' },
    { value: 'morado', label: 'Morado' },
    { value: 'rosado', label: 'Rosado' },
    { value: 'cafe', label: 'Café' },
    { value: 'multicolor', label: 'Multicolor' }
];

export const CAMPUS_LOCATIONS = [
    { value: 'biblioteca', label: 'Biblioteca' },
    { value: 'cafeteria', label: 'Cafetería' },
    { value: 'aulas_bloque_a', label: 'Aulas Bloque A' },
    { value: 'aulas_bloque_b', label: 'Aulas Bloque B' },
    { value: 'aulas_bloque_c', label: 'Aulas Bloque C' },
    { value: 'laboratorios', label: 'Laboratorios' },
    { value: 'zonas_deportivas', label: 'Zonas Deportivas' },
    { value: 'parqueadero', label: 'Parqueadero' },
    { value: 'jardines', label: 'Jardines/Áreas Verdes' },
    { value: 'porteria_principal', label: 'Portería Principal' },
    { value: 'porteria_secundaria', label: 'Portería Secundaria' },
    { value: 'otro', label: 'Otro' }
];

export const STORAGE_LOCATIONS = [
    { value: 'porteria_principal', label: 'Portería Principal' },
    { value: 'porteria_secundaria', label: 'Portería Secundaria' },
    { value: 'porteria_bloque_c', label: 'Portería Bloque C' }
];

export const OBJECT_STATUS = {
    AVAILABLE: 'available',
    CLAIMED: 'claimed',
    DELIVERED: 'delivered'
};

export const TICKET_STATUS = {
    PENDING: 'pending',
    MATCHED: 'matched',
    RESOLVED: 'resolved',
    CANCELLED: 'cancelled'
};

export const USER_ROLES = {
    STUDENT: 'student',
    TEACHER: 'teacher',
    SECURITY: 'security',
    ADMIN: 'admin',
    VISITOR: 'visitor'
};