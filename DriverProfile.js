//DriverProfile.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { deleteDriver, updateDriver } from './apiService';
import * as ImagePicker from 'expo-image-picker';

export function DriverProfile({ driver, navigation }) {
    const [firstName, setFirstName] = useState(driver.firstName);
    const [lastName, setLastName] = useState(driver.lastName);
    const [phone, setPhone] = useState(driver.phone);
    const [carId, setCarId] = useState(driver.car_id);
    const [email, setEmail] = useState(driver.email);
    const [location, setLocation] = useState(driver.location);
    const [comment, setComment] = useState(driver.comment);
    const [picture, setPicture] = useState(driver.picture);
    const [image, setImage] = useState(driver.image);

    const handleDeleteDriver = async () => {
      try {
        await deleteDriver(email);
        Alert.alert('Driver deleted successfully');
        navigation.navigate('Home');
      } catch (error) {
        Alert.alert('Error deleting driver');
      }
    };
  
    const handleUpdateDriver = async () => {
      try {
        await updateDriver(firstName, lastName, phone, carId, comment, picture, image, location, email);
        Alert.alert('Driver updated successfully');
        navigation.navigate('Driver Login');
      } catch (error) {
        Alert.alert('Error updating driver');
      }
    };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const formData = new FormData();
      formData.append('image', {
        uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });

      try {
        const response = await fetch('http://192.168.43.70:3000/upload', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const data = await response.json();
        if (response.ok) {
          setImage(data.file);
        } else {
          Alert.alert(data.message);
        }
      } catch (error) {
        Alert.alert('Error uploading image');
      }
    }
  };

  const pickPicture = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const formData = new FormData();
      formData.append('picture', {
        uri,
        name: 'picture.jpg',
        type: 'image/jpeg',
      });

      try {
        const response = await fetch('http://192.168.43.70:3000/upload', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const data = await response.json();
        if (response.ok) {
          setPicture(data.file);
        } else {
          Alert.alert(data.message);
        }
      } catch (error) {
        Alert.alert('Error uploading image');
      }
    }
  };

  if (!driver) {
    return <Text>Loading...</Text>;
  }

  return (
        <View style={styles.aboutContainer}>
            <Text style={styles.aboutTitle}>My Profile</Text>
            <ScrollView>
                <View style={styles.driverInfo}>
                    <Image source={{ uri: image }} style={styles.profilePicture}/>
                    <Text style={styles.infoText}>First Name: {firstName}</Text>
                    <Text style={styles.infoText}>Last Name: {lastName}</Text>
                    <Text style={styles.infoText}>Phone: {phone}</Text>
                    <Text style={styles.infoText}>Car ID: {carId}</Text>
                    <Text style={styles.infoText}>Email: {email}</Text>
                    <Image source={{ uri: picture }} style={styles.postImage} />
                </View>
                {image && <Image source={{ uri: `http://192.168.43.70:3000/${image}` }} style={{ width: 200, height: 200 }} />}
            </ScrollView>
            <TextInput placeholder="First Name" onChangeText={setFirstName} value={firstName} style={styles.input} />
            <TextInput placeholder="Last Name" onChangeText={setLastName} value={lastName} style={styles.input} />
            <TextInput placeholder="Phone" onChangeText={setPhone} value={phone} style={styles.input} />
            <TextInput placeholder="Car ID" onChangeText={setCarId} value={carId} style={styles.input} />
            <TextInput placeholder="Location" onChangeText={setLocation} value={location} style={styles.input} />
            <TextInput placeholder="Comment" onChangeText={setComment} value={comment} style={styles.input} />
            <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                <Text style={styles.imagePickerText}>Pick display image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pickPicture} style={styles.imagePicker}>
                <Text style={styles.imagePickerText}>Pick profile picture</Text>
            </TouchableOpacity>
            <Button title="Update" onPress={handleUpdateDriver} />
            <Button title="Delete" onPress={handleDeleteDriver} />
        </View>
    );
};

DriverProfile.propTypes = {
  driver: PropTypes.object,
  navigation: PropTypes.object.isRequired,
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
  driverInfo: {
    marginBottom: 20,
  },
  imagePicker: {
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
  imagePickerText: {
    color: '#000',
    textAlign: 'center',
  },
});

export default DriverProfile;
