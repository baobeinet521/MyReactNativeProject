import React,{ Component } from 'react'
import {Text, View} from "react-native";
import FadeInView from '../AnimateUtils/FadeInView';

export default class FadeInViewTest extends React.Component{

    render() {
        return(
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
            )

    }

}
