
//  Created by WHC on 18/2/3.
//  Copyright © 2017年 WHC. All rights reserved.
//
//  Github <https://github.com/netyouli/react-native-whc-grid>
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    FlatList,
    ViewPropTypes,
} from 'react-native';


export default class Grid extends Component {
    static propTypes = {
        column:                    PropTypes.number,
        data:                      PropTypes.array,
        renderItem:                PropTypes.func,
        style:                     ViewPropTypes.style,
        rowSeparatorLineRender:    PropTypes.func,
        columnSeparatorLineRender: PropTypes.func,
    };

    static defaultProps = {
        column: 1,
        data: [],
        renderItem: null,
        style: {},
        rowSeparatorLineRender: null,
        columnSeparatorLineRender: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            reloadDatas: null,
        };
    }

    /**
     * 更新grid
     * @param data
     */
    reloadData(data = null) {
        this.setState({
            reloadDatas: data,
        });
    }

    render() {
        const {
            column,
            data,
            renderItem,
            style,
            rowSeparatorLineRender,
            columnSeparatorLineRender,
        } = this.props;

        const {reloadDatas} = this.state;

        let itemData = [];

        if (reloadDatas !== null && reloadDatas.length > 0) {
            itemData.push(...reloadDatas);
        }else if (data !== null && data.length > 0) {
            itemData.push(...data);
        }

        if (column === 0 || itemData.length === 0) {
            return null;
        }else {
            const length = itemData.length;
            const rowCount = parseInt(length / column) + (length % column !== 0 ? 1 : 0);
            let datas = [];
            for (let r = 0; r < rowCount; r++) {
                let items = [];
                for (let c = 0; c < column; c++) {
                    const index = r * column + c;
                    if (index < length) {
                        items.push(itemData[index]);
                    }else {
                        items.push({});
                    }
                }
                datas.push(items);
            }
            return (
                <View style = {style}>
                    <FlatList style = {styles.list}
                              data = {datas}
                              ItemSeparatorComponent = {rowSeparatorLineRender}
                              renderItem = {({item, index}) => {
                                  let itemview = [];
                                  item.forEach((e, idx) => {
                                      itemview.push(renderItem(e, index * column + idx));
                                      if (idx < column && columnSeparatorLineRender != null) {
                                          itemview.push(columnSeparatorLineRender(idx));
                                      }
                                  });
                                  return (<View style = {styles.item} key = {index}>
                                      {itemview}
                                  </View>);
                              }}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});


