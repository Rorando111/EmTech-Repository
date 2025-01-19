import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Batch = ({ navigation }) => {
  const [selectedBatch, setSelectedBatch] = useState('Select a Batch');

  const batches = [
    { id: 1, name: 'Select a Batch' },
    { id: 2, name: 'Batch 1', content: [{ nominalDia: '12', length: '.419', weight: '.361', mass: '.865', unitMass: '3.26', lugSpacing: '7.46', lugHeight: '.74', sumOfGap: '7.59', rebarLength: '12.03' }], result: 'PASSED' },
    { id: 3, name: 'Batch 2', content: [{ nominalDia: '12', length: '.407', weight: '.356', mass: '.855', unitMass: '3.71', lugSpacing: '7.43', lugHeight: '.68', sumOfGap: '7.04', rebarLength: '12.04' }], result: 'FAILED' },
    { id: 4, name: 'Batch 3', content: [{ nominalDia: '12', length: '.411', weight: '.351', mass: '.858', unitMass: '2.59', lugSpacing: '7.47', lugHeight: '.79', sumOfGap: '8.64', rebarLength: '12.04' }], result: 'FOR FURTHER VALIDATION' },
    { id: 5, name: 'Batch 4', content: [{ nominalDia: '12', length: '.409', weight: '.380', mass: '.850', unitMass: '3.04', lugSpacing: '7.45', lugHeight: '.60', sumOfGap: '7.95', rebarLength: '12.03' }], result: 'PASSED' },
    { id: 6, name: 'Batch 5', content: [{ nominalDia: '12', length: '.404', weight: '.349', mass: '.873', unitMass: '4.05', lugSpacing: '7.49', lugHeight: '.58', sumOfGap: '8.74', rebarLength: '12.03' }], result: 'FAILED' }
  ];

  const handleBatchSelection = () => {
    const batch = batches.find(b => b.name === selectedBatch);
    if (batch) {
      // Pass both batchContent and result
      navigation.navigate('Results', { 
        batchContent: batch.content,
        result: batch.result  // Pass the result as well
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Batch</Text>

      <Picker
        selectedValue={selectedBatch}
        onValueChange={(itemValue) => setSelectedBatch(itemValue)}
        style={styles.picker}
      >
        {batches.map((batch) => (
          <Picker.Item key={batch.id} label={batch.name} value={batch.name} />
        ))}
      </Picker>

      <TouchableOpacity
        style={[styles.proceedButton, selectedBatch === 'Select a Batch' && styles.disabledButton]}
        onPress={handleBatchSelection}
        disabled={selectedBatch === 'Select a Batch'}
      >
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#7FA1C3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  proceedButton: {
    backgroundColor: '#1C3A6F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc', // Lighter color for disabled state
  },
  proceedButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Batch;
