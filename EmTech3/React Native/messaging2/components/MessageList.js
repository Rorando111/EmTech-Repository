// MessageList.js
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const MessageList = ({ messages }) => {
  return (
    <FlatList
      data={messages.reverse()} // Reverse the order of messages
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.otherMessage]}>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      )}
      style={styles.list}
      inverted // This prop makes the list display from bottom to top
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingBottom: 20, // Add padding at the bottom to prevent overlap with the input method editor
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    maxWidth: '80%', // Limit width of messages
    borderRadius: 10, // Rounded corners
  },
  userMessage: {
    alignSelf: 'flex-end', // Align user messages to the right
    backgroundColor: '#d1e7dd', // Light green for user messages
  },
  otherMessage: {
    alignSelf: 'flex-start', // Align other messages to the left
    backgroundColor: '#f8d7da', // Light red for other messages
  },
  messageText: {
    fontSize: 16,
  },
});

export default MessageList;
