import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface BeerDetailsProps {
  beer: {
    name: string;
    brewery: string;
    style: string;
    abv: number;
    ibu: number;
    description: string;
  };
}

const BeerDetails: React.FC<BeerDetailsProps> = ({ beer }) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">{beer.name}</ThemedText>
      <ThemedText>{beer.brewery}</ThemedText>
      <ThemedText>Style: {beer.style}</ThemedText>
      <ThemedText>ABV: {beer.abv}%</ThemedText>
      <ThemedText>IBU: {beer.ibu}</ThemedText>
      <ThemedText>{beer.description}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
  },
});

export default BeerDetails;
