import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import BeerSearch from '@/components/BeerSearch';
import BeerDetails from '@/components/BeerDetails';
import RatingInput from '@/components/RatingInput';
import TastingNotes from '@/components/TastingNotes';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <BeerSearch onSearch={(query) => console.log(query)} />
      <BeerDetails
        beer={{
          name: 'Example Beer',
          brewery: 'Example Brewery',
          style: 'IPA',
          abv: 6.5,
          ibu: 60,
          description: 'A delicious IPA with notes of citrus and pine.',
        }}
      />
      <RatingInput attribute="Aroma" onRate={(rating) => console.log(`Aroma rating: ${rating}`)} />
      <RatingInput attribute="Appearance" onRate={(rating) => console.log(`Appearance rating: ${rating}`)} />
      <RatingInput attribute="Taste" onRate={(rating) => console.log(`Taste rating: ${rating}`)} />
      <RatingInput attribute="Mouthfeel" onRate={(rating) => console.log(`Mouthfeel rating: ${rating}`)} />
      <RatingInput attribute="Overall" onRate={(rating) => console.log(`Overall rating: ${rating}`)} />
      <TastingNotes onChangeText={(text) => console.log(`Tasting notes: ${text}`)} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
