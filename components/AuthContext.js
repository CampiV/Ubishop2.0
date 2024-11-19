import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState('Todos'); // Valores posibles: 'Todos', 'Cliente', 'Tienda'
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de sesión

    const login = (email, password) => {
        if (email === 'cliente@ejemplo.com' && password === '123456') {
            setRole('Cliente');
            setIsLoggedIn(true);
            console.log('Sesión iniciada como Cliente');
        } else if (email === 'tienda@ejemplo.com' && password === '123456') {
            setRole('Tienda');
            setIsLoggedIn(true);
            console.log('Sesión iniciada como Tienda');
        } else {
            console.log('Credenciales incorrectas');
        }
    };

    const logout = () => {
        setRole('Todos'); // Vuelve al estado inicial
        setIsLoggedIn(false); // Marca como no autenticado
        console.log('Sesión cerrada');
    };

    return (
        <AuthContext.Provider value={{ role, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto
export const useAuth = () => useContext(AuthContext);
