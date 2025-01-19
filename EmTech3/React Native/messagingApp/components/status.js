/*import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Animated, Platform, StatusBar, Text, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default class Status extends React.Component {
    state = {
        info: 'none', // connection state
        fadeAnim: new Animated.Value(0), // Initial opacity value
    };

    componentDidMount() {
        NetInfo.fetch().then(state => {
            this.setState({ info: state.type }, this.animateBubble);
        });
        this.subscription = NetInfo.addEventListener(state => {
            this.setState({ info: state.type }, this.animateBubble);
        });
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription();
        }
    }

    animateBubble = () => {
        const { info, fadeAnim } = this.state;
        const isConnected = info !== 'none';
        Animated.timing(fadeAnim, {
            toValue: isConnected ? 0 : 1, // Fade in if disconnected, fade out if connected
            duration: 500, // Animation duration
            useNativeDriver: true,
        }).start();
    };

    render() {
        const { info, fadeAnim } = this.state;
        const isConnected = info !== 'none';
        const backgroundColor = isConnected ? 'green' : 'red';
        const statusBar = (
            <StatusBar
                backgroundColor={backgroundColor}
                barStyle={isConnected ? 'dark-content' : 'light-content'}
                animated={false}
            />
        );

        const messageContainer = (
            <View style={styles.messageContainer} pointerEvents="none">
                {statusBar}
                {!isConnected && (
                    <Animated.View style={[styles.bubble, { opacity: fadeAnim }]}>
                        <Text style={styles.text}>No network connection</Text>
                    </Animated.View>
                )}
            </View>
        );

        if (Platform.OS === 'ios') {
            return <View style={[styles.status, { backgroundColor }]}>{messageContainer}</View>;
        }
        return messageContainer;
    }
}

const statusHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;
const styles = StyleSheet.create({
    status: {
        zIndex: 1,
        height: statusHeight,
    },
    messageContainer: {
        zIndex: 1,
        position: 'absolute',
        top: statusHeight + 20,
        right: 0,
        left: 0,
        height: 80,
        alignItems: 'center',
    },
    bubble: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: 'red',
    },
    text: {
        color: 'white',
    },
});*/

import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Animated, Platform, StatusBar, Text, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default class Status extends React.Component {
    state = {
        info: null,
        fadeAnim: new Animated.Value(0),
        bgColorAnim: new Animated.Value(0),
    };

    componentDidMount() {
        // Fetch initial state and set up listener for network status
        NetInfo.fetch().then(state => {
            this.setState({ info: state.type }, this.animateComponents);
        });
        this.subscription = NetInfo.addEventListener(state => {
            this.setState({ info: state.type }, this.animateComponents);
        });
    }

    componentWillUnmount() {
        // Clean up the subscription
        if (this.subscription) {
            this.subscription();
        }
    }

    animateComponents = () => {
        const { info, fadeAnim, bgColorAnim } = this.state;
        const isConnected = info !== 'none';
        // Animate opacity for the bubble
        Animated.timing(fadeAnim, {
            toValue: isConnected ? 0 : 1,
            delay: 3000,
            duration: 1000,
            useNativeDriver: true,
        }).start();
        // Animate background color change
        Animated.timing(bgColorAnim, {
            toValue: isConnected ? 1 : 0, // 1 for white, 0 for red
            delay: 3000,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };
    render() {
        const { info, fadeAnim, bgColorAnim } = this.state;
        const isConnected = info !== 'none';

        // Interpolate background color based on bgColorAnim value
        const backgroundColor = bgColorAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['red', 'green'],
        });
        const statusBar = (
            <StatusBar
                backgroundColor={isConnected ? 'green' : 'red'}
                barStyle={isConnected ? 'dark-content' : 'light-content'}
                animated={false}
            />
        );
        const messageContainer = (
            <View style={styles.messageContainer} pointerEvents="none">
                {statusBar}
                {!isConnected && (
                    <Animated.View style={[styles.bubble, { opacity: fadeAnim }]}>
                        <Text style={styles.text}>No network connection</Text>
                    </Animated.View>
                )}
            </View>
        );
        return (
            <Animated.View style={[styles.status, { backgroundColor }]}>
                {messageContainer}
            </Animated.View>
        );
    }
}

const statusHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;
const styles = StyleSheet.create({
    status: {
        zIndex: 1,
        height: statusHeight,
    },
    messageContainer: {
        zIndex: 1,
        position: 'absolute',
        top: statusHeight + 20,
        right: 0,
        left: 0,
        height: 80,
        alignItems: 'center',
    },
    bubble: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: 'red',
    },
    text: {
        color: 'white',
    },
});


