import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, FlatList, Modal, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'; // Import the GoalInput component
import NavigationBar from './components/Navigation'; // Import the NavigationBar component

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);


 const addGoalHandler = (goalText) => {
     if (goalText.trim()) {
       const newGoals = [
         ...courseGoals,
         { key: Math.random().toString(), text: goalText },
       ];
       setCourseGoals(newGoals);
       setModalVisible(false); // Close the modal after adding the goal

       if (newGoals.length > 5) {
         setWarningVisible(true); // Show warning modal if more than 5 goals
       }
     }
   };
  const clearGoalsHandler = () => {
    setCourseGoals([]); // Clear all goals
  };

  const deleteGoalHandler = (goalKey) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== goalKey);
    });
  };

  const renderGoalItem = ({ item }) => {
    return (
      <GoalItem
        text={item.text}
        onDelete={() => deleteGoalHandler(item.key)} // Pass the delete handler
      />
    );
  };

  return (
    <ImageBackground
      source={require('./assets/panda-branch-aesthetic-desktop-wallpaper-preview.jpg')} // Ensure the path is correct
      style={styles.background}
    >
      <View style={styles.appContainer}>
        <NavigationBar />

        <Button title="Add New Goal" onPress={() => setModalVisible(true)} />
        <Button title="Clear All Goals" color="black" onPress={clearGoalsHandler} />

        <Modal
          visible={modalVisible}
          transparent={true}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <GoalInput onAddGoal={addGoalHandler} onCancel={() => setModalVisible(false)} />
              <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
        <Modal visible={warningVisible} transparent={true}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContent}>
                    <Text style = {styles.warningText}>You have more than 5 goals! Be easy on yourself</Text>
                        <Button title="Close" onPress={() => setWarningVisible(false)} />
                </View>
            </View>
        </Modal>

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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  warningText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 15,
      marginBottom: 10,
      textAlign: 'center', // Center the warning text
    },
});