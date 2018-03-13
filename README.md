# react-native-whc-grid
A react native module to show grid view, it works on iOS and Android.

[ ![release](https://img.shields.io/github/release/netyouli/react-native-whc-grid.svg?maxAge=2592000?style=flat-square)](https://github.com/netyouli/react-native-whc-grid/releases)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/netyouli/react-native-whc-grid/pulls)
[ ![NPM version](http://img.shields.io/npm/v/react-native-whc-grid.svg?style=flat)](https://www.npmjs.com/package/react-native-whc-grid)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/crazycodeboy/react-native-whc-grid/master/LICENSE)
[ ![语言 中文](https://img.shields.io/badge/语言-中文-yellow.svg)](https://github.com/netyouli/react-native-whc-grid/blob/master/README.zh.md)



## Content

- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

* 1.Run `npm install react-native-whc-grid --save`
* 2.`import Grid from 'react-native-whc-grid'`

## Demo  
* [Example](https://github.com/netyouli/react-native-whc-grid/tree/master/example)

![image](https://github.com/netyouli/react-native-whc-grid/blob/master/example/screenshots/react-native-whc-gird.jpg)

## Getting started  

Add `react-native-whc-grid` to your js file.

`import Grid from 'react-native-whc-grid'`

Inside your component's render method, use Grid:

```jsx
 render() {
         return (
             <View style={styles.container}>
                 ...
                 <Grid
                    style = {styles.grid}
                    column = {4}
                    data = {this.girdItems}
                    renderItem = {(item, index) => (
                        <HomeGridItem
                            key = {index}
                            item = {item}
                            onPress={() => {}}
                        />
                    )}
                 />
             </View>
         );
 }

```

### Basic usage

```jsx
render() {
        return (
            <View style={styles.container}>
                <Grid
                   style = {styles.grid}
                   column = {4}
                   data = {this.girdItems}
                   rowSeparatorLineRender = {(index) => (<Line key = {index} />)}
                   columnSeparatorLineRender = {(index) => (
                        <Line key = {index} style = {styles.columnline}/>
                   )}
                   renderItem = {(item, index) => (
                       <HomeGridItem
                           key = {index}
                           item = {item}
                           onPress={() => {}}
                       />
                   )}
                />
            </View>
        );
    }
```

Then you can use it like this:
>1.grid item reload：

```jsx
 this.refs.grid.reloadData(datas);
```

## API

Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
style |  ViewPropTypes.style |true | {}  | Custom default grid style
column  | PropTypes.number  | true | 0  |   Set grid column count
renderItem  | PropTypes.func  | true | null  |   Render gird item
rowSeparatorLineRender  | PropTypes.func  | true | null  |   Render grid row separator line
columnSeparatorLineRender  | PropTypes.func  | true | null  |   Render grid column separator line



Method   |  Type     | Optional | Description
----------------- | -------- | -------- | -----------
reloadData(datas)   | function | true | reload grid item render


## Contribution

Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

---

**MIT Licensed**
