import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Contraseña:', password);
    // Aquí puedes agregar la lógica de inicio de sesión
  };

  const handleRegister = () => {
    console.log('Ir a registro');
    // Aquí puedes navegar a la pantalla de registro si está implementada
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>¡Bienvenido!</Text>

      {/* Contenedor del formulario */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Iniciar sesión</Text>

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

        {/* Botón de Iniciar sesión */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Separador */}
      <Text style={styles.orText}>o</Text>

      {/* Enlace a Registrarse */}
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerText}>Registrarse</Text>
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
  title: {
    fontSize: 50,
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
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
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
  orText: {
    marginTop: 20,
    marginBottom: 10,
    color: '#000',
  },
  registerText: {
    color: '#4169E1',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;