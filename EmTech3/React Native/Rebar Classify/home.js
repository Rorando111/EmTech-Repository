import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    // Show the date picker as soon as the Home screen loads
    setDatePickerVisibility(true);
  }, []);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleApply = () => {
    if (selectedDate) {
      navigation.navigate('Batch', { selectedDate });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.prompt}>Enter Date needed:</Text>

      {/* Custom modal to style the background */}
      <Modal
        transparent={true}
        visible={isDatePickerVisible}
        animationType="slide"
        onRequestClose={hideDatePicker}
      >
        <View style={styles.modalBackground}>
          <View style={styles.datePickerContainer}>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              date={selectedDate || new Date()}
            />
          </View>
        </View>
      </Modal>

      {/* Display selected date */}
      {selectedDate && (
        <Text style={styles.selectedDate}>
          Selected Date: {selectedDate.toLocaleDateString()}
        </Text>
      )}

      {/* Cancel and Apply buttons displayed at the bottom of the screen */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => setDatePickerVisibility(true)}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#7FA1C3',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 50,
    color: '#000',
  },
  prompt: {
    fontSize: 25,
    marginTop: 20,
    color: '#000',
  },
  selectedDate: {
    fontSize: 32,
    color: '#000',
    marginTop: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7FA1C3', // Match the background color
  },
  datePickerContainer: {
    backgroundColor: '#7FA1C3',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 290,
    alignSelf: 'center',
  },
  cancelButton: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#1C3A6F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
