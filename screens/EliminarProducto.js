import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { products as productData } from '../components/ProductCard'; // Importa los productos desde ProductCard.js

const EliminarProducto = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState(productData); // Local state to manage product list
  const [selectedProduct, setSelectedProduct] = useState('');
  const [deletedProduct, setDeletedProduct] = useState(null);

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
    setSelectedProduct(''); // Reinicia la selección de producto
  };

  const handleProductSelection = () => {
    if (!selectedCategory) {
      Alert.alert('Error', 'Por favor selecciona una categoría primero.');
      return;
    }

    Alert.alert('Seleccionar producto', 'Elige un producto:', [
      ...filteredProducts.map((product) => ({
        text: product.name,
        onPress: () => setSelectedProduct(product.name),
      })),
      { text: 'Cancelar', style: 'cancel' },
    ]);
  };

  const handleDelete = () => {
    if (!selectedProduct) {
      Alert.alert('Error', 'Por favor selecciona un producto para eliminar.');
      return;
    }

    const productToDelete = filteredProducts.find(
      (product) => product.name === selectedProduct
    );
    setDeletedProduct(productToDelete); // Guarda el producto eliminado temporalmente
    const remainingProducts = products.filter(
      (product) => product.name !== selectedProduct
    );
    setProducts(remainingProducts);
    setFilteredProducts(remainingProducts);
    setSelectedProduct('');
    Alert.alert('Producto eliminado', `El producto "${productToDelete.name}" ha sido eliminado.`);
  };

  const handleUndo = () => {
    if (!deletedProduct) {
      Alert.alert('Error', 'No hay ningún producto para deshacer la eliminación.');
      return;
    }

    setProducts([...products, deletedProduct]);
    setFilteredProducts([...filteredProducts, deletedProduct]);
    setDeletedProduct(null); // Elimina la referencia al producto eliminado
    Alert.alert('Acción deshecha', `El producto "${deletedProduct.name}" ha sido restaurado.`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Eliminar Producto</Text>

        {/* Título de categoría */}
        {selectedCategory.length > 0 && (
          <Text style={styles.fieldTitle}>Categoría seleccionada</Text>
        )}
        {/* Botón de categorías */}
        <TouchableOpacity style={styles.dropdownButton} onPress={handleCategorySelection}>
          <Text style={styles.dropdownButtonText}>
            {selectedCategory || 'Seleccionar categoría'}
          </Text>
        </TouchableOpacity>

        {/* Título de producto */}
        {selectedProduct.length > 0 && (
          <Text style={styles.fieldTitle}>Producto seleccionado</Text>
        )}
        {/* Botón de productos */}
        <TouchableOpacity style={styles.dropdownButton} onPress={handleProductSelection}>
          <Text style={styles.dropdownButtonText}>
            {selectedProduct || 'Seleccionar producto'}
          </Text>
        </TouchableOpacity>

        {/* Botón para eliminar */}
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Eliminar</Text>
        </TouchableOpacity>

        {/* Botón para deshacer */}
        {deletedProduct && (
          <TouchableOpacity style={styles.undoButton} onPress={handleUndo}>
            <Text style={styles.undoButtonText}>Deshacer</Text>
          </TouchableOpacity>
        )}
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
  fieldTitle: {
    width: '100%',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    textAlign: 'left',
  },
  dropdownButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
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
  deleteButton: {
    width: '60%',
    height: 40,
    backgroundColor: '#FF3B30',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  undoButton: {
    width: '60%',
    height: 40,
    backgroundColor: '#007BFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  undoButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EliminarProducto;
