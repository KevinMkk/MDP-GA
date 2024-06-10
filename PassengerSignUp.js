//PassengerSignUp.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { addPassenger } from './apiService';

const PassengerSignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAddPassenger = async () => {
    try {
      await addPassenger(firstName, lastName, phone, email, password);
      Alert.alert('Success', 'Passenger added successfully');
      navigation.navigate('Passenger Login');
    } catch (error) {
      Alert.alert('Error', 'Error adding passenger');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Passenger Sign-Up</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleAddPassenger}>
        <Text style={styles.buttonText}>Sign-Up</Text>
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
    padding: 10,
    backgroundColor: 'rgb(34, 145, 12)',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: 'System', // Using default system font
  },
});

export default PassengerSignUp;

