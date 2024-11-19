import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeTienda = () => {
    // Hook para obtener el objeto de navegación
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>¡Hola! Tu Tienda</Text>

            {/* Botones */}
            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.button, styles.subscriptionButton]}
                    onPress={() => navigation.navigate('SuscripcionTienda')}
                >
                    <FontAwesome name="dollar" size={24} color="#000" />
                    <Text style={styles.buttonText}>Suscripción</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.addButton]}
                    onPress={() => navigation.navigate('AgregarProducto')}
                >
                    <MaterialIcons name="add" size={24} color="#000" />
                    <Text style={styles.buttonText}>Agregar Producto</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.button, styles.editButton]}
                    onPress={() => navigation.navigate('EditarProducto')}
                >
                    <FontAwesome name="edit" size={24} color="#000" />
                    <Text style={styles.buttonText}>Editar Producto</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.deleteButton]}
                    onPress={() => navigation.navigate('EliminarProducto')}
                >
                    <MaterialIcons name="delete" size={24} color="#000" />
                    <Text style={styles.buttonText}>Eliminar Producto</Text>
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
        marginBottom: 30,
        color: '#000',
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
    },
    buttonText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    subscriptionButton: {
        backgroundColor: '#ADD8E6',
    },
    addButton: {
        backgroundColor: '#C8FACC',
    },
    editButton: {
        backgroundColor: '#FFF4B1',
    },
    deleteButton: {
        backgroundColor: '#FFD7D7',
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
