import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../components/AuthContext';

const PerfilCliente = () => {
    const { role } = useAuth();

    // Verificación del rol
    if (role !== 'Cliente') {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>No tienes acceso a esta pantalla.</Text>
            </View>
        );
    }

    const [editableField, setEditableField] = useState(null); // Campo en modo edición
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
    });
    const [backupData, setBackupData] = useState({}); // Guarda los valores antes de la edición

    const handleEdit = (field) => {
        setEditableField(field); // Activa la edición para el campo seleccionado
        setBackupData({ ...formData }); // Guarda el estado actual
    };

    const handleSave = () => {
        console.log('Datos guardados:', formData);
        setEditableField(null); // Salir del modo edición
    };

    const handleCancel = () => {
        setFormData({ ...backupData }); // Restaura los datos originales
        setEditableField(null); // Salir del modo edición
    };

    return (
        <View style={styles.container}>
            {/* Título */}
            <Text style={styles.title}>¡Bienvenido!</Text>

            {/* Contenedor del formulario */}
            <View style={styles.formContainer}>
                {/* Campo de Nombre */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        placeholderTextColor="#B0B0B0"
                        value={formData.name}
                        editable={editableField === 'name'}
                        onChangeText={(text) => setFormData({ ...formData, name: text })}
                    />
                    <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('name')}>
                        <FontAwesome name="edit" size={20} color="#B0B0B0" />
                    </TouchableOpacity>
                </View>

                {/* Campo de Apellido */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Apellido"
                        placeholderTextColor="#B0B0B0"
                        value={formData.lastName}
                        editable={editableField === 'lastName'}
                        onChangeText={(text) => setFormData({ ...formData, lastName: text })}
                    />
                    <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('lastName')}>
                        <FontAwesome name="edit" size={20} color="#B0B0B0" />
                    </TouchableOpacity>
                </View>

                {/* Campo de Teléfono */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Teléfono"
                        placeholderTextColor="#B0B0B0"
                        value={formData.phone}
                        editable={editableField === 'phone'}
                        onChangeText={(text) => setFormData({ ...formData, phone: text })}
                        keyboardType="phone-pad"
                    />
                    <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('phone')}>
                        <FontAwesome name="edit" size={20} color="#B0B0B0" />
                    </TouchableOpacity>
                </View>

                {/* Campo de Email */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#B0B0B0"
                        value={formData.email}
                        editable={editableField === 'email'}
                        onChangeText={(text) => setFormData({ ...formData, email: text })}
                        keyboardType="email-address"
                    />
                    <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('email')}>
                        <FontAwesome name="edit" size={20} color="#B0B0B0" />
                    </TouchableOpacity>
                </View>

                {/* Botones Guardar/Cancelar */}
                {editableField && (
                    <View style={styles.editButtonsContainer}>
                        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                            <Text style={styles.saveButtonText}>Guardar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Botón de Cerrar sesión */}
                <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('Cerrar sesión')}>
                    <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
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
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    color: '#000',
  },
  editIcon: {
    marginLeft: 10,
  },
  editButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  saveButton: {
    flex: 1,
    height: 40,
    backgroundColor: '#32CD32',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    flex: 1,
    height: 40,
    backgroundColor: '#FF4500',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#FF4500',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PerfilCliente;
