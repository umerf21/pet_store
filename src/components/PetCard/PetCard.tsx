// src/components/PetCard.tsx
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ROOT_PAGE_URL, RootStackParamList } from '../../navigator/navigation.types';
import { DEFAULT_IMAGE } from '../../mock/petsData';

const PetCard = ({ pet }: { pet: any }) => {
  const [error, setError] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate(ROOT_PAGE_URL.PetDetails, { pet });
  };


  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image source={{ uri: error ?  DEFAULT_IMAGE : pet?.image }} style={styles.image}  onError={() => setError(true)} />
      <View style={styles.info}>
        <Text style={styles.name}>{pet.name}</Text>
        <Text style={styles.details}>{pet.type} • {pet.breed}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PetCard;

