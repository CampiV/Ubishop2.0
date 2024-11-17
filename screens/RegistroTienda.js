import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistroTienda = () => {
  const [storeName, setStoreName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegister = () => {
    if (password !== repeatPassword) {
      console.log('Las contraseñas no coinciden');
      return;
    }
    console.log('Nombre de la tienda:', storeName);
    console.log('Email:', email);
    console.log('Contraseña:', password);
    // Aquí puedes agregar la lógica de registro
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Registrarse</Text>

      {/* Contenedor del formulario */}
      <View style={styles.formContainer}>
        {/* Campo de Nombre de la tienda */}
        <TextInput
          style={styles.input}
          placeholder="Nombre de la tienda"
          placeholderTextColor="#B0B0B0"
          value={storeName}
          onChangeText={setStoreName}
        />

        {/* Campo de Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B0B0B0"
          value={email}
          onChangeText={setEmail}
        />

        {/* Campo de Contraseña */}
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#B0B0B0"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Campo de Repetir Contraseña */}
        <TextInput
          style={styles.input}
          placeholder="Repita contraseña"
          placeholderTextColor="#B0B0B0"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry
        />

        {/* Botón de Registrarse */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000',
  },
  formContainer: {
    width: '100%',
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
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    color: '#000',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#4169E1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegistroTienda;
