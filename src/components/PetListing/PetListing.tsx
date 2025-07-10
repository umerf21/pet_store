// src/screens/PetListScreen.tsx
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import PetCard from '../PetCard/PetCard';
import Banner from '../Banner/Banner';

const PetListing = ({pets}:any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        ListHeaderComponent={<Banner/>}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PetCard pet={item} />}
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal:16 }}
      />
    </View>
  );
};

export default PetListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
