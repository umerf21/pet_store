// components/Header.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

type HeaderProps = {
  title: string;
  onMorePress?: () => void;
};

const Header: React.FC<HeaderProps> = ({ title, onMorePress }) => {
  return (
    <View style={styles.container}>
      {/* Left: Logo */}
      {/* <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      /> */}
      <Text style={styles.logo}>logo</Text>


      {/* Center: Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right: More icon */}
      {onMorePress && <TouchableOpacity onPress={onMorePress} hitSlop={10}>
        <Icon name="more-vert" size={24} color="#333" />
      </TouchableOpacity>}
    </View>
  );
};

export default Header;


