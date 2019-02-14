/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import FadeInView from './App/UtilsAnimate/FadeInView';
import JumpsView from './App/view/JumpsView';
import FadeInViewTest from './App/view/FadeInViewTest';
import ImageViewTest from './App/view/ImageViewTest'
import MoviesListView from  './App/view/MoviesListView'
import {
  Platform,
} from 'react-native';
import wifiView from "./App/view/wifiView";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});
export default class App extends Component {


    render() {
        // const Navigator = createAppContainer(makeRootNavigator(this.state.accessToken));
        const Navigator = createAppContainer(makeRootNavigator());
        return <Navigator />
    }

}

function makeRootNavigator() {
    return createSwitchNavigator({
        FadeInViewTest:{
            screen:FadeInViewTest
        },
        JumpsView:{
            screen: JumpsView
        },
        ImageViewTest:{
            screen:ImageViewTest
        },
        MoviesListView:{
            screen:MoviesListView
        },
        wifiView:{
            screen:wifiView
        }
    }, {
        initialRouteName:'JumpsView'
    })
}

