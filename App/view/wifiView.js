import React from 'react'
import {Text} from 'react-native'
import { NetworkInfo } from 'react-native-network-info';

export default class wifiView extends React.Component{

    constructor(props){
        super(props);
        this.state={
            iPAddress:'',
            iPV4Address:'',
            broadcastAddress:'',
            wifiSSID:'',
            bSSID:'',


        }
    }

    componentDidMount() {
        getIpAddress();
        getIPV4Address();
        // getAddress();
        getSSID();

        let mSsid = "";
        let f = function getSSID(){
            NetworkInfo.getSSID(ssid => {
                console.log('zhengdan wifi ssid  componentDidMount function  ',ssid);
                mSsid=ssid;
                console.log('zhengdan wifi ssid fun in   ',mSsid)
                return ssid;
            });
        }
        this.setState({
            wifiSSID:f(),
        })
        console.log('zhengdan wifi ssid state  ',this.state.wifiSSID)
        console.log('zhengdan wifi ssid fun out   ',mSsid)
    }

    render() {
        return (
            <Text>该手机的WiFi名称</Text>

        )

    }


}

function getIpAddress(){
    // Get Local IP
    NetworkInfo.getIPAddress(ip => {
        console.log('zhengdan wifi ip',ip);
    });
}


// Get IPv4 IP
function getIPV4Address(){
    NetworkInfo.getIPV4Address(ipv4 => {
        console.log('zhengdan wifi ipv4',ipv4);
    });
}


// // Get Broadcast
// function getAddress(){
//     NetworkInfo.getBroadcast(address => {
//         console.log('zhengdan wifi address ',address);
//     });
// }


// // Get SSID
function getSSID(){
    NetworkInfo.getSSID(ssid => {
        console.log('zhengdan wifi ssid',ssid);
    });
}


// // Get BSSID
// NetworkInfo.getBSSID(ssid => {
//     console.log('zhengdan wifi',ssid);
// });