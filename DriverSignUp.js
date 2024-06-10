//DriverSignUp.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { addDriver } from './apiService';

const DriverLogin = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [carId, setCarId] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAddDriver = async () => {
    try {
      await addDriver(firstName, lastName, phone, carId, email, password);
      Alert.alert('Success', 'Driver added successfully');
      navigation.navigate('Driver Login');
    } catch (error) {
      Alert.alert('Error', 'Error adding driver');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Sign-Up</Text>
      <TextInput
        placeholder="First Name"
        onChangeText={setFirstName}
        value={firstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        onChangeText={setLastName}
        value={lastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        onChangeText={setPhone}
        value={phone}
        style={styles.input}
      />
      <TextInput
        placeholder="Car ID"
        onChangeText={setCarId}
        value={carId}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddDriver}>
        <Text style={styles.buttonText}>Sign-up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(34, 145, 12)',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: 'System',
  },
});

export default DriverLogin;
