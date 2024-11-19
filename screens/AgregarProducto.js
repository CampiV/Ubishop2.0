import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Header from '../components/Header'; // Importar Header
import BotonFooter from '../components/BotonFooter'; // Importar Footer

const AgregarProducto = ({ navigation }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState(['Ropa', 'Zapatos', 'Accesorios']);
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [image, setImage] = useState(null);

  const scrollViewRef = useRef();

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Se requiere acceso a la galería para continuar');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Se requiere acceso a la cámara para continuar');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleCategoryChange = (value) => {
    if (value === 'Otra') {
      setIsCustomCategory(true);
      setSelectedCategory('');
    } else {
      setIsCustomCategory(false);
      setSelectedCategory(value);
    }
  };

  const handleSaveProduct = () => {
    const finalCategory = isCustomCategory ? selectedCategory : selectedCategory;
    console.log('Producto guardado:', {
      productName,
      price,
      category: finalCategory,
      image,
    });
    // Aquí puedes agregar la lógica para guardar el producto
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* Botón de regreso */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#000" />
          <Text style={styles.backButtonText}>Regresar</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.title}>Agregar Producto</Text>

          {/* Nombre del producto */}
          <TextInput
            style={styles.input}
            placeholder="Nombre del producto"
            placeholderTextColor="#B0B0B0"
            value={productName}
            onChangeText={setProductName}
          />

          {/* Precio */}
          <View style={styles.priceInputContainer}>
            <Text style={styles.pricePrefix}>$</Text>
            <TextInput
              style={styles.priceInput}
              placeholder="0"
              placeholderTextColor="#B0B0B0"
              value={price}
              onChangeText={(text) => {
                if (/^\d*$/.test(text)) setPrice(text); // Permite solo números
              }}
              keyboardType="numeric"
            />
          </View>

          {/* Categoría */}
          <View style={styles.categoryInput}>
            {isCustomCategory ? (
              <TextInput
                style={styles.input}
                placeholder="Escribe la nueva categoría"
                placeholderTextColor="#B0B0B0"
                value={selectedCategory}
                onChangeText={setSelectedCategory}
              />
            ) : (
              <TouchableOpacity
                style={styles.dropdown}
                onPress={() =>
                  Alert.alert('Seleccionar categoría', null, [
                    ...categories.map((cat) => ({
                      text: cat,
                      onPress: () => handleCategoryChange(cat),
                    })),
                    {
                      text: 'Otra',
                      onPress: () => handleCategoryChange('Otra'),
                    },
                    { text: 'Cancelar', style: 'cancel' },
                  ])
                }
              >
                <Text style={styles.dropdownText}>
                  {selectedCategory || 'Categoría'}
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Imagen */}
          {image ? (
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
              <TouchableOpacity style={styles.removeButton} onPress={handleRemoveImage}>
                <Text style={styles.removeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.imageButton}
              onPress={() =>
                Alert.alert('Subir imagen', 'Selecciona una opción', [
                  { text: 'Cámara', onPress: handleCamera },
                  { text: 'Galería', onPress: handleImagePicker },
                  { text: 'Cancelar', style: 'cancel' },
                ])
              }
            >
              <Text style={styles.imageButtonText}>Subir imagen</Text>
            </TouchableOpacity>
          )}

          {/* Botón de guardar */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveProduct}>
            <Text style={styles.saveButtonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
    flexGrow: 1,
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
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 22,
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
  priceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  pricePrefix: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  priceInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  categoryInput: {
    marginBottom: 15,
  },
  dropdown: {
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  imageButton: {
    height: 40,
    backgroundColor: '#007BFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    position: 'relative',
    height: 200,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF0000',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    height: 40,
    backgroundColor: '#32CD32',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AgregarProducto;
