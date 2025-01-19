import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

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
    borderColor: '#007AFF',  // Changed to a more passable light blue
    padding: 10,
    width: '90%',
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 10,  // Adds spacing between the textbox and button
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
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#007AFF',  // Makes the button background light blue
    paddingVertical: 8,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff', // White text for button
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GoalInput;
