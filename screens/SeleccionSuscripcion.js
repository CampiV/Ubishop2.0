import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Asegúrate de instalar esta librería

const SeleccionSuscripcion = () => {
  const [selectedSubscription, setSelectedSubscription] = useState('mensual');
  const [price, setPrice] = useState(5000);
  const [isPickerVisible, setPickerVisible] = useState(false);

  // Opciones de suscripción y precios
  const subscriptionOptions = {
    mensual: 5000,
    trimestral: 15000,
    semestral: 35000,
    anual: 65000,
  };

  // Cambiar suscripción
  const handleSubscriptionChange = (value) => {
    setSelectedSubscription(value);
    setPrice(subscriptionOptions[value]);
    setPickerVisible(false); // Ocultar menú desplegable
  };

  const handlePayment = () => {
    console.log(`Suscripción seleccionada: ${selectedSubscription}`);
    console.log(`Precio: $${price}`);
    // Aquí puedes agregar la lógica de pago
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Suscripción</Text>

        {/* Campo de selección */}
        <TouchableOpacity
          style={styles.subscriptionInput}
          onPress={() => setPickerVisible(!isPickerVisible)}
        >
          <Text style={styles.subscriptionText}>{selectedSubscription.charAt(0).toUpperCase() + selectedSubscription.slice(1)} suscripción</Text>
        </TouchableOpacity>

        {isPickerVisible && (
          <Picker
            selectedValue={selectedSubscription}
            onValueChange={handleSubscriptionChange}
            style={styles.picker}
          >
            <Picker.Item label="Mensual" value="mensual" />
            <Picker.Item label="Trimestral" value="trimestral" />
            <Picker.Item label="Semestral" value="semestral" />
            <Picker.Item label="Anual" value="anual" />
          </Picker>
        )}

        {/* Precio */}
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Precio:</Text>
          <Text style={styles.price}>{`$${price.toLocaleString()}`}</Text>
        </View>

        {/* Botón para pagar */}
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pagar</Text>
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
    width: '90%',
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  subscriptionInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  subscriptionText: {
    fontSize: 16,
    color: '#000',
  },
  picker: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#32CD32', // Verde
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

export default SeleccionSuscripcion;
