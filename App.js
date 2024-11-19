import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from './components/AuthContext';
import Home from './screens/Home';
import HomeTienda from './screens/HomeTienda';
import Login from './screens/Login';
import Productos from './screens/Productos';
import PerfilCliente from './screens/PerfilCliente';
import PerfilTienda from './screens/PerfilTienda';
import AgregarProducto from './screens/AgregarProducto';
import EditarProducto from './screens/EditarProducto';
import EliminarProducto from './screens/EliminarProducto';
import SuscripcionTienda from './screens/SuscripcionTienda';
import SeleccionSuscripcion from './screens/SeleccionSuscripcion';
import RegistroCliente from './screens/RegistroCliente';
import RegistroTienda from './screens/RegistroTienda';
import SeleccionRegistro from './screens/SeleccionRegistro';
import Header from './components/Header';
import BotonFooter from './components/BotonFooter';
import { View, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const AppLayout = ({ children }) => (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>{children}</View>
        <BotonFooter />
    </View>
);

const AppNavigator = () => {
    const { isLoggedIn, role } = useAuth();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isLoggedIn ? (
                // Pantallas para usuarios no autenticados
                <>
                    <Stack.Screen name="Home">
                        {() => (
                            <AppLayout>
                                <Home />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Productos">
                        {() => (
                            <AppLayout>
                                <Productos />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Login">
                        {() => (
                            <AppLayout>
                                <Login />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="SeleccionRegistro">
                        {() => (
                            <AppLayout>
                                <SeleccionRegistro />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="RegistroCliente">
                        {() => (
                            <AppLayout>
                                <RegistroCliente />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="RegistroTienda">
                        {() => (
                            <AppLayout>
                                <RegistroTienda />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                </>
            ) : role === 'Cliente' ? (
                // Pantallas para el rol "Cliente"
                <>
                    <Stack.Screen name="Home">
                        {() => (
                            <AppLayout>
                                <Home />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Productos">
                        {() => (
                            <AppLayout>
                                <Productos />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="PerfilCliente">
                        {() => (
                            <AppLayout>
                                <PerfilCliente />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                </>
            ) : (
                // Pantallas para el rol "Tienda"
                <>
                    <Stack.Screen name="HomeTienda">
                        {() => (
                            <AppLayout>
                                <HomeTienda />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Productos">
                        {() => (
                            <AppLayout>
                                <Productos />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="PerfilTienda">
                        {() => (
                            <AppLayout>
                                <PerfilTienda />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    {/* Corregí las pantallas con problemas */}
                    <Stack.Screen name="AgregarProducto" component={AgregarProducto} />
                    <Stack.Screen name="EditarProducto" component={EditarProducto} />
                    <Stack.Screen name="EliminarProducto" component={EliminarProducto} />
                    <Stack.Screen name="SuscripcionTienda" component={SuscripcionTienda} />
                    <Stack.Screen name="SeleccionSuscripcion">
                        {() => (
                            <AppLayout>
                                <SeleccionSuscripcion />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                </>
            )}
        </Stack.Navigator>
    );
};

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
    },
});
