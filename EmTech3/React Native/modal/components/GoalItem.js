import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

const GoalItem = (props) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleDeletePress = () => {
    setDeleteModalVisible(true); // Show confirmation modal
  };

  const confirmDeleteHandler = () => {
    setDeleteModalVisible(false);
    props.onDelete(); // Confirm and delete the item
  };

  const cancelDeleteHandler = () => {
    setDeleteModalVisible(false); // Close the modal without deleting
  };

  return (
    <>
      <TouchableOpacity onPress={handleDeletePress}>
        <View style={styles.goalItemContainer}>
          <Text style={styles.goalItems}>{props.text}</Text>
          <Image
            source={require('../assets/OIP.jpg')}
            style={styles.sticker}
          />
        </View>
      </TouchableOpacity>

      <Modal
        visible={deleteModalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to delete this goal?</Text>
            <View style={styles.modalButtonContainer}>
              <Button title="Cancel" color="blue" onPress={cancelDeleteHandler} />
              <Button title="Delete" color="red" onPress={confirmDeleteHandler} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  goalItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  goalItems: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  sticker: {
    width: 30,
    height: 30,
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
    elevation: 5,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default GoalItem;
