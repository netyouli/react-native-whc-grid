# [react-native-whc-grid](https://github.com/netyouli/react-native-whc-grid/)
一款简单易用的react-native Grid 组件，支持 Android&iOS。

[ ![release](https://img.shields.io/github/release/netyouli/react-native-whc-grid.svg?maxAge=2592000?style=flat-square)](https://github.com/netyouli/react-native-whc-grid/releases)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/netyouli/react-native-whc-grid/pulls)
[ ![NPM version](http://img.shields.io/npm/v/react-native-whc-grid.svg?style=flat)](https://www.npmjs.com/package/react-native-whc-grid)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/netyouli/react-native-whc-grid/master/LICENSE)
[ ![language English](https://img.shields.io/badge/language-English-yellow.svg)](https://github.com/netyouli/react-native-whc-grid/)




## 目录

- [安装](#安装)
- [Demo](#demo)
- [如何使用？](#如何使用？)
- [API](#api)
- [贡献](#contribution)

## 安装

* 1.在终端运行 `npm install react-native-whc-grid --save`
* 2.在要使用`Grid`的js文件中添加`import Grid from 'react-native-whc-grid'`

## Demo  
* [Example](https://github.com/netyouli/react-native-whc-grid/tree/master/example)

![image](https://raw.githubusercontent.com/netyouli/react-native-whc-grid/master/example/screenshots/react-native-whc-grid.jpg)

## 如何使用？  

>第一步：

在你的js文件中导入 `react-native-whc-grid`：

`import Grid from 'react-native-whc-grid'`

>第二步：   

将下面代码插入到`render()`方法中：   

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

### 用例  

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

然后你可以这样使用:
>1.刷新gird：

```jsx
 this.refs.grid.reloadData(datas);
```

## API

属性              | 类型     | 可选 | 默认值     | 描述
----------------- | -------- | -------- | ----------- | -----------
style |  ViewPropTypes.style |true | {}  | 定义grid样式
column  | PropTypes.number  | true | 0  |   设置gird多少列
renderItem  | PropTypes.func  | true | null  |   渲染 gird item
rowSeparatorLineRender  | PropTypes.func  | true | null  |   渲染grid 行分割线
columnSeparatorLineRender  | PropTypes.func  | true | null  |   渲染grid列分割线



方法            | 类型     | 可选 | 描述
----------------- | -------- | -------- | -----------
reloadData(datas)   | function | true | 更新gird


## 贡献

欢迎大家提Issues。如果能为Issues配一个异常或报错的截图，能帮助我快速的定位问题和解决问题。  
另外欢迎大家Pull requests，为项目贡献的智慧。

---

**MIT Licensed**    
大家可以自由复制和转载。  
