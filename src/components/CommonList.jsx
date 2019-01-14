import React from "react"
// 导入样式表
// 导入的样式表在全局中都生效，因为样式表没有模块作用域
import cssObj from "@/css/CommonList.scss"
console.log(cssObj);

//引入bootstrap
import "bootstrap/dist/css/bootstrap.css"
import CommonItem from "@/components/CommonItem"


class CommonList extends React.Component{
    constructor(){
        super();
        this.state = {
            comList: [
                {id: 1, user: "张三", content: "哈哈，沙发"},
                {id: 2, user: "李四", content: "哈哈，板凳"},
                {id: 3, user: "王五", content: "哈哈，凉席"},
                {id: 4, user: "小明", content: "哈哈，nmsl"},
                {id: 5, user: "狗项", content: "哈哈，沙雕"},
            ],
            msg: "哈哈哈"
        }
    }

    render(){
        return <div>
            {/*写行内样式的时候不能直接写字符串，
               这里的第一个{}表示要开始使用js语法，
               第二个{}表示一个对象
            */}
            {/*<p style={{color: "red", fontSize: "35px", fontWeight: 200, textAlign: "center"}}>这是评论列表项</p>*/}
            <p className={[cssObj.title, "test"].join(" ")}>这是评论列表项</p>
            <h1>this is a common list</h1>
            {/* onClick 里面只能使用function, 因此这样要写函数的引用，写箭头函数一方面是为了传递参数，更重要的是绑定引用，
                在这个箭头函数中this绑定到了当前的组件上，不用箭头函数将会是这样的写法,<button onClick={this.show.bind(this)}>Click</button>或者在构造器中声明
            */}
            <button className="btn btn-primary" onClick={() => {this.show("(～￣(OO)￣)ブ")}}>按钮</button>
            <h1>{this.state.msg}</h1>
            {/*文本框中要不添加readOnly，要不就是用onChange事件*/}
            {/*<input type="text" value={this.state.msg} readOnly/>*/}
            <input type="text" ref="testInput" value={this.state.msg} onChange={(e) => this.changText(e)}/>
            {this.state.comList.map(item => {
                return <CommonItem {...item} key={item.id}>
                </CommonItem>;
            })}
        </div>
    }

    show = (arg1)=>{
        // 1、只改变msg的值，其他的不变
        this.setState({
            msg: "你点击了按钮"+arg1
        }, function () {
            console.log(this.state.msg);
        });

        //2、this.setState方法是异步的，因此这里返回哈哈哈,可以参照上面在回调函数中解决
        console.log(this.state.msg); // 哈哈哈
    };

    changText = (e) => {
        // 获取input数据的两种方式
        // 1、传参数
        // let newValue = e.target.value;
        // this.setState({
        //     msg: newValue
        // });
        // 2、 使用ref
        let newValue = this.refs.testInput.value;
        this.setState({
            msg: newValue
        })
    }
}

export default CommonList;