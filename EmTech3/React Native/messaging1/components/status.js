import React from 'react';
import { Constants } from 'expo';
import { StyleSheet, NetInfo, Platform, StatusBar, Text, View } from 'react-native';

export default class Status extends React.Component{
    state = {
        info: null, //connection state
    };
    Mount(){
        NetInfo.fetch().then(state =>{
            this.setState({ info: state.type });
        });
        this.subscription = NetInfo.addEventListener(state => {
            this.setState({ info: state.type});
        });
    }
    Unmount(){
        // Clean up the subscription
        if (this.subscription) {
            this.subscription();
        }
    }

    render(){
        const{info} = this.state;
        const isConnected = info !== 'none';
        const backgroundColor = isConnected ? 'white' : 'red';
        const statusBar = (
            <StatusBar backgroundColor = {backgroundColor}
            barStyle = {isConnected ? 'dark-content': 'light-content'} animated = {false}
            />
        );
        const messageContainer = (
            <View style={styles.messageContainer} pointerEvents={"none"}>
                {statusBar}
                {!isConnected && (
                    <View style={styles.bubble}>
                        <Text style={styles.text}>No network connection</Text>
                    </View>
                 )}
            </View>
        );

        if(Platform.OS == 'ios'){
            return <View style = {[styles.status, {backgroundColor}]}>
                {messageContainer}
            </View>
        }
        return messageContainer;
    }
}
const statusHeight = (Platform.OS == 'ios' ? Constants.statusBarHeight : 0)
const styles = StyleSheet.create({
    status: {
        zIndex: 1,
        height: statusHeight,
    },
    messageContainer: {
        zIndex:1,
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
    }
})
