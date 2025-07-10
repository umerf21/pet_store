// screens/PaymentScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import AppInput from '../../components/AppInput/AppInput';
import AppButton from '../../components/AppButton/AppButton';

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple'>('card');

  const handlePay = () => {
    Alert.alert('Payment Initiated', `Method: ${paymentMethod}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Payment</Text>

      {/* Payment Method Switch */}
      <View style={styles.toggleRow}>
        <TouchableOpacity
          style={[
            styles.toggleOption,
            paymentMethod === 'card' && styles.activeToggle,
          ]}
          onPress={() => setPaymentMethod('card')}
        >
          
          <Text style={styles.toggleText}>Card</Text>
        </TouchableOpacity>

        {Platform.OS === 'ios' && (
          <TouchableOpacity
            style={[
              styles.toggleOption,
              paymentMethod === 'apple' && styles.activeToggle,
            ]}
            onPress={() => setPaymentMethod('apple')}
          >
            
            <Text style={styles.toggleText}>Apple Pay</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Card Details */}
      {paymentMethod === 'card' && (
        <>
          <AppInput
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="number-pad"
          />
          <AppInput
            label="Expiry Date"
            placeholder="MM/YY"
            value={expiry}
            onChangeText={setExpiry}
            keyboardType="number-pad"
          />
          <AppInput
            label="CVV"
            placeholder="123"
            value={cvv}
            onChangeText={setCvv}
            keyboardType="number-pad"
            secureTextEntry
          />
        </>
      )}

      {/* Apple Pay Info */}
      {paymentMethod === 'apple' && Platform.OS === 'ios' && (
        <View style={styles.applePayBox}>
          
          <Text style={styles.appleText}>Pay with Apple Pay</Text>
        </View>
      )}

      <AppButton title="Pay Now" onPress={handlePay} style={{ marginTop: 30 }} />
    </ScrollView>
  );
};

export default PaymentScreen;

