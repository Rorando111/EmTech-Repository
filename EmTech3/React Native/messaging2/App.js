// App.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Status from './components/Status'; // Import the Status component
import InputMethodEditor from './components/InputMethodEditor'; // Your input method editor
import MessageList from './components/MessageList'; // Your message list component
import Constants from 'expo-constants'; // Import Constants here as well

export default function App() {
  const [messages, setMessages] = useState([]); // State to hold messages

  const handleInputMethodChange = (newMessage) => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: newMessage, id: Date.now(), sender: 'user' },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Status />
      <MessageList messages={messages} />
      <InputMethodEditor onChangeInputMethod={handleInputMethodChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Constants.statusBarHeight, // Use Constants to avoid overlap
  },
});
