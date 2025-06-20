import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface RatingInputProps {
  attribute: string;
  onRate: (rating: number) => void;
}

const RatingInput: React.FC<RatingInputProps> = ({ attribute, onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
    onRate(value);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText>{attribute}:</ThemedText>
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map((value) => (
          <TouchableOpacity key={value} onPress={() => handleRating(value)}>
            <Text style={[styles.star, value <= rating && styles.selected]}>★</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
  },
  stars: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 24,
    color: 'gray',
    marginRight: 5,
  },
  selected: {
    color: 'orange',
  },
});

export default RatingInput;
