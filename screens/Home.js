import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Mapa from '../components/Mapa';
import { ProductCard, products } from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigation = useNavigation();

  // Función de búsqueda
  const handleSearch = () => {
    if (searchText.trim()) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(results);
      console.log(`Productos encontrados: ${results.length}`);
    } else {
      setFilteredProducts([]);
    }
    setSearchText('');
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

      {/* Productos destacados */}
      <ScrollView contentContainerStyle={styles.productsContainer}>
        {/* Mapa */}
        <View style={styles.mapContainer}>
          <Mapa />
        </View>

        {/* Resultados de búsqueda */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <TouchableOpacity
              key={product.id}
              onPress={() => navigation.navigate('ProductDetails', { product })}
            >
              <ProductCard product={product} />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noResultsText}>
            {searchText ? 'No se encontraron productos' : 'Productos destacados'}
          </Text>
        )}

        {/* Productos destacados si no hay búsqueda */}
        {filteredProducts.length === 0 &&
          products.slice(0, 4).map((product) => (
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
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginTop: 10,
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
  mapContainer: {
    height: 300,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  noResultsText: {
    fontSize: 16,
    color: '#B0B0B0',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Home;
