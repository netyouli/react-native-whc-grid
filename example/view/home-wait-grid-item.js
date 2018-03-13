import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

import * as color from '../constant/color';
import * as screen from '../constant/screen';

export default class HomeWaitGridItem extends Component {
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
                    <Text style = {styles.itemText}>{item.value}</Text>
                    <Text style = {styles.itemText}>{item.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        justifyContent: 'center',
        flexGrow: 1,
        width: screen.width / 2,
        padding: 15,
    },
    itemText: {
        color: color.black,
        fontSize: 14,
        textAlign: 'left',
        marginTop: 5,
    },
});