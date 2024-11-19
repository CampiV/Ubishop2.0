import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header'; // Header personalizado
import BotonFooter from '../components/BotonFooter'; // Footer personalizado

const SuscripcionTienda = ({ navigation, subscriptionType = "Tipo suscripción", startDate = "Fecha de inicio", endDate = "Fecha de finalización" }) => {
  const handleChangeSubscription = () => {
    navigation.navigate('SeleccionSuscripcion'); // Navegar a SeleccionSuscripcion.js
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Contenido Principal */}
      <View style={styles.content}>
        {/* Botón de regreso */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#000" />
          <Text style={styles.backButtonText}>Regresar</Text>
        </TouchableOpacity>

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

      {/* Footer */}
      <BotonFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007BFF',
    marginLeft: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
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
