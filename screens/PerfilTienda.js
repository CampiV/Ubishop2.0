import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PerfilTienda = () => {
  const [editableField, setEditableField] = useState(null); // Campo en modo edición
  const [formData, setFormData] = useState({
    storeName: '',
    description: '',
    owner: '',
    location: '',
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
        {/* Campo de Nombre de la tienda */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre de la tienda"
            placeholderTextColor="#B0B0B0"
            value={formData.storeName}
            editable={editableField === 'storeName'}
            onChangeText={(text) => setFormData({ ...formData, storeName: text })}
          />
          <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('storeName')}>
            <FontAwesome name="edit" size={20} color="#B0B0B0" />
          </TouchableOpacity>
        </View>

        {/* Campo de Descripción */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Descripción"
            placeholderTextColor="#B0B0B0"
            value={formData.description}
            editable={editableField === 'description'}
            onChangeText={(text) => setFormData({ ...formData, description: text })}
          />
          <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('description')}>
            <FontAwesome name="edit" size={20} color="#B0B0B0" />
          </TouchableOpacity>
        </View>

        {/* Campo de Propietario */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Propietario"
            placeholderTextColor="#B0B0B0"
            value={formData.owner}
            editable={editableField === 'owner'}
            onChangeText={(text) => setFormData({ ...formData, owner: text })}
          />
          <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('owner')}>
            <FontAwesome name="edit" size={20} color="#B0B0B0" />
          </TouchableOpacity>
        </View>

        {/* Campo de Ubicación */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ubicación"
            placeholderTextColor="#B0B0B0"
            value={formData.location}
            editable={editableField === 'location'}
            onChangeText={(text) => setFormData({ ...formData, location: text })}
          />
          <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('location')}>
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

export default PerfilTienda;
