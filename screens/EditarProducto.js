import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { products as productData } from '../components/ProductCard'; // Importa productos desde ProductCard.js

const EditarProducto = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState(productData); // Local state to manage the product list
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Extrae categorías únicas desde los productos importados
    const uniqueCategories = [...new Set(productData.map((product) => product.category))];
    setCategories(uniqueCategories);
    setFilteredProducts(productData);
  }, []);

  const handleCategorySelection = () => {
    Alert.alert('Seleccionar categoría', 'Elige una categoría:', [
      ...categories.map((category) => ({
        text: category,
        onPress: () => handleCategoryChange(category),
      })),
      { text: 'Cancelar', style: 'cancel' },
    ]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
    setSelectedProduct(null); // Reinicia la selección de producto
    resetFields();
  };

  const handleProductSelection = () => {
    if (!selectedCategory) {
      Alert.alert('Error', 'Por favor selecciona una categoría primero.');
      return;
    }

    Alert.alert('Seleccionar producto', 'Elige un producto:', [
      ...filteredProducts.map((product) => ({
        text: product.name,
        onPress: () => handleProductChange(product),
      })),
      { text: 'Cancelar', style: 'cancel' },
    ]);
  };

  const handleProductChange = (product) => {
    setSelectedProduct(product);
    setProductName(product.name);
    setDescription(product.description);
    setPrice(product.price.toString());
    setImage(product.image || null);
  };

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

  const handleSaveProduct = () => {
    if (!selectedProduct) {
      Alert.alert('Error', 'Por favor selecciona un producto primero.');
      return;
    }

    const updatedProduct = {
      ...selectedProduct,
      name: productName,
      description,
      price: parseFloat(price),
      image,
    };

    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );

    setProducts(updatedProducts); // Actualiza la lista de productos
    Alert.alert('Producto actualizado', `El producto "${updatedProduct.name}" ha sido actualizado.`);
  };

  const resetFields = () => {
    setProductName('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Editar Producto</Text>

        {/* Menú de categorías */}
        <TouchableOpacity style={styles.dropdownButton} onPress={handleCategorySelection}>
          <Text style={styles.dropdownButtonText}>
            {selectedCategory || 'Seleccionar categoría'}
          </Text>
        </TouchableOpacity>

        {/* Menú de productos */}
        <TouchableOpacity style={styles.dropdownButton} onPress={handleProductSelection}>
          <Text style={styles.dropdownButtonText}>
            {selectedProduct ? selectedProduct.name : 'Seleccionar producto'}
          </Text>
        </TouchableOpacity>

        {/* Nombre del producto */}
        <TextInput
          style={styles.input}
          placeholder="Nombre del producto"
          placeholderTextColor="#B0B0B0"
          value={productName}
          onChangeText={setProductName}
        />

        {/* Descripción */}
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          placeholderTextColor="#B0B0B0"
          value={description}
          onChangeText={setDescription}
        />

        {/* Precio */}
        <TextInput
          style={styles.input}
          placeholder="Precio"
          placeholderTextColor="#B0B0B0"
          value={price}
          onChangeText={(text) => {
            if (/^\d*$/.test(text)) setPrice(text); // Permite solo números
          }}
          keyboardType="numeric"
        />

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
    backgroundColor: '#FFFBEA',
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
  dropdownButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF7C5',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    marginBottom: 15,
  },
  dropdownButtonText: {
    fontSize: 16,
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
  imageButton: {
    width: '60%',
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
    width: '100%',
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
    width: '60%',
    height: 40,
    backgroundColor: '#FFD700',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditarProducto;
