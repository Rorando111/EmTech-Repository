import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const InputMethodEditor = ({ onChangeInputMethod }) => {
  const [text, setText] = useState('');

  const handleChange = (inputText) => {
    setText(inputText);
  };

  const handleSend = () => {
    if (text.trim()) {
      onChangeInputMethod(text); // Send the text to the parent
      setText(''); // Clear the input after sending
    }
  };

  return (
    <View style={styles.container}>
      {/* Row for buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Text button pressed")}>
          <Text style={styles.buttonText}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Image sending...")}>
          <Text style={styles.buttonText}>Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Location sending...")}>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableOpacity>
      </View>

      {/* Row for input and send button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={handleChange} // Update text state
          placeholder="Type a message..."
          onSubmitEditing={handleSend} // Optional: Send on enter
        />

        {/* Send button on the right */}
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white', // Optional: background color
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons in a row
    justifyContent: 'flex-start', // Spread buttons evenly
    marginBottom: 10, // Add space between buttons and input
  },
  inputContainer: {
    flexDirection: 'row', // Align input and send button in a row
    alignItems: 'center', // Align input and button vertically
  },
  input: {
    flex: 1, // Take up as much space as possible
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',  // Light background for input
    height: 45,                  // Adjust height for better alignment
  },
  button: {
    backgroundColor: '#007BFF',  // Blue background for buttons
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 5,         // Space between buttons
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sendButton: {
    backgroundColor: '#28A745',  // Green background for Send button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 10,              // Space between input and Send button
  },
  sendButtonText: {
    color: 'white',              // White text for Send button
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default InputMethodEditor;
