import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface BeerSearchProps {
  onSearch: (query: string) => void;
}

const BeerSearch: React.FC<BeerSearchProps> = ({ onSearch }) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Search for a beer:</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Enter beer name"
        onChangeText={onSearch}
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
});

export default BeerSearch;
