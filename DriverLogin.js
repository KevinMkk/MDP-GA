//DriverLogin.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { loginDriver } from './apiService';

const DriverLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const result = await loginDriver(email, password);
      if (result && result.data) {
        navigation.navigate('Driver Menu', { driver: result.data });
      } else {
        Alert.alert('Login Failed', 'Please check your email and password and try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'Error logging in driver');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>
        No account? Sign-Up{' '}
        <TouchableOpacity onPress={() => navigation.navigate("Driver Signup")}>
          <Text style={styles.signUpLink}>here</Text>
        </TouchableOpacity>.
      </Text>
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
    fontFamily: 'System',
  },
  signUpText: {
    marginTop: 15,
    textAlign: 'center',
  },
  signUpLink: {
    color: 'rgb(34, 145, 12)',
  },
});

export default DriverLogin;
