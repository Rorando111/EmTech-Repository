import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import SensorData from './components/SensorData';
import InspectionResults from './components/InspectionResults';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensor1Data: null,
      sensor2Data: null,
      inspectionResult: null,
    };
  }

  startInspection = () => {
    // Simulate sensor data acquisition
    const sensor1Data = this.getSensor1Data();
    const sensor2Data = this.getSensor2Data();

    this.setState({ sensor1Data, sensor2Data }, this.processInspection);
  };

  getSensor1Data = () => {
    // Simulate data from sensor 1 (e.g., diameter)
    return Math.random() * (20 - 10) + 10; // Random diameter between 10 and 20 mm
  };

  getSensor2Data = () => {
    // Simulate data from sensor 2 (e.g., surface defects)
    return Math.random() < 0.5; // Random boolean for defects
  };

  processInspection = () => {
    const { sensor1Data, sensor2Data } = this.state;

    // Simple quality check
    if (sensor1Data < 12 || sensor1Data > 18) {
      this.setState({ inspectionResult: 'Diameter out of range!' });
    } else if (sensor2Data) {
      this.setState({ inspectionResult: 'Surface defect detected!' });
    } else {
      this.setState({ inspectionResult: 'Quality OK!' });
    }
  };

  render() {
    const { sensor1Data, sensor2Data, inspectionResult } = this.state;

    return (
      <View style={styles.container}>
        <Button title="Start Inspection" onPress={this.startInspection} />
        <SensorData sensor1Data={sensor1Data} sensor2Data={sensor2Data} />
        <InspectionResults result={inspectionResult} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

