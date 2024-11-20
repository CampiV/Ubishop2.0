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
                        {({ navigation }) => (
                            <AppLayout>
                                <Home navigation={navigation} />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Productos">
                        {({ navigation }) => (
                            <AppLayout>
                                <Productos navigation={navigation} />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Login">
                        {({ navigation }) => (
                            <AppLayout>
                                <Login navigation={navigation} />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="SeleccionRegistro">
                        {({ navigation }) => (
                            <AppLayout>
                                <SeleccionRegistro navigation={navigation} />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="RegistroCliente">
                        {({ navigation }) => (
                            <AppLayout>
                                <RegistroCliente navigation={navigation} />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="RegistroTienda">
                        {({ navigation }) => (
                            <AppLayout>
                                <RegistroTienda navigation={navigation} />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                </>
            ) : role === 'Cliente' ? (
                // Pantallas para el rol "Cliente"
                <>
                    <Stack.Screen name="Home">
                        {({ navigation }) => (
                            <AppLayout>
                                <Home navigation={navigation} />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Productos">
                        {({ navigation }) => (
                            <AppLayout>
                                <Productos navigation={navigation} />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="PerfilCliente">
                        {({ navigation }) => (
                            <AppLayout>
                                <PerfilCliente navigation={navigation} />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                </>
            ) : (
                // Pantallas para el rol "Tienda"
                <>
                    <Stack.Screen name="HomeTienda">
                        {({ navigation }) => (
                            <AppLayout>
                                <HomeTienda navigation={navigation} />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Productos">
                        {({ navigation }) => (
                            <AppLayout>
                                <Productos navigation={navigation} />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="PerfilTienda">
                        {({ navigation }) => (
                            <AppLayout>
                                <PerfilTienda navigation={navigation} />
                            </AppLayout>
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="AgregarProducto" component={AgregarProducto} />
                    <Stack.Screen name="EditarProducto" component={EditarProducto} />
                    <Stack.Screen name="EliminarProducto" component={EliminarProducto} />
                    <Stack.Screen name="SuscripcionTienda" component={SuscripcionTienda} />
                    <Stack.Screen name="SeleccionSuscripcion">
                        {({ navigation }) => (
                            <AppLayout>
                                <SeleccionSuscripcion navigation={navigation} />
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
