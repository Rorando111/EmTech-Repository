/*import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, BackHandler, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import MessageList from './components/MessageList';
import { createImageMessage, createLocationMessage, createTextMessage } from './utils/MessageUtils';
import Status from './components/status';
import InputMethodEditor from './components/InputMethodEditor';
import Toolbar from './components/Toolbar';
import * as Location from 'expo-location';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                createImageMessage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCHCQgUbFxamZvY_basns1xwUO3BlGsulVA&s'),
                createTextMessage('World'),
                createTextMessage('Hello'),
            ],
            fullscreenImageId: null,
            isInputFocused: false,
        };
    }

    componentDidMount() {
        this.subscription = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        this.subscription.remove();
    }

    handleBackPress = () => {
        const { fullscreenImageId } = this.state;
        if (fullscreenImageId) {
            this.dismissFullscreenImage();
            return true; // Prevent default back behavior
        }
        return false; // Allow default back behavior
    };

    handlePressMessage = ({ id, type }) => {
        switch (type) {
            case 'text':
                console.log('Text message pressed:', id);
                break;
            case 'image':
                this.setState({ fullscreenImageId: id, isInputFocused: false }); // Dismiss keyboard
                break;
            default:
                break;
        }
    };

    dismissFullscreenImage = () => {
        this.setState({ fullscreenImageId: null });
    };

    handlePressToolbarCamera = () => {
        console.log('Camera button pressed!');
    };

    handlePressToolbarLocation = async () => {
      try {
        // Request location permissions
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Location permission denied');
          return;
        }

        // Get the user's current location
        const { coords } = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = coords;

        // Display a confirmation dialog to the user
        const confirmed = await this.showLocationConfirmationDialog(latitude, longitude);
        if (confirmed) {
          // Create a new location message and add it to the beginning of the message list
          this.setState((prevState) => ({
            messages: [
              ...prevState.messages,
              createLocationMessage({
                latitude,
                longitude,
              }),
            ],
          }));
        }
      } catch (error) {
        console.log('Error getting location:', error);
      }
    };

    showLocationConfirmationDialog = async (latitude, longitude) => {
      return new Promise((resolve) => {
        Alert.alert(
          'Share Location',
          `Share your location (${latitude.toFixed(4)}, ${longitude.toFixed(4)})?`,
          [
            { text: 'Cancel', onPress: () => resolve(false), style: 'cancel' },
            { text: 'Share', onPress: () => resolve(true) },
          ],
          { cancelable: false }
        );
      });
    };

    handleChangeFocus = (isFocused) => {
        this.setState({ isInputFocused: isFocused });
    };

    handleSubmit = (text) => {
        const { messages } = this.state;
        this.setState({
            messages: [createTextMessage(text), ...messages],
        });
    };

    renderFullscreenImage = () => {
        const { messages, fullscreenImageId } = this.state;
        if (!fullscreenImageId) return null;

        const image = messages.find(message => message.id === fullscreenImageId);
        if (!image) return null;

        const { uri } = image;
        return (
            <TouchableHighlight style={styles.fullscreenOverlay} onPress={this.dismissFullscreenImage}>
                <Image style={styles.fullscreenImage} source={{ uri }} />
            </TouchableHighlight>
        );
    };

    renderToolbar() {
        const { isInputFocused } = this.state;
        return (
            <View style={styles.toolbar}>
                <Toolbar
                    isFocused={isInputFocused}
                    onSubmit={this.handleSubmit}
                    onChangeFocus={this.handleChangeFocus}
                    onPressCamera={this.handlePressToolbarCamera}
                    onPressLocation={this.handlePressToolbarLocation}
                />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Status />
                <MessageList messages={this.state.messages} onPressMessage={this.handlePressMessage} />
                <InputMethodEditor />
                {this.renderToolbar()}
                {this.renderFullscreenImage()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Constants.statusBarHeight,
    },
    fullscreenOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullscreenImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});*/

