// components/GoalItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GoalItem = (props) => { // Accept props as an argument
  return (
    <View style={styles.goalItemContainer}>
      <Text style={styles.goalItems}>{props.text}</Text>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.tlNWR2gX99NMtvMjFGMY0AHaHa?rs=1&pid=ImgDetMain' }}
        style={styles.sticker}
      />
    </View>
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
});

export default GoalItem;