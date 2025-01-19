import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MessageShape } from '../utils/MessageUtils';

export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.arrayOf(MessageShape).isRequired,
        onPressMessage: PropTypes.func,
    };

    static defaultProps = {
        onPressMessage: () => {},
    };

    keyExtractor = (item) => item.id.toString();

    renderMessageItem = ({ item }) => {
        const { onPressMessage } = this.props;
        return (
            <View key={item.id} style={styles.messageRow}>
                <TouchableOpacity onPress={() => onPressMessage(item)}>
                    {this.renderMessageBody(item)}
                </TouchableOpacity>
            </View>
        );
    };

    renderMessageBody = ({ type, text, uri, coordinate }) => {
        switch (type) {
            case 'text':
                return (
                    <View style={styles.messageBubble}>
                        <Text style={styles.messageText}>{text}</Text>
                    </View>
                );
            case 'image':
                return <Image style={styles.image} source={{ uri }} />;
            case 'location':
                return (
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            ...coordinate,
                            latitudeDelta: 0.08,
                            longitudeDelta: 0.04,
                        }}
                    >
                        <Marker coordinate={coordinate} />
                    </MapView>
                );
            default:
                return null;
        }
    };

    render() {
        const { messages } = this.props;
        return (
            <FlatList
                style={styles.container}
                data={messages.slice().reverse()} // Reverse the messages array
                renderItem={this.renderMessageItem}
                keyExtractor={this.keyExtractor}
                keyboardShouldPersistTaps="handled"
                inverted // This prop will also help to keep the latest message at the bottom
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'visible',
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 60,
    },
    messageBubble: {
        backgroundColor: 'blue',
        borderRadius: 20,
        padding: 10,
        maxWidth: '100%',
    },
    messageText: {
        color: '#fff',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    map: {
        width: 200,
        height: 200,
        borderRadius: 15,
    },
});