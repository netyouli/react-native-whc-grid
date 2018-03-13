import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    Image,
} from 'react-native';

import * as color from '../constant/color';
import * as screen from '../constant/screen';

export default class HomeGridItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            item = null,
            onPress = null
        } = this.props;

        return (
            <TouchableHighlight
                onPress = {() => {onPress && onPress()}}
                underlayColor = {color.transparent}>
                <View style = {styles.item}>
                    <Image style = {styles.itemImage} source = {item.image}/>
                    <Text style = {styles.itemText}>{item.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        width: screen.width / 4,
        backgroundColor: 'white',
    },
    itemText: {
        color: color.black,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 15,
    },
    itemImage: {
        width: 30,
        height: 30,
    },
});