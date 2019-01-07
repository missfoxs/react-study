import React from "react";
//创建组件的第一种方式,注意名称要大写
function MyComponent(props){
    return <div>{props.user.name}---{props.user.age}</div>
}

//使用es6方法导出
export default MyComponent;