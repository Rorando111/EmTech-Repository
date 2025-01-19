import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NavigationBar = () => {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false); // State for modal visibility

  const handleUserIconClick = () => {
    setIsWelcomeVisible(true); // Show the welcome pop-up when user icon is clicked
  };

  return (
    <View style={styles.navigationBar}>
      <MaterialCommunityIcons
        name="account"
        size={30}
        color="#000"
        onPress={handleUserIconClick}
      />

      <Text style={styles.title}>Goals List</Text>
      <Modal visible={isWelcomeVisible} transparent={true} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text>Welcome User!</Text>
            <Button title="Close" onPress={() => setIsWelcomeVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default NavigationBar;
