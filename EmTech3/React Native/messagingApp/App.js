import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'; // Ensure correct import for Constants
import { StyleSheet, View } from 'react-native';
import Status from './components/status'; // Ensure the correct path to your Status component

export default function App() {
  // MessageList Component
  const MessageList = () => (
    <View style={styles.messageList}>
     
    </View>
  );

  // Toolbar Component
  const Toolbar = () => (
    <View style={styles.toolbar}>
   
    </View>
  );

  // InputMethodEditor Component
  const InputMethodEditor = () => (
    <View style={styles.inputMethodEditor}>
      
    </View>
  );

  return (
    <View style={styles.container}>
      <Status /> 
      <MessageList />
      <InputMethodEditor />
      <Toolbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight, // Adjust for the status bar height
  },
  messageList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputMethodEditor: {
    height: 60, // Fixed height for the input method editor
    backgroundColor: '#fff',
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: '#fff',
    padding: 10,
  },
});