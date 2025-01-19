import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const InputMethodEditor = () => {
    return (
        <View style={styles.container}>
            <TextInput
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.04)',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});

export default InputMethodEditor;