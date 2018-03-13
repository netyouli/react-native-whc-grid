/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

import Grid from 'react-native-whc-grid';
import HomeGridItem from './view/home-grid-item';
import HomeSection from './view/home-section';
import HomeWaitGridItem from './view/home-wait-grid-item';
import Line from './view/line';

import * as color from './constant/color';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props) {
      super(props);
      this.girdItems = [
          {title: '租空图',image: require('./image/rent-control-icon.png')},
          {title: '预约看房', image: require('./image/order-room-icon.png')},
          {title: '长住合同', image: require('./image/long-contract-icon.png')},
          {title: '租客账单', image: require('./image/rent-custom-order-icon.png')},
          {title: '水电抄表', image: require('./image/water-elc-icon.png')},
          {title: '订单服务', image: require('./image/service-order-icon.png')}
      ];
      this.waitGridItems = [
          {title: '预约看房', value: '0个'},
          {title: '待入住', value: '0个'},
          {title: '快到期合同', value: '0个'},
          {title: '已到期合同', value: '0个'},
          {title: '房租欠缴', value: '0元'},
          {title: '水电煤欠缴', value: '0元'},
          {title: '服务订单', value: '0个'},
          {title: '设备报警', value: '0个'},
      ];
  }

  render() {
    return (
        <ScrollView style = {styles.sview}>
            <HomeSection
                style = {styles.section}
                title = {'grid style one'}/>
            <Grid
                style = {styles.grid}
                column = {4}
                data = {this.girdItems}
                rowSeparatorLineRender = {(index) => (
                    <View key = {index} style = {styles.gridblank}/>
                )}
                renderItem = {(item, index) => (
                    <HomeGridItem
                        key = {index}
                        item = {item}
                        onPress={() => {
                            this.push('Blank', {title: "空白页面"});
                        }}/>
                )}
            />
            <HomeSection
                style = {styles.section}
                title = {'grid style two'}/>
            <Grid
                style = {styles.waitgrid}
                column = {2}
                rowSeparatorLineRender = {(index) => (
                    <Line key = {index} />
                )}
                columnSeparatorLineRender = {(index) => (
                    <Line key = {index} style = {styles.columnline}/>
                )}
                data = {this.waitGridItems}
                renderItem = {(item, index) => (
                    <HomeWaitGridItem
                        key = {index}
                        item = {item}
                        onPress={() => {

                        }}/>
                )}
            />
            <Line/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    sview: {
        flex: 1,
        marginTop: 20,
    },
    view: {
        flex: 1,
    },
    grid: {
        backgroundColor: color.white,
        paddingTop: 15,
        paddingBottom: 15,
    },
    gridblank: {
        height: 20,
        backgroundColor: color.white,
    },
    section: {
        height: 44,
        backgroundColor: color.line,
    },
    waitgrid: {
        backgroundColor: color.white,
    },
    columnline: {
        width: 0.5,
        backgroundColor: color.line,
    },
});
