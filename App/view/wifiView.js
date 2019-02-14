import React from 'react'
import {Text} from 'react-native'
import { NetworkInfo } from 'react-native-network-info';

const NetworkInfo = require('react-native-network-info');
export default class wifiView extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state={
    //         iPAddress:'',
    //         iPV4Address:'',
    //         broadcastAddress:'',
    //         sSID:'',
    //         bSSID:'',
    //
    //
    //     }
    // }

    render() {
        return (
            <Text>该手机的WiFi名称</Text>

        )

    }


}

// Get Local IP
NetworkInfo.getIPAddress(ip => {
    console.log('zhengdan wifi',ip);
});

// Get IPv4 IP
NetworkInfo.getIPV4Address(ipv4 => {
    console.log('zhengdan wifi',ipv4);
});

// Get Broadcast
NetworkInfo.getBroadcast(address => {
    console.log('zhengdan wifi',address);
});

// Get SSID
NetworkInfo.getSSID(ssid => {
    console.log('zhengdan wifi',ssid);
});

// Get BSSID
NetworkInfo.getBSSID(ssid => {
    console.log('zhengdan wifi',ssid);
});