import React, {Component} from 'react'
import {FlatList, Image, StyleSheet, Text, View} from "react-native";


/**
 * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
 * 请求，这个样例数据放在React Native的Github库中。
 * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难。
 */
var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
var MOCKED_MOVIES_DATA = [
    {
        title: '标题',
        year: '2015',
        posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}
    }
];
export default class MoviesListView extends React.Component {

    constructor(props) {
        super(props);   //这一句不能省略，照抄即可
        this.state = {
            data: [],  //这里放你自己定义的state变量及初始值
            loaded: false,
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    data: this.state.data.concat(responseData.movies),
                    loaded: true,
                });
            });
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影。。。。
                </Text>
            </View>

        )
    }

    renderMovie({item}) {
        // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
        // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
        return (
            <View style={styles.item_container}>
                <Image
                    source={{uri: item.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.year}>{item.year}</Text>
                </View>
            </View>
        );
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderMovie}
                    style={styles.list}
                    keyExtractor={item => item.id}>

                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    item_container: {
        marginTop: 6,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    rightContainer: {
        flex: 1,
        marginRight: 15
        // backgroundColor: "#268665"
    },
    title: {
        fontSize: 15,
        marginLeft: 15,
        textAlign: "left",
        marginBottom: 8
    },
    year: {
        textAlign: "left",
        marginLeft: 15,
    },
    thumbnail: {
        width: 80,
        height: 120
    },
    list: {
        paddingTop: 20,
        marginLeft: 15,
        backgroundColor: "#FFFFFF"
    },
});