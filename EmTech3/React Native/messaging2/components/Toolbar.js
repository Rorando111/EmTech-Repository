import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Toolbar = ({ onSendMessage, onChangeInputMethod }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim().length > 0) {
      onSendMessage(text);  // Send the message to parent
      setText('');  // Clear the text input after sending
    }
  };

  return (
    <View style={styles.toolbar}>
      {/* Custom Buttons for switching input methods */}
      <TouchableOpacity style={styles.button} onPress={() => onChangeInputMethod('text')}>
        <Text style={styles.buttonText}>TEXT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onChangeInputMethod('image')}>
        <Text style={styles.buttonText}>IMAGE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onChangeInputMethod('location')}>
        <Text style={styles.buttonText}>LOCATION</Text>
      </TouchableOpacity>

      {/* Text Input for typing messages */}
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        value={text}  // Controlled input bound to state
        onChangeText={setText}  // Update state when input changes
        onSubmitEditing={handleSend}  // Send message when "Enter" is pressed
      />

      {/* Custom Send Button */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>SEND</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#CCC',  // Adjust the border color of the input field
    borderRadius: 10,     // Adjusted for rounded corners
    padding: 12,          // Adjusted padding for better spacing
    backgroundColor: '#FFF',
    height: 50,           // Increase height of input box
    fontSize: 16,         // Adjust font size inside the input field
  },
  button: {
    backgroundColor: '#007BFF',  // Button background color (blue)
    paddingHorizontal: 12,       // Padding inside buttons
    paddingVertical: 8,
    borderRadius: 5,
    marginHorizontal: 5,         // Space between buttons
  },
  buttonText: {
    color: 'white',              // Button text color
    fontSize: 14,
    fontWeight: 'bold',
  },
  sendButton: {
    backgroundColor: '#fffff',  // Send button background color (green)
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 10,              // Space between input and Send button
  },
  sendButtonText: {
    color: 'white',              // Send button text color
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Toolbar;
