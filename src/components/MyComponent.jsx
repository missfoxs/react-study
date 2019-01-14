import React from "react";

import PropTypes from "prop-types";
//创建组件的第一种方式,注意名称要大写
function MyComponent(props){
    return <div>{props.user.name}---{props.user.age}
        <p>{props.address}</p>
        <p>{props.sex}</p>
    </div>
}

// 使用PropTypes验证传输数据的类型等
MyComponent.propTypes ={
    address: PropTypes.number
};

// 为组件的属性指定默认值
MyComponent.defaultProps = {
  sex: "male"
};

//使用es6方法导出
export default MyComponent;