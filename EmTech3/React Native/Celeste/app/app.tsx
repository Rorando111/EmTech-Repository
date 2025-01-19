import { StyleSheet, Text, View, Button } from 'react-native';

export default function App(){
  return (
    <View style={styles.container}>
        <Text style={styles.shortcut}>
        Alexia Altero{'\n'}
        Jherwin Blanco{'\n'}
        Rolando Celeste{'\n'}
        Jomarie Dupaya
        </Text>
        <View>
            <Text style={styles2.textStyle}>Dummy</Text> 
            <Button title="Tap me!" color="green" />
        </View>
        <View>
            <Text style={styles2.textStyle}>Another Dummy</Text>
        </View>
    </View>

  );
}
const styles2 = {
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        margin: 16,
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: 'blue',
        color: 'white',
        padding: 16,
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle:{
        margin: 16,
        borderWidth: 2,
        borderColor: 'red',
        padding: 16,
        backgroundColor: 'blue',
        color: 'white',
    },
    red: {
        margin: 16,
        borderWidth: 2,
        borderColor: 'red', // Red border
        padding: 16,
      },
    shortcut: {
      margin: 16,
      borderWidth: 2,
      borderColor: 'blue', // Using shortcut
      padding: 16,
    },
    hexcode: {
      margin: 16,
      borderWidth: 2,
      borderColor: '#0000FF', // Using hex code
      padding: 16,
    },
   
  });
  