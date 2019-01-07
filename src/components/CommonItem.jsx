import React from "react"

import cssObj from "@/css/CommonItem.scss"
console.log(cssObj);

export default function CommonItem(props){
    // 直接写内联样式
    // return <div style={{border: "1px dashed #ccc", margin: "10px", padding: "10px",boxShadow: "0 0 10px #ccc"}}>
    //     <h3 style={{fontSize: "16px"}}>评论人:{props.user}</h3>
    //     <p style={{fontSize: "14px"}}>评论内容:{props.content}</p>
    // </div>
    // 使用模块化的css
    return <div className={cssObj.boxCmt}>
        <h1 className={cssObj.title}>评论人:{props.user}</h1>
        <p className={cssObj.content}>评论内容:{props.content}</p>
    </div>
}