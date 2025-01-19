import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput1 from './components/GoalInput1';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalText) => {
    if (goalText.trim()) {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { key: Math.random().toString(), text: goalText },
      ]);
    }
  };

  const renderGoalItem = ({ item }) => {
    return (
      <GoalItem text={item.text} />
    );
  };

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

        <GoalInput1 onAddGoal={addGoalHandler} />

        <FlatList
          data={courseGoals}
          renderItem={renderGoalItem}
          keyExtractor={(item) => item.key}
        />
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
});