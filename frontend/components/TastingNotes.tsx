import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface TastingNotesProps {
  onChangeText: (text: string) => void;
}

const TastingNotes: React.FC<TastingNotesProps> = ({ onChangeText }) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Tasting Notes:</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Enter your tasting notes here"
        multiline
        numberOfLines={4}
        onChangeText={onChangeText}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    textAlignVertical: 'top',
  },
});

export default TastingNotes;
