import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Producto = ({ route }) => {
  const { product } = route.params; // Recibe el producto seleccionado desde Productos.js o Home.js

  const [reviews, setReviews] = useState([
    { id: 1, name: 'Vicente', rating: 5, description: 'Producto a buen precio y muy buena atención.' },
  ]);
  const [addingReview, setAddingReview] = useState(false);

  const handleAddReview = (newReview) => {
    setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
    setAddingReview(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Producto */}
      <View style={styles.productCard}>
        <Text style={styles.storeName}>{product.storeName || 'Tienda'}</Text>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>${product.price.toLocaleString()}</Text>
      </View>

      {/* Título de reseñas */}
      <Text style={styles.reviewsTitle}>Reseñas</Text>

      {/* Reseñas existentes */}
      {reviews.map((review) => (
        <View key={review.id} style={styles.reviewCard}>
          <Text style={styles.reviewName}>
            {review.name}:{' '}
            <Text style={styles.stars}>{'★'.repeat(review.rating)}</Text>
          </Text>
          <Text style={styles.reviewDescription}>{review.description}</Text>
        </View>
      ))}

      {/* Botón para agregar una reseña */}
      {!addingReview && (
        <TouchableOpacity
          style={styles.addReviewButton}
          onPress={() => setAddingReview(true)}
        >
          <Text style={styles.addReviewButtonText}>Agregar Reseña</Text>
        </TouchableOpacity>
      )}

      {/* Formulario para agregar reseñas */}
      {addingReview && <AgregarResena onSave={handleAddReview} onCancel={() => setAddingReview(false)} />}
    </ScrollView>
  );
};

const AgregarResena = ({ onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (!name || !rating || !description) {
      alert('Por favor completa todos los campos.');
      return;
    }
    onSave({ name, rating, description });
    setName('');
    setRating(0);
    setDescription('');
  };

  return (
    <View style={styles.reviewForm}>
      <Text style={styles.formTitle}>Agregar Reseña</Text>

      {/* Nombre */}
      <TextInput
        style={styles.input}
        placeholder="Tu nombre"
        value={name}
        onChangeText={setName}
      />

      {/* Calificación */}
      <View style={styles.ratingContainer}>
        <Text style={styles.formLabel}>Calificación:</Text>
        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Text style={[styles.star, rating >= star && styles.selectedStar]}>
                ★
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Descripción */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escribe tu reseña aquí..."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Botones de guardar y cancelar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  productCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#32CD32',
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewCard: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  reviewName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  stars: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  reviewDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  addReviewButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addReviewButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewForm: {
    backgroundColor: '#FFFBEA',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    fontSize: 14,
    color: '#000',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  formLabel: {
    fontSize: 14,
    color: '#000',
    marginRight: 10,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 20,
    color: '#CCC',
    marginRight: 5,
  },
  selectedStar: {
    color: '#FFD700',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#32CD32',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: '48%',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: '48%',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Producto;
