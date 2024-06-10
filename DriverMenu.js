//DriverMenu.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome, Fontisto, MaterialIcons, Entypo } from '@expo/vector-icons';
import DriverProfile from './DriverProfile';

export default function DriverMenu({ route, navigation }) {
  const { driver } = route.params;
  const { location } = route;
  const { notifications } = route;
  const { inbox } = route;
  const [activeTab, setActiveTab] = useState('DriverProfile');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Driver Profile</Text>
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <ScrollView>
          {activeTab === 'DriverProfile' && (
            <DriverProfile driver={driver} navigation={navigation}/>
          )}
          {activeTab === 'Location' && (
            <Location location={location} navigation={navigation}/>
          )}
          {activeTab === 'Notifications' && (
            <Notifications notifications={notifications} navigation={navigation}/>
          )}
          {activeTab === 'Inbox' && (
            <Inbox inbox={inbox} navigation={navigation}/>
          )}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const NavBar = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.navbarContainer}>
      <ScrollView horizontal contentContainerStyle={styles.row}>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'DriverProfile' && styles.activeTab]}
          onPress={() => setActiveTab('DriverProfile')}
        >
          <FontAwesome name="user" size={32} color={activeTab === 'DriverProfile' ? '#1877f2' : 'black'} />
          <Text style={styles.iconText}>My Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.iconContainer, activeTab === 'Location' && styles.activeTab]}
          onPress={() => setActiveTab('Location')}>
          <Entypo name="location-pin" size={32} color={activeTab === 'Location' ? '#1877f2' : 'black'} />
          <Text style={styles.iconText}>Location</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.iconContainer, activeTab === 'Notifications' && styles.activeTab]}
          onPress={() => setActiveTab('Notifications')}>
          <MaterialIcons name="notifications" size={32} color={activeTab === 'Notifications' ? '#1877f2' : 'black'} />
          <Text style={styles.iconText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.iconContainer, activeTab === 'Inbox' && styles.activeTab]}
          onPress={() => setActiveTab('Inbox')}>
          <Fontisto name="email" size={32} color={activeTab === 'Inbox' ? '#1877f2' : 'black'} />
          <Text style={styles.iconText}>Inbox</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export function Location() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Location</Text>
    </View>
  );
}

export function Notifications() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Notifications</Text>
    </View>
  );
}

export function Inbox() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Inbox</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
    margin: 10,
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
  },
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    fontSize: 24,
  },
});
