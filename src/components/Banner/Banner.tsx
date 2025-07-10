// components/Banner.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Images } from '../../theme';


const Banner = () => {
  return (
    <View style={styles.container}>
      {/* Left: Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Pet Store</Text>
        <Text style={styles.subtitle}>Adopt Pets</Text>
      </View>

      {/* Right: Image */}
      <Image
        source={Images.images.dogBanner} 
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default Banner;

