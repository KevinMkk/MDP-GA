//Fields.
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Post = ({ name, time, message, likes, postImage, comments }) => {
    const [likeCount, setLikeCount] = useState(likes);
    const [commentText, setCommentText] = useState('');
    const [commentsVisible, setCommentsVisible] = useState(false);
    const [commentsList, setComments] = useState(comments);
  
    const incrementLikes = () => {
      setLikeCount(likeCount + 1);
    };
  
    const addComment = () => {
      if (commentText.trim() !== '') {
        const newComment = {
          text: commentText,
          time: new Date().toLocaleTimeString(),
        };
        setComments((prevComments) => [...prevComments, newComment]);
        setCommentText('');
      }
    };
  
    return (
      <TouchableOpacity style={styles.postContainer}>
        <View style={styles.header}>
          <Image source={require('./pics/Amo.jpg')} style={styles.profilePicture} />
          <View style={styles.detailsBox}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.timeText}>{time}</Text>
          </View>
        </View>
        <View style={styles.postBody}>
          <Text style={styles.postMessage}>{message}</Text>
          <Image source={postImage} style={styles.postImage} />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={incrementLikes} style={styles.iconsRow}>
            <AntDesign name="like2" size={24} color="black" style={styles.icon} />
            <Text style={styles.iconText}>{likeCount} Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCommentsVisible(!commentsVisible)} style={styles.iconsRow}>
            <AntDesign name="message1" size={24} color="black" style={styles.icon} />
            <Text style={styles.iconText}>{commentsList.length} Comments</Text>
          </TouchableOpacity>
        </View>
        {commentsVisible && (
          <View style={styles.commentsContainer}>
            <View style={styles.commentInputContainer}>
              <TextInput
                style={styles.commentInput}
                value={commentText}
                onChangeText={setCommentText}
                placeholder="Add a comment..."
              />
              <TouchableOpacity onPress={addComment} style={styles.sendButton}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
            {commentsList.map((comment, index) => (
              <View style={styles.commentBox} key={index}>
                <Text style={styles.commentText}>{comment.text}</Text>
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>
    );
  };
  
  const NavBar = ({ activeTab, setActiveTab }) => {
    return (
      <View style={styles.navbarContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
          onPress={() => setActiveTab('Home')}
        >
          <AntDesign name="home" size={24} color={activeTab === 'Home' ? '#1877f2' : 'black'} />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'PassengerProfile' && styles.activeTab]}
          onPress={() => setActiveTab('PassengerProfile')}
        >
          <AntDesign name="user" size={24} color={activeTab === 'PassengerProfile' ? '#1877f2' : 'black'} />
          <Text style={styles.tabText}>My Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 25,
      paddingHorizontal: 15,
      paddingVertical: 5,
      marginBottom: 15,
    },
    searchInput: {
      flex: 1,
      marginLeft: 10,
    },
    navbarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderTopWidth: 1,
      borderColor: '#ccc',
      paddingVertical: 10,
      backgroundColor: '#f9f9f9',
    },
    tab: {
      alignItems: 'center',
    },
    activeTab: {
      borderBottomWidth: 2,
      borderColor: '#1877f2',
    },
    tabText: {
      fontSize: 12,
      marginTop: 5,
    },
    postContainer: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      overflow: 'hidden',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    profilePicture: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    detailsBox: {
      marginLeft: 10,
    },
    nameText: {
      fontWeight: 'bold',
    },
    timeText: {
      color: 'gray',
    },
    postBody: {
      padding: 10,
    },
    postMessage: {
      marginBottom: 10,
    },
    postImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    iconsRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 5,
    },
    iconText: {
      color: 'gray',
    },
    commentsContainer: {
      padding: 10,
    },
    commentInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    commentInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
    sendButton: {
      backgroundColor: '#1877f2',
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    sendButtonText: {
      color: '#fff',
    },
    commentBox: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      padding: 10,
      marginTop: 10,
    },
    commentText: {
      color: 'gray',
    },
  });

  export { Post, NavBar, SearchBar };