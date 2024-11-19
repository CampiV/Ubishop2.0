import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const HomeTienda = ({ navigation, storeName = "Tu Tienda" }) => {
  const handlePress = (action) => {
    switch (action) {
      case 'Suscripción':
        navigation.navigate('SuscripcionTienda'); // Navegar a SeleccionSuscripcion.js
        break;
      case 'Agregar producto':
        navigation.navigate('AgregarProducto'); // Navegar a AgregarProducto.js
        break;
      case 'Editar producto':
        navigation.navigate('EditarProducto'); // Navegar a EditarProducto.js
        break;
      case 'Eliminar producto':
        navigation.navigate('EliminarProducto'); // Navegar a EliminarProducto.js
        break;
      case 'Informes':
        console.log('Informes');
        break;
      default:
        console.log(`Acción desconocida: ${action}`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Presentación */}
      <Text style={styles.greeting}>¡Hola! {storeName}</Text>

      <View style={styles.row}>
        {/* Botón de Suscripción */}
        <TouchableOpacity
          style={[styles.button, styles.subscriptionButton]}
          onPress={() => handlePress('Suscripción')}
        >
          <FontAwesome name="dollar" size={24} color="#000" />
          <Text style={styles.buttonText}>Suscripción</Text>
        </TouchableOpacity>

        {/* Botón de Agregar Producto */}
        <TouchableOpacity
          style={[styles.button, styles.addButton]}
          onPress={() => handlePress('Agregar producto')}
        >
          <MaterialIcons name="add" size={24} color="#000" />
          <Text style={styles.buttonText}>Agregar producto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {/* Botón de Editar Producto */}
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => handlePress('Editar producto')}
        >
          <FontAwesome name="edit" size={24} color="#000" />
          <Text style={styles.buttonText}>Editar producto</Text>
        </TouchableOpacity>

        {/* Botón de Eliminar Producto */}
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => handlePress('Eliminar producto')}
        >
          <MaterialIcons name="delete" size={24} color="#000" />
          <Text style={styles.buttonText}>Eliminar producto</Text>
        </TouchableOpacity>
      </View>

      {/* Botón de Informes */}
      <TouchableOpacity
        style={[styles.largeButton, styles.reportsButton]}
        onPress={() => handlePress('Informes')}
      >
        <Text style={styles.largeButtonText}>Informes</Text>
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
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  button: {
    flex: 1,
    height: 100,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  subscriptionButton: {
    backgroundColor: '#ADD8E6', // Azul claro
  },
  addButton: {
    backgroundColor: '#C8FACC', // Verde claro
  },
  editButton: {
    backgroundColor: '#FFF4B1', // Amarillo claro
  },
  deleteButton: {
    backgroundColor: '#FFD7D7', // Rojo claro
  },
  largeButton: {
    width: '100%',
    height: 150,
    backgroundColor: '#D9D9FF', // Azul pastel
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  largeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default HomeTienda;
