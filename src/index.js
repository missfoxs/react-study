//1、引入react和react-dom
import React from "react";
import ReactDOM from "react-dom";

import "@/components/extends";

//2、创建虚拟dom
//const myh1 = React.createElement("h1", null, "这是一个h1元素");
// 使用jsx语法
let str = "this is a h1 element";
const myh1 = <h1>{str}</h1>;
let strArr = ["tom", "jack", "柯南"];
const names = strArr.map(item => {
   return <h3 key={item}>{item}</h3>;
});

let user = {
    name: '小明',
    age: "23"
};

// 导入组件,如果没有做配置的话不能省略后缀名
//import MyComponent from "./components/MyComponent";
//这里的@表示项目根目录的src这一层，在webpack中配置
import MyComponent from "@/components/MyComponent";

// 第二种创建组件的方式
import CreatComponentWithClass from "@/components/CreatComponentWithClass";

import CommonList from "@/components/CommonList";
// 3、渲染到页面上
ReactDOM.render(
    <div>
        {myh1}
        {names}
        <div className="qwer">我是名侦探柯南</div>
        {/*使用组件的方式*/}
        {/*<MyComponent {...user}>     这种方式不知为何无法使用*/}
        <MyComponent user={user} address="北京石景山">
        </MyComponent>

        <CreatComponentWithClass {...user}>
        </CreatComponentWithClass>

        <CommonList/>
    </div>
, document.getElementById("app"));
