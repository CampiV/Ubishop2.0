import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const BotonFooter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="home" size={24} color="black" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.button}>
        <FontAwesome name="tag" size={24} color="black" />
        <Text style={styles.label}>Productos</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.button}>
        <FontAwesome name="user" size={24} color="black" />
        <Text style={styles.label}>Mi Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#E0E0E0',
  },
  button: {
    flex: 1, // Los botones ocuparán el mismo ancho
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
    color: 'black',
    marginTop: 2,
  },
  divider: {
    width: 5, // Ancho de la línea divisoria
    backgroundColor: '#CCCCCC',
    height: '70%', // Ajusta la altura de la línea divisoria
  },
});

export default BotonFooter;
