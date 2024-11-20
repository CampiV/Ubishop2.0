import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Mapa from '../components/Mapa';
import { ProductCard, products } from '../components/ProductCard'; // Importamos los productos y el componente ProductCard

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText.trim()) {
      console.log(`Texto buscado: ${searchText}`);
      setSearchText('');
    }
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
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
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
    marginTop: 10, // Asegura que la barra no esté cubierta
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    zIndex: 1, // Prioridad visual más alta para que no quede detrás del mapa
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
    height: 300, // Altura ajustada para el mapa
    marginHorizontal: 10, // Alineación con la barra de búsqueda
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
});

export default Home;
