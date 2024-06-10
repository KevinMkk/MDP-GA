//PassengerProfile.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert } from 'react-native';
import { deletePassenger, updatePassenger } from './apiService';

const PassengerProfile = ({ passenger, navigation }) => {
    const [firstName, setFirstName] = useState(passenger.firstName);
    const [lastName, setLastName] = useState(passenger.lastName);
    const [phone, setPhone] = useState(passenger.phone);
    const [email, setEmail] = useState(passenger.email);
  
    const handleDeletePassenger = async () => {
      try {
        await deletePassenger(email);
        Alert.alert('Passenger deleted successfully');
        navigation.navigate('Home');
      } catch (error) {
        Alert.alert('Error deleting passenger');
      }
    };
  
    const handleUpdatePassenger = async () => {
      try {
        await updatePassenger(firstName, lastName, phone, email);
        navigation.navigate('Passenger Login');
        alert('Passenger updated successfully');
      } catch (error) {
        alert('Error updating passenger');
      }
    };
  
    return (
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>My Profile</Text>
        <ScrollView>
          <View style={styles.passengerInfo}>
            <Text style={styles.infoText}>First Name: {passenger.firstName}</Text>
            <Text style={styles.infoText}>Last Name: {passenger.lastName}</Text>
            <Text style={styles.infoText}>Phone: {passenger.phone}</Text>
            <Text style={styles.infoText}>Email: {passenger.email}</Text>
          </View>
        </ScrollView>
        <TextInput placeholder="First Name" onChangeText={setFirstName} value={firstName} style={styles.input} />
        <TextInput placeholder="Last Name" onChangeText={setLastName} value={lastName} style={styles.input} />
        <TextInput placeholder="Phone" onChangeText={setPhone} value={phone} style={styles.input} />
        <Button title="Update" onPress={handleUpdatePassenger} />
        <Button title="Delete" onPress={handleDeletePassenger} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    aboutContainer: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    aboutTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    infoText: {
      fontSize: 16,
      marginVertical: 2,
    },
    passengerInfo: {
      marginBottom: 20,
    },
  });

  export default PassengerProfile;
