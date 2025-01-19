import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Results = ({ route }) => {
  const navigation = useNavigation();
  const { batchContent, result } = route.params || {};  // Destructure safely

  // Debug: Log route params to check what is being passed
  console.log('Route Params:', route.params);

  // Ensure that both batchContent and result are valid
  if (!batchContent || !result) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error: Missing Data</Text>
      </View>
    );
  }

  const headers = [
    'Nominal Dia. (mm)',
    'Length (m)',
    'Weight (kg)',
    'Mass (Kg/m)',
    'Unit Mass',
    'Ave. Lug Spacing',
    'Lug Height',
    'Sum of Gap',
    'Rebar Length'
  ];

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  // Determine bubble color based on result
  const getBubbleColor = () => {
    switch (result) {
      case 'PASSED':
        return '#AFF4C6'; // Green for passed
      case 'FAILED':
        return '#FCB3AD'; // Red for failed
      case 'FOR FURTHER VALIDATION':
        return '#E8B931'; // Yellow for further validation
      default:
        return '#FFFFFF'; // Default white
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rebar Information</Text>

      <ScrollView horizontal>
        <View style={styles.tableContainer}>
          <View style={styles.headerRow}>
            {headers.map((header, index) => (
              <Text key={index} style={styles.headerCell}>
                {header}
              </Text>
            ))}
          </View>

          <ScrollView style={styles.tableContent}>
            {batchContent.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                <Text style={styles.cell}>{row.nominalDia}</Text>
                <Text style={styles.cell}>{row.length}</Text>
                <Text style={styles.cell}>{row.weight}</Text>
                <Text style={styles.cell}>{row.mass}</Text>
                <Text style={styles.cell}>{row.unitMass}</Text>
                <Text style={styles.cell}>{row.lugSpacing}</Text>
                <Text style={styles.cell}>{row.lugHeight}</Text>
                <Text style={styles.cell}>{row.sumOfGap}</Text>
                <Text style={styles.cell}>{row.rebarLength}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Result Section */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultTitle}>Result</Text>
        <View style={[styles.bubble, { backgroundColor: getBubbleColor() }]}>
          <Text style={styles.bubbleText}>{result}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
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
  tableContainer: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'rgba(254, 243, 226, 0.85)',  // Transparent background for the table
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#F5EDED',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  headerCell: {
    width: 120, // Fixed width for each header (change as needed)
    padding: 10,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    borderRightWidth: 1,  // Vertical line between columns
    borderColor: '#000',  // Line color
  },
  tableContent: {
    maxHeight: 300, // Make sure the table can scroll if content exceeds
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  cell: {
    width: 120,  // Fixed width for each column (should match headerCell width)
    padding: 10,
    color: '#000',
    textAlign: 'center',  // Aligning values in the center for now
    borderRightWidth: 1,  // Vertical line between columns
    borderColor: '#000',  // Line color
  },
  resultContainer: {
    marginTop: 100,  // Reduced margin to move the result section upward
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  bubble: {
    paddingVertical: 10, // Reduced padding for a smaller bubble
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 250,
  },
  bubbleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  logoutButton: {
    backgroundColor: '#33537E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 50, // Reduced margin to move the button upward
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Results;
