import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params; // Recibe el producto seleccionado
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Vicente', rating: 5, comment: 'Producto a buen precio y muy buena atención.' },
  ]);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState('');

  // Función para añadir una nueva reseña
  const handleAddReview = () => {
    const rating = Math.min(5, Math.max(1, parseInt(newRating))); // Asegura que el rango sea de 1 a 5
    if (newReview.trim() && rating > 0) {
      setReviews([
        ...reviews,
        { id: reviews.length + 1, name: 'Usuario', rating, comment: newReview },
      ]);
      setNewReview('');
      setNewRating('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Botón Regresar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Regresar</Text>
      </TouchableOpacity>

      {/* Información del producto */}
      <View style={styles.card}>
        <Text style={styles.storeName}>Líder</Text>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
      </View>

      {/* Sección de reseñas */}
      <Text style={styles.reviewsTitle}>Reseñas</Text>
      {reviews.map((review) => (
        <View key={review.id} style={styles.reviewCard}>
          <Text style={styles.reviewAuthor}>{review.name}:</Text>
          <View style={styles.reviewRating}>
            {Array.from({ length: review.rating }).map((_, i) => (
              <FontAwesome key={i} name="star" size={16} color="gold" />
            ))}
          </View>
          <Text style={styles.reviewText}>{review.comment}</Text>
        </View>
      ))}

      {/* Añadir nueva reseña */}
      <View style={styles.addReviewContainer}>
        <Text style={styles.addReviewTitle}>Añadir Reseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu reseña..."
          value={newReview}
          onChangeText={setNewReview}
        />
        <TextInput
          style={styles.input}
          placeholder="Calificación (1-5)"
          keyboardType="numeric"
          value={newRating}
          onChangeText={(value) => setNewRating(value.replace(/[^0-9]/g, ''))} // Solo números permitidos
        />
        <TouchableOpacity style={styles.addReviewButton} onPress={handleAddReview}>
          <Text style={styles.addReviewButtonText}>Agregar Reseña</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    color: '#4169E1',
    fontSize: 16,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00C853',
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewCard: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  reviewAuthor: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  reviewRating: {
    flexDirection: 'row',
  },
  reviewText: {
    fontSize: 14,
  },
  addReviewContainer: {
    marginTop: 20,
  },
  addReviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  addReviewButton: {
    backgroundColor: '#4169E1',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  addReviewButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ProductDetails;
