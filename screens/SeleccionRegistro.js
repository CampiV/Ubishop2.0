import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SeleccionRegistro = () => {
  const handleClientePress = () => {
    console.log('Registrarse como cliente');
    // Aquí puedes agregar la navegación o funcionalidad específica para registrarse como cliente
  };

  const handleTiendaPress = () => {
    console.log('Registrarse como tienda');
    // Aquí puedes agregar la navegación o funcionalidad específica para registrarse como tienda
  };

  return (
    <View style={styles.container}>
      {/* Botón para registrarse como cliente */}
      <TouchableOpacity style={[styles.button, styles.clienteButton]} onPress={handleClientePress}>
        <Text style={styles.buttonText}>Registrarse como cliente</Text>
      </TouchableOpacity>

      {/* Botón para registrarse como tienda */}
      <TouchableOpacity style={[styles.button, styles.tiendaButton]} onPress={handleTiendaPress}>
        <Text style={styles.buttonText}>Registrarse como tienda</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  clienteButton: {
    backgroundColor: '#32CD32', // Verde para cliente
  },
  tiendaButton: {
    backgroundColor: '#4169E1', // Azul para tienda
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SeleccionRegistro;
