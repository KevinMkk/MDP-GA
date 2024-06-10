//PassengerMenu.js
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import PassengerProfile from './PassengerProfile';
import { Post, NavBar, SearchBar } from './Fields';
import axios from 'axios';

const PassengerMenu = ({ route, navigation }) => {
  const { passenger } = route.params;
  const [activeTab, setActiveTab] = useState('Home');
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

 
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const newPosts = [
        {
          name: 'Amohelang Monaleli',
          time: '10 minutes ago',
          message: 'Available at the moment',
          likes: 62,
          postImage: require('./pics/Amo.jpg'),
          comments: [],
        },
        {
          name: 'Mpho Khafo',
          time: '12 hrs',
          message: 'I am interested in gardening',
          likes: 30,
          postImage: require('./pics/Dd.jpeg'),
          comments: [],
        },
        {
          name: 'Retselisitsoe Pholo',
          time: '2 hrs',
          message: 'Doing well',
          likes: 5,
          postImage: require('./pics/Ff.jpeg'),
          comments: [],
        },
      ];
      setPosts(newPosts);
    };
    fetchData();
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://192.168.43.70:3000/drivers');
        const driverPosts = response.data.map((driver) => ({
          name: `${driver.firstName} ${driver.lastName}`,
          time: new Date(driver.created_at).toLocaleTimeString(),
          message: 'New driver post',
          likes: Math.floor(Math.random() * 100),
          postImage: null,
          comments: [],
        }));
        setPosts(driverPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <ScrollView>
        {activeTab === 'Home' &&
          filteredPosts.map((post, index) => (
            <Post
              key={index}
              name={post.name}
              time={post.time}
              message={post.message}
              likes={post.likes}
              postImage={post.postImage}
              comments={post.comments}
            />
          ))}
        {activeTab === 'PassengerProfile' && (
          <PassengerProfile passenger={passenger} navigation={navigation} />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});

export default PassengerMenu;


    

  
