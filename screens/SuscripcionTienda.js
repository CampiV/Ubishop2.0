import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SuscripcionTienda = ({ navigation, subscriptionType = "Tipo suscripción", startDate = "Fecha de inicio", endDate = "Fecha de finalización" }) => {
  const handleChangeSubscription = () => {
    navigation.navigate('SeleccionSuscripcion'); // Navegar a SeleccionSuscripcion.js
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Suscripción</Text>

        {/* Detalles de la suscripción */}
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Suscripción</Text>
          <Text style={styles.value}>{subscriptionType}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.label}>Fecha de inicio</Text>
          <Text style={styles.value}>{startDate}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.label}>Fecha de finalización</Text>
          <Text style={styles.value}>{endDate}</Text>
        </View>

        {/* Botón para cambiar la suscripción */}
        <TouchableOpacity style={styles.button} onPress={handleChangeSubscription}>
          <Text style={styles.buttonText}>Cambiar</Text>
        </TouchableOpacity>
      </View>
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
  card: {
    width: '90%', // Ocupa el 90% del ancho de la pantalla
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    minHeight: '50%', // Altura mínima más alargada
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    width: '60%',
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuscripcionTienda;
