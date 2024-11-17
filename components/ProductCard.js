import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// Lista de productos con descripciones aleatorias
const products = [
  {
    id: 1,
    name: 'Whisky Johnnie Walker',
    price: 9890,
    image: 'https://via.placeholder.com/80',
    category: 'Bebidas',
    description: 'Un whisky clásico para todas las ocasiones.',
  },
  {
    id: 2,
    name: 'Tortilla Rapidita',
    price: 1000,
    image: 'https://via.placeholder.com/80',
    category: 'Comida',
    description: 'Perfectas para tus tacos y wraps favoritos.',
  },
  {
    id: 3,
    name: 'Pan de Molde',
    price: 2790,
    image: 'https://via.placeholder.com/80',
    category: 'Panadería',
    description: 'Ideal para desayunos y meriendas deliciosas.',
  },
  {
    id: 4,
    name: 'Pan Precocido',
    price: 2290,
    image: 'https://via.placeholder.com/80',
    category: 'Panadería',
    description: 'Fácil de preparar y siempre fresco.',
  },
  {
    id: 5,
    name: 'Tortillas XL',
    price: 2000,
    image: 'https://via.placeholder.com/80',
    category: 'Comida',
    description: 'El tamaño perfecto para grandes sabores.',
  },
  {
    id: 6,
    name: 'Tortillas Queso',
    price: 1000,
    image: 'https://via.placeholder.com/80',
    category: 'Comida',
    description: 'Con un toque de queso para mayor sabor.',
  },
];

const ProductCard = ({ product }) => {
  const { name, price, image, description } = product;

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
      <Text style={styles.price}>${price.toLocaleString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#32CD32',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

// Exporta los productos para usarlos en otros componentes
export { ProductCard, products };
