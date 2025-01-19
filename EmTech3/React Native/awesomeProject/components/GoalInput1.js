import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

const GoalInput1 = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const textInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText.trim().length === 0) {
      Alert.alert('Invalid input', 'Please enter a goal!');
      return;
    }
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
        <Pressable
          delayPressOut={1000}
          onPressOut={() => Alert.alert('Pressed Out after Delay!')}
          style={({ pressed }) => [
            styles.pressableButton,
            pressed ? styles.pressed : null,
          ]}
        >
          <Text style={styles.buttonText}>Add Goal</Text>
        </Pressable>
      </View>
    </View>
  );
};

// Styles remain the same as before

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
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
  },
  pressableButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  pressed: {
    opacity: 0.7, // Change opacity when button is pressed
  },
});

export default GoalInput1;
