import { useState, useEffect } from 'react';
import { getAllObjects } from '../services/objectService';

export const useObjects = (initialFilters = {}) => {
    const [objects, setObjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState(initialFilters);

    const fetchObjects = async () => {
    setLoading(true);
    setError(null);
    
    try {
        const result = await getAllObjects(filters);

        if (result.success) {
        setObjects(result.data);
        } else {
        setError(result.error);
        }
    } catch (err) {
        setError('Error al cargar los objetos');
        console.error(err);
    } finally {
        setLoading(false);
    }
    };

    useEffect(() => {
    fetchObjects();
    } , [JSON.stringify(filters)]);

    const refreshObjects = () => {
    fetchObjects();
    };

    const updateFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
    };

    const clearFilters = () => {
    setFilters({});
    };

    return {
    objects,
    loading,
    error,
    filters,
    updateFilters,
    clearFilters,
    refreshObjects
    };
};