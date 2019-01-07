import React from "react"

// 必须继承React.Component
class CreateComponentWithClass extends React.Component {
    constructor(){
        super();
        //相当于vue中的data(){return {}}
        this.state = {
            msg: "hello,everyone"
        }
    }

    // 必须要有render函数，且要返回合法的jsx虚拟dom
    render(){
        // state中的值是可读可写的
        this.state.msg = "I changed this value";
        // 使用class创建的组件不需要接受参数，可以直接使用this.props使用
        return <div>
            <h2>这是class创建的组件</h2>
            <p>{this.props.name}---{this.props.age}</p>
            <h2>这是state中的数据</h2>
            {this.state.msg}
        </div>
    }
}

export default CreateComponentWithClass;