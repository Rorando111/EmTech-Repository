import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Image, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim()) {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        enteredGoalText,
      ]);
      setEnteredGoalText('');
    }
  }

  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers-clan.com/wp-content/uploads/2024/04/panda-branch-aesthetic-desktop-wallpaper-preview.jpg' }}
      style={styles.background}
    >
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={{ uri: 'https://www.stickers-muraux.fr/ori-stickers-panda-23754.jpg' }}
            style={styles.pandaSticker}
          />
          <Text style={styles.title}>Goals List</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Your Course Goal"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            placeholderTextColor="#777"
          />
          <View style={styles.buttonContainer}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#000" />
          </View>
        </View>
        <View style={styles.goalListContainer}>
          <ScrollView>
            {courseGoals.map((goal, index) => (
              <View key={index} style={styles.goalItem}>
                <Image
                  source={{ uri: 'https://th.bing.com/th/id/OIP.tlNWR2gX99NMtvMjFGMY0AHaHa?rs=1&pid=ImgDetMain' }}
                  style={styles.sticker}
                />
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginLeft: 10,
  },
  pandaSticker: {
    width: 40,
    height: 40,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#333',
    padding: 10,
    width: '90%',
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  buttonContainer: {
    marginTop: 10,
    width: '90%',
  },
  goalListContainer: {
    marginTop: 20,
    flex: 1,
    height: '10%',
  },
  goalItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sticker: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  goalText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});