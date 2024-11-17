import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';
import HomeTienda from './screens/HomeTienda';
import Productos from './screens/Productos';
import Login from './screens/Login';
import SeleccionRegistro from './screens/SeleccionRegistro';
import RegistroCliente from './screens/RegistroCliente';
import PerfilCliente from './screens/PerfilCliente';
import RegistroTienda from './screens/RegistroTienda';
import PerfilTienda from './screens/PerfilTienda';
import SuscripcionTienda from './screens/SuscripcionTienda';
import SeleccionSuscripcion from './screens/SeleccionSuscripcion';
import AgregarProducto from './screens/AgregarProducto';
import EliminarProducto from './screens/EliminarProducto';
import EditarProducto from './screens/EditarProducto';
import Producto from './screens/Producto';
import BotonFooter from './components/BotonFooter'; // Cambiado desde Footer a BotonFooter

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <EditarProducto/>
      <BotonFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
