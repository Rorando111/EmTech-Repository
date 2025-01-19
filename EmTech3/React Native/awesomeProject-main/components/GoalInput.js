import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const textInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Your Course Goal"
        style={styles.textInput}
        onChangeText={textInputHandler}
        value={enteredGoalText}
        placeholderTextColor="#777"
      />
      <View style={styles.buttonContainer}>
        <Button title="Add Goal" onPress={addGoalHandler} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: '#333',
    padding: 10,
    width: '90%',
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  buttonContainer: {
    marginTop: 10, // Space above the button container
    width: '90%', // Ensure it takes the same width as the text input
    alignItems: 'center', // Center align the button
  },
});

export default GoalInput;