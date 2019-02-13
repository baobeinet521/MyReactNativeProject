import React, { Component } from 'react';
import {TouchableHighlight, Text,View,StyleSheet,Button} from 'react-native'
import MyToastUtils from "../utils/MyToastUtils";


export default class JumpsView extends  React.Component {
    // static navigationOptions = {
    //     title:'跳转导航页'
    // };

    render() {
        {/*<View style={styles.container}>*/}
            {/*/!*<TouchableHighlight style={styles.button_style}>*!/*/}
                {/*/!*<Text>点击FadeInView</Text>*!/*/}
            {/*/!*</TouchableHighlight>*!/*/}

            {/*/!*<TouchableHighlight style={styles.button_style}>*!/*/}
                {/*/!*<Text>点击MoviesListView</Text>*!/*/}
            {/*/!*</TouchableHighlight>*!/*/}

            {/**/}
        {/*</View>*/}

        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>JumpsView Screen</Text>
                <Button
                    title="Go to FadeInViewTest... again"
                    // onPress={() => this.props.navigation.push('FadeInView')}
                    onPress={() => this.props.navigation.navigate('FadeInViewTest')}
                    // onPress={gotoFadeInView}
                />
                <Button
                    title="Go to MoviesListView"
                    onPress={() => this.props.navigation.navigate('MoviesListView')}
                    // onPress={gotoMoviesListView}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                    // onPress={gotoBack}
                />
            </View>

        )


    }


    // pressShowToast = () => {
    //     console.log("进入 pressShowToast，点击一下之前");
    //     MyToastUtils.show("点了一下", ToastUtils.SHORT);
    //     console.log("进入 pressShowToast，点击一下之后");
    // }
    //
    // usrNativeImageView = () => {
    //     console.log("进入 usrNativeImageView，点击一下之前");
    //     this.props.navigation.navigate('ImageViewTest');
    //     console.log("进入 usrNativeImageView，点击一下之后");
    // }
}


// function gotoFadeInView(){
//     this.props.navigation.navigate('FadeInView');
// }
// function gotoMoviesListView(){
//     this.props.navigation.navigate('MoviesListView')
// }
//
// function gotoBack(){
//     this.props.navigation.goBack()
// }
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#175092"},
    button_style: {
        width: 180,
        height: 60,
        marginTop: 10,
        backgroundColor: '#175092'
    }
});