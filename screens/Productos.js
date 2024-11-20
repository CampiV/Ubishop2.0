import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  FlatList,
  Text,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ProductCard, products } from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';

const Productos = () => {
  const [searchText, setSearchText] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todos'); // Filtro de categoría
  const [priceOrder, setPriceOrder] = useState(null); // Orden de precios
  const [isModalVisible, setModalVisible] = useState(false); // Estado del modal
  const navigation = useNavigation();

  // Obtener las categorías únicas de los productos
  const categories = ['Todos', ...new Set(products.map((product) => product.category))];

  // Filtrar y ordenar productos
  const filteredProducts = products
    .filter((product) =>
      categoryFilter === 'Todos' ? true : product.category === categoryFilter
    )
    .sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      if (priceOrder === 'asc') return priceA - priceB;
      if (priceOrder === 'desc') return priceB - priceA;
      return 0;
    });

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
        />
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome name="search" size={20} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      {/* Filtros */}
      <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.filterText}>Categoría: {categoryFilter}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.filterButton, priceOrder && styles.activeFilter]}
          onPress={() =>
            setPriceOrder((prevOrder) => {
              if (prevOrder === 'asc') return 'desc';
              if (prevOrder === 'desc') return null;
              return 'asc';
            })
          }
        >
          <Text style={styles.filterText}>
            {priceOrder === 'asc'
              ? 'Menor a mayor'
              : priceOrder === 'desc'
              ? 'Mayor a menor'
              : 'Ordenar por precio'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal para categorías */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => {
                  setCategoryFilter(item);
                  setModalVisible(false);
                }}
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
      </Modal>

      {/* Productos */}
      <ScrollView contentContainerStyle={styles.productsContainer}>
        {filteredProducts.map((product) => (
          <TouchableOpacity
            key={product.id}
            onPress={() => navigation.navigate('ProductDetails', { product })}
          >
            <ProductCard product={product} />
          </TouchableOpacity>
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
    paddingHorizontal: 10,
    marginBottom: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalItem: {
    padding: 10,
  },
  modalItemText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'center',
    padding: 10,
  },
});

export default Productos;
