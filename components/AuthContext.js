import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState('Todos'); // Valores posibles: 'Todos', 'Cliente', 'Tienda'
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de sesión

    const login = (userRole) => {
        setRole(userRole); // Establece el rol del usuario
        setIsLoggedIn(true); // Marca como autenticado
        console.log('Sesión iniciada como:', userRole);
    };

    const logout = () => {
        setRole('Tienda'); // Vuelve al estado inicial
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

