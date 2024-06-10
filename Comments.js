//Comments.js
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const comments = [
  { id: "1", author: "Charlie", content: "Great post!" },
  { id: "2", author: "Dave", content: "Thanks for the info." },
];

const Comments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Comments</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  comment: {
    marginBottom: 10,
  },
  author: {
    fontWeight: "bold",
  },
  content: {
    color: "gray",
  },
});

export default Comments;
