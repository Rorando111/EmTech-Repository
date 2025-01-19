import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import Status from './components/status';

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
      <StatusBar style="auto" />
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
    marginTop: Constants.statusBarHeight,
  },
  messageList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: '#fff',
    padding: 10,
  },
});