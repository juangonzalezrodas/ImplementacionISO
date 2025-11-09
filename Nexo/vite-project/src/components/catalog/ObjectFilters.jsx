import { useState } from 'react';
import { OBJECT_CATEGORIES, COLORS, CAMPUS_LOCATIONS, OBJECT_STATUS } from '../../utils/constants';
import styles from './ObjectFilters.module.css';
import PropTypes from 'prop-types';

const ObjectFilters = ({ onFilterChange, onClearFilters }) => {
    const [filters, setFilters] = useState({
    category: '',
    color: '',
    location: '',
    status: ''
    });

    const handleFilterChange = (filterName, value) => {
    const newFilters = {
        ...filters,
        [filterName]: value
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
    };

    const handleClear = () => {
    const emptyFilters = {
        category: '',
        color: '',
        location: '',
        status: ''
    };
    setFilters(emptyFilters);
    onClearFilters();
    };

    return (
    <div className={styles.filtersContainer}>
        <div className={styles.filterGroup}>
        <label htmlFor="category">Categoría</label>
        <select
            id="category"
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
        >
            <option value="">Todas las categorías</option>
            {OBJECT_CATEGORIES.map(cat => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
        </select>
        </div>

        <div className={styles.filterGroup}>
        <label htmlFor="color">Color</label>
        <select
            id="color"
            value={filters.color}
            onChange={(e) => handleFilterChange('color', e.target.value)}
        >
            <option value="">Todos los colores</option>
            {COLORS.map(color => (
            <option key={color.value} value={color.value}>{color.label}</option>
            ))}
        </select>
        </div>

        <div className={styles.filterGroup}>
        <label htmlFor="location">Ubicación</label>
        <select
            id="location"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
        >
            <option value="">Todas las ubicaciones</option>
            {CAMPUS_LOCATIONS.map(loc => (
            <option key={loc.value} value={loc.value}>{loc.label}</option>
            ))}
        </select>
        </div>

        <div className={styles.filterGroup}>
        <label htmlFor="status">Estado</label>
        <select
            id="status"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
        >
            <option value="">Todos los estados</option>
            <option value={OBJECT_STATUS.AVAILABLE}>Disponible</option>
            <option value={OBJECT_STATUS.CLAIMED}>Reclamado</option>
            <option value={OBJECT_STATUS.DELIVERED}>Entregado</option>
        </select>
        </div>

        <button onClick={handleClear} className={styles.clearButton}>
        Limpiar Filtros
        </button>
    </div>
    ) ;
};

ObjectFilters.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    onClearFilters: PropTypes.func.isRequired
};

export default ObjectFilters;