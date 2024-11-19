import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { products } from '../components/ProductCard'; // Importamos los productos simulados

const Informes = () => {
  // Simulamos los productos eliminados (esto debería venir de un backend más adelante)
  const [deletedProducts, setDeletedProducts] = useState([
    { id: 8, name: 'Producto Eliminado 1', price: 2000 },
    { id: 9, name: 'Producto Eliminado 2', price: 5000 },
  ]);

  // Ordenamos los productos por precio para mostrar los más baratos
  const cheaperProducts = [...products].sort((a, b) => a.price - b.price).slice(0, 3);

  // Ordenamos los productos por precio para mostrar los más caros
  const expensiveProducts = [...products].sort((a, b) => b.price - a.price).slice(0, 3);

  // Simulación de los productos más buscados
  const mostSearchedProducts = [
    { id: 1, name: 'Whisky Johnnie Walker', searches: 120 },
    { id: 2, name: 'Tortilla Rapidita', searches: 80 },
    { id: 3, name: 'Pan de Molde', searches: 60 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Informes</Text>

      {/* Productos con menor precio */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Productos con menor precio</Text>
        {cheaperProducts.map((product) => (
          <View key={product.id} style={styles.item}>
            <Text style={styles.itemText}>{product.name}</Text>
            <Text style={styles.itemPrice}>${product.price.toLocaleString()}</Text>
          </View>
        ))}
      </View>

      {/* Productos eliminados */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Productos eliminados</Text>
        {deletedProducts.map((product) => (
          <View key={product.id} style={styles.item}>
            <Text style={styles.itemText}>{product.name}</Text>
            <Text style={styles.itemPrice}>${product.price.toLocaleString()}</Text>
          </View>
        ))}
      </View>

      {/* Productos más caros */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Productos más caros</Text>
        {expensiveProducts.map((product) => (
          <View key={product.id} style={styles.item}>
            <Text style={styles.itemText}>{product.name}</Text>
            <Text style={styles.itemPrice}>${product.price.toLocaleString()}</Text>
          </View>
        ))}
      </View>

      {/* Productos más buscados */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Productos más buscados</Text>
        {mostSearchedProducts.map((product) => (
          <View key={product.id} style={styles.item}>
            <Text style={styles.itemText}>
              {product.name} - {product.searches} búsquedas
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default Informes;
