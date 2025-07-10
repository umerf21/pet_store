// components/AppInput.tsx
import React from 'react';
import { TextInput, View, Text, StyleSheet, ViewStyle } from 'react-native';

type AppInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'number-pad' | 'email-address';
};

const AppInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  style,
  secureTextEntry = false,
  keyboardType = 'default',
}: AppInputProps) => (
  <View style={[styles.container, style]}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  </View>
);

export default AppInput;

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});
