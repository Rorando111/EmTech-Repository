import React from 'react';
import { Modal, Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

const FullScreenImage = ({ visible, imageUri, onClose }) => {
    return (
        <Modal visible={visible} transparent={true}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.container}>
                    <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default FullScreenImage;