/*
import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, BackHandler, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import MessageList from './components/MessageList';
import { createImageMessage, createLocationMessage, createTextMessage } from './utils/MessageUtils';
import Status from './components/status';
import InputMethodEditor from './components/InputMethodEditor';
import Toolbar from './components/Toolbar';
import * as Location from 'expo-location';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                createImageMessage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCHCQgUbFxamZvY_basns1xwUO3BlGsulVA&s'),
                createTextMessage('World'),
                createTextMessage('Hello'),
            ],
            fullscreenImageId: null,
            isInputFocused: false,
            locationPermissionGranted: false,
        };
    }

    componentDidMount() {
        this.subscription = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.requestLocationPermission();
    }

    componentWillUnmount() {
        this.subscription.remove();
    }

    handleBackPress = () => {
        const { fullscreenImageId } = this.state;
        if (fullscreenImageId) {
            this.dismissFullscreenImage();
            return true; // Prevent default back behavior
        }
        return false; // Allow default back behavior
    };

    handlePressMessage = ({ id, type }) => {
        switch (type) {
            case 'text':
                console.log('Text message pressed:', id);
                break;
            case 'image':
                this.setState({ fullscreenImageId: id, isInputFocused: false }); // Dismiss keyboard
                break;
            case 'location':
                console.log('Location message pressed:', id);
                break;
            default:
                break;
        }
    };

    dismissFullscreenImage = () => {
        this.setState({ fullscreenImageId: null });
    };

    handlePressToolbarCamera = () => {
        console.log('Camera button pressed!');
    };

    handlePressToolbarLocation = async () => {
        if (!this.state.locationPermissionGranted) {
            await this.requestLocationPermission();
        }

        if (this.state.locationPermissionGranted) {
            const confirmed = await this.showLocationConfirmationDialog();
            if (confirmed) {
                await this.sendLocationMessage();
            }
        }
    };

    requestLocationPermission = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                this.setState({ locationPermissionGranted: true });
            } else {
                console.log('Location permission denied');
            }
        } catch (error) {
            console.log('Error requesting location permission:', error);
        }
    };

    showLocationConfirmationDialog = async () => {
        return new Promise((resolve) => {
            Alert.alert(
                'Share Location',
                'Do you want to share your location?',
                [
                    { text: 'Cancel', onPress: () => resolve(false), style: 'cancel' },
                    { text: 'Share', onPress: () => resolve(true) },
                ],
                { cancelable: false }
            );
        });
    };

    sendLocationMessage = async () => {
        try {
            const { coords } = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = coords;

            this.setState((prevState) => ({
                messages: [
                    ...prevState.messages,
                    createLocationMessage({
                        latitude,
                        longitude,
                    }),
                ],
            }));
        } catch (error) {
            console.log('Error getting location:', error);
        }
    };

    handleChangeFocus = (isFocused) => {
        this.setState({ isInputFocused: isFocused });
    };

    handleSubmit = (text) => {
        const { messages } = this.state;
        this.setState({
            messages: [createTextMessage(text), ...messages],
        });
    };

    renderFullscreenImage = () => {
        const { messages, fullscreenImageId } = this.state;
        if (!fullscreenImageId) return null;

        const image = messages.find(message => message.id === fullscreenImageId);
        if (!image) return null;

        const { uri } = image;
        return (
            <TouchableHighlight style={styles.fullscreenOverlay} onPress={this.dismissFullscreenImage}>
                <Image style={styles.fullscreenImage} source={{ uri }} />
            </TouchableHighlight>
        );
    };

    renderToolbar() {
        const { isInputFocused, locationPermissionGranted } = this.state;
        return (
            <View style={styles.toolbar}>
                <Toolbar
                    isFocused={isInputFocused}
                    onSubmit={this.handleSubmit}
                    onChangeFocus={this.handleChangeFocus}
                    onPressCamera={this.handlePressToolbarCamera}
                    onPressLocation={this.handlePressToolbarLocation}
                    locationPermissionGranted={locationPermissionGranted}
                />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Status />
                <MessageList messages={this.state.messages} onPressMessage={this.handlePressMessage} />
                <InputMethodEditor />
                {this.renderToolbar()}
                {this.renderFullscreenImage()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Constants.statusBarHeight,
    },
    fullscreenOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullscreenImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});*/

cd ..