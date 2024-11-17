import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  Modal,
  FlatList,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ProductCard, products } from '../components/ProductCard';

const Productos = () => {
  const [searchText, setSearchText] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todos'); // Filtro de categoría
  const [priceOrder, setPriceOrder] = useState(null); // Orden de precios
  const [isModalVisible, setModalVisible] = useState(false); // Estado para controlar el menú desplegable

  // Función de búsqueda
  const handleSearch = () => {
    console.log(`Texto buscado: ${searchText}`);
  };

  // Obtener las categorías únicas de los productos
  const categories = ['Todos', ...new Set(products.map((product) => product.category))];

  // Filtrar y ordenar productos
  const filteredProducts = products
    .filter((product) =>
      categoryFilter === 'Todos' ? true : product.category === categoryFilter
    )
    .sort((a, b) => (priceOrder === 'asc' ? a.price - b.price : priceOrder === 'desc' ? b.price - a.price : 0));

  // Función para seleccionar categoría y cerrar el modal
  const handleCategorySelect = (category) => {
    setCategoryFilter(category);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="¿Qué necesitas?"
          placeholderTextColor="#B0B0B0"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <FontAwesome name="search" size={20} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      {/* Filtros */}
      <View style={styles.filtersContainer}>
        {/* Botón de categorías */}
        <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.filterText}>Categoría: {categoryFilter}</Text>
        </TouchableOpacity>

        {/* Botón para ordenar por precio */}
        <TouchableOpacity
          style={[styles.filterButton, priceOrder && styles.activeFilter]}
          onPress={() =>
            setPriceOrder(priceOrder === 'asc' ? 'desc' : priceOrder === 'desc' ? null : 'asc')
          }
        >
          <Text style={styles.filterText}>
            {priceOrder === 'asc'
              ? 'Mayor a menor'
              : priceOrder === 'desc'
              ? 'Menor a mayor'
              : 'Ordenar por precio'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal para selección de categoría */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecciona una categoría</Text>
            <FlatList
              data={categories}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleCategorySelect(item)}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Productos */}
      <ScrollView contentContainerStyle={styles.productsContainer}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  searchBar: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  searchButton: {
    marginLeft: 10,
  },
  filtersContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
  },
  activeFilter: {
    backgroundColor: '#4169E1',
  },
  filterText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    width: '100%',
  },
  modalItemText: {
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#4169E1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Productos;
