import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, ImageBackground, Image } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim()) { // Prevent adding empty goals
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        enteredGoalText,
      ]);
      setEnteredGoalText('');
    }
  }

  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers-clan.com/wp-content/uploads/2024/04/panda-branch-aesthetic-desktop-wallpaper-preview.jpg' }} // Panda-themed background image
      style={styles.background}
    >
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={{ uri: 'https://www.stickers-muraux.fr/ori-stickers-panda-23754.jpg' }} // Panda sticker next to the title
            style={styles.pandaSticker}
          />
          <Text style={styles.title}>Goals List</Text> 
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Your Course Goal"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value = {enteredGoalText}
            placeholderTextColor="#777"
          />
          <View style={styles.buttonContainer}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#000" /> 
          </View>
        </View>
        <ScrollView style={styles.goalsContainer}>
          {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Image
                source={{ uri: 'https://th.bing.com/th/id/OIP.tlNWR2gX99NMtvMjFGMY0AHaHa?rs=1&pid=ImgDetMain' }} // Panda sticker for goal items
                style={styles.sticker}
              />
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Increase transparency to make the background more visible
  },
  titleContainer: {
    flexDirection: 'row', // Align sticker and title in a row
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28, // Increased font size for aesthetics
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    textShadowColor: '#fff', // Add shadow for depth
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginLeft: 10, // Space between sticker and title
  },
  pandaSticker: {
    width: 40, // Set a fixed width for the sticker
    height: 40, // Set a fixed height for the sticker
  },
  inputContainer: {
    flexDirection: 'column', // Place the input and button in the same column
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000', // Change border bottom color to black
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#333', // Black border to fit the panda theme
    padding: 10,
    width: '90%', // Make input responsive and match goal item width
    borderRadius: 10, // Rounder edges for a softer look
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add slight transparency to text input
  },
  buttonContainer: {
    marginTop: 10, // Add space between the text input and the button
    width: '90%', // Set width to match the text input
  },
  goalsContainer: {
    marginTop: 20,
  },
  goalItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add slight transparency to goal items for better background visibility
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000', // Black border to match the panda aesthetic
    width: '90%', // Set width to match the input text field
    alignSelf: 'center', // Center the goal items within the container
    flexDirection: 'row', // Align sticker and text horizontally
    alignItems: 'center', // Center sticker and text vertically
  },
  sticker: {
    width: 30, // Set a fixed width for the sticker
    height: 30, // Set a fixed height for the sticker
    marginRight: 10, // Add space between sticker and text
  },
  goalText: {
    fontSize: 16,
    color: '#000', // Black text to stay within the panda theme
    fontWeight: 'bold',
  },
});