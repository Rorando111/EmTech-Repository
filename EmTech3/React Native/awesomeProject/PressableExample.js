import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <Pressable
      onPress={() => console.log('Pressed!')}
      onPressIn={() => console.log('Pressed In!')}
      onPressOut={() => console.log('Pressed Out!')}
      onLongPress={() => console.log('Long Pressed!')}
      delayLongPress={1000}
      delayPressIn={1000}
      delayPressOut={1000}
      pressRetentionOffset={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
    >
      <Text>Press me!</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: 'red',
    padding: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default App;