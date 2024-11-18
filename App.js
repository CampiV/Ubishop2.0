import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importar pantallas y componentes
import Login from './screens/Login';
import RegistroCliente from './screens/RegistroCliente';
import RegistroTienda from './screens/RegistroTienda';
import Home from './screens/Home';
import Producto from './screens/Producto';
import PerfilUsuario from './screens/PerfilCliente';
import HomeTienda from './screens/HomeTienda';
import AgregarProducto from './screens/AgregarProducto';
import EditarProducto from './screens/EditarProducto';
import EliminarProducto from './screens/EliminarProducto';
import SuscripcionTienda from './screens/SuscripcionTienda';
import SeleccionSuscripcion from './screens/SeleccionSuscripcion';
import BotonFooter from './components/BotonFooter'; // Botón de navegación personalizado

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Navegación del Cliente
function ClienteTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <BotonFooter {...props} />}> {/* Usa BotonFooter */}
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Producto" component={Producto} />
      <Tab.Screen name="Perfil" component={PerfilUsuario} />
    </Tab.Navigator>
  );
}

// Navegación de la Tienda
function TiendaTabs() {
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  const SuscripcionScreen = isSubscribed ? SuscripcionTienda : SeleccionSuscripcion;

  return (
    <Tab.Navigator tabBar={(props) => <BotonFooter {...props} />}> {/* Usa BotonFooter */}
      <Tab.Screen name="HomeTienda" component={HomeTienda} />
      <Tab.Screen name="AgregarProducto" component={AgregarProducto} />
      <Tab.Screen name="EditarProducto" component={EditarProducto} />
      <Tab.Screen name="EliminarProducto" component={EliminarProducto} />
      <Tab.Screen name="Suscripcion" component={SuscripcionScreen} />
    </Tab.Navigator>
  );
}

// Navegación Principal
export default function App() {
  const [user, setUser] = React.useState(null); // Estado para usuario autenticado

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="RegistroCliente" component={RegistroCliente} />
            <Stack.Screen name="RegistroTienda" component={RegistroTienda} />
          </>
        ) : (
          user.role === 'cliente' ? (
            <Stack.Screen name="ClienteTabs" component={ClienteTabs} />
          ) : (
            <Stack.Screen name="TiendaTabs" component={TiendaTabs} />
          )
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
