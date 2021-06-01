import React from 'react'

import cloudbase from '@cloudbase/js-sdk';
// const cloudbase = require("@cloudbase/js-sdk");
const app = cloudbase.init({
  env: "qljc-0b2vv"
});
const db = app.database();
const bridgeList = db.collection("bridgeList");
const auth = app.auth();

async function login(){
  await auth.anonymousAuthProvider().signIn();
  // 匿名登录成功检测登录状态isAnonymous字段为true
  const loginState = await auth.getLoginState();
  console.log(loginState.isAnonymousAuth); // true


}
var all

export default class List extends React.Component{
  constructor(){
    super()
    login()
   
  }
    state={
        bridge:[{
          zmt:''
        }],
        imgArr:''
    }

getData=()=>{
  new Promise(function (resolve, reject) {
  var bridge
  db.collection('bridgeList')
      .get()
      .then((res)=>{
    all=res.data
      for(var i=0; i<all.length;i++){
        (function (i){
   console.log(i);
        app.getTempFileURL({
fileList: [{
fileID:  res.data[i].Czmt,
tempFileUrl:'',
maxAge:120 * 60 * 1000
}]
})
.then((res) => {
  console.log('124');
all[i].zmt=res.fileList[0].tempFileURL
}).then(res=>{
console.log(all[i]);
});
      })(i) 
    }
      })
    })
  }

  componentDidMount(res){

    this.getData()
  }

 Reveal(){
  return (all? Object.keys(all).map((item,index)=>{
    return <p key={index} style={{backgroundColor:"Cyan",height:100}}>
      <div style={{width: 270,position:'relative'}}> 
     <img style={{width: 100,height:100,alignItems:'center'}}src={all[item].zmt}></img>
      <div style={{left: 100,height:100,position:'relative',bottom:80}}>
      <div style={{fontSize:15}}>桥梁名称1: {all[item].qlmc}</div>
      <div style={{fontSize:15}}>记录时间2: {all[item].jcrq}</div>         
      <div style={{fontSize:15}}>所在地区3: {all[item].jcdq}</div>
      <div>　</div>
      </div>
      </div>
        </p>
}) : <div style={{textAlign:'center',fontSize:50,marginTop:'350px'}}>Warning！！！服务器正忙</div>
  )

}
    render(){
        return(
        this.Reveal()
        )
    }
}