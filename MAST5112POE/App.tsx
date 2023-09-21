import React from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';

const Bookstore = () => {
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
    { id: 4, title: 'Book 4', author: 'Author 4' },
    { id: 5, title: 'Book 5', author: 'Author 5' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bookstore</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search books..."
      />
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  bookItem: {
    marginBottom: 8,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 16,
    color: '#888',
  },
});

export default Bookstore;
