// src/screens/PetDetailScreen.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ROOT_PAGE_URL, RootStackParamList } from '../../navigator/navigation.types';
import AppButton from '../../components/AppButton/AppButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DEFAULT_IMAGE } from '../../mock/petsData';
import { AppStyles } from '../../theme';

type PetDetailRouteProp = RouteProp<RootStackParamList, 'PetDetails'>;

const PetDetailsScreen = () => {
  const route = useRoute<PetDetailRouteProp>();
  const { pet }:any = route.params;
  const [error, setError] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
    const onAdoptPress = () => {
      navigation.navigate(ROOT_PAGE_URL.Payment);
    };

  return (
    <View style={styles.container}>
      <View style={AppStyles.flex1}>
       <Image source={{ uri: error ?  DEFAULT_IMAGE : pet?.image }} style={styles.image}  onError={() => setError(true)} />
      <Text style={styles.name}>{pet.name}</Text>
      <Text style={styles.info}>Type: {pet.type}</Text>
      <Text style={styles.info}>Breed: {pet.breed}</Text>
      <Text style={styles.info}>Age: {pet.age} year(s)</Text>
      <Text style={styles.description}>
        {pet.description || 'This adorable pet is looking for a loving home. Come meet your new best friend!'}
      </Text>
      </View>
      <View >
      <AppButton title="Adopt" onPress={onAdoptPress} />
      </View>
    </View>
  );
};

export default PetDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginTop: 16,
    color: '#666',
  },
});
