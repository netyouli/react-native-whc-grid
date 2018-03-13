import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import * as color from '../constant/color';

export default class HomeSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title = '--'} = this.props;
        return (
            <View style = {styles.view}>
                <View style = {styles.leftline}/>
                <Text style = {styles.title}>{title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        backgroundColor: color.line,
    },
    leftline: {
        backgroundColor: color.theme,
        width: 3,
    },
    title: {
        marginLeft: 10,
        flexGrow: 1,
        color: color.theme,
        fontSize: 14,
    }
});