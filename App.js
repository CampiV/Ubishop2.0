import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './components/AuthContext';
import Home from './screens/Home';
import HomeTienda from './screens/HomeTienda';
import Login from './screens/Login';
import Productos from './screens/Productos';
import RegistroCliente from './screens/RegistroCliente';
import RegistroTienda from './screens/RegistroTienda';
import SeleccionRegistro from './screens/SeleccionRegistro';
import SeleccionSuscripcion from './screens/SeleccionSuscripcion';
import SuscripcionTienda from './screens/SuscripcionTienda';
import AgregarProducto from './screens/AgregarProducto';
import EditarProducto from './screens/EditarProducto';
import EliminarProducto from './screens/EliminarProducto';
import PerfilCliente from './screens/PerfilCliente';
import PerfilTienda from './screens/PerfilTienda';
import Header from './components/Header';
import BotonFooter from './components/BotonFooter';
import { View, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

// Layout Principal con Header y Footer
const AppLayout = ({ children }) => (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>{children}</View>
        <BotonFooter />
    </View>
);

const AppNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Registrar todas las pantallas */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeTienda" component={HomeTienda} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Productos" component={Productos} />
        <Stack.Screen name="RegistroCliente" component={RegistroCliente} />
        <Stack.Screen name="RegistroTienda" component={RegistroTienda} />
        <Stack.Screen name="SeleccionRegistro" component={SeleccionRegistro} />
        <Stack.Screen name="SeleccionSuscripcion" component={SeleccionSuscripcion} />
        <Stack.Screen name="SuscripcionTienda" component={SuscripcionTienda} />
        <Stack.Screen name="AgregarProducto" component={AgregarProducto} />
        <Stack.Screen name="EditarProducto" component={EditarProducto} />
        <Stack.Screen name="EliminarProducto" component={EliminarProducto} />
        <Stack.Screen name="PerfilCliente" component={PerfilCliente} />
        <Stack.Screen name="PerfilTienda" component={PerfilTienda} />
    </Stack.Navigator>
);

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AppLayout>
                    <AppNavigator />
                </AppLayout>
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
