import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import reportWebVitals from './reportWebVitals';
import cloudbase from '@cloudbase/js-sdk';

//导入Font
import './assets/fonts/iconfont.css';
import './index.css';

ReactDOM.render(<App/>,document.getElementById('root'))
// const cloudbase = require("@cloudbase/js-sdk");
// const app = cloudbase.init({
//   env: "qljc-0b2vv"
// });
// const db = app.database();
// const bridgeList = db.collection("bridgeList");
// const auth = app.auth();

// async function login(){
//   await auth.anonymousAuthProvider().signIn();
//   // 匿名登录成功检测登录状态isAnonymous字段为true
//   const loginState = await auth.getLoginState();
//   console.log(loginState.isAnonymousAuth); // true
// }


// class Show extends React.Component{
//   constructor(){
//     super()
//     login();

//   }
//   handleData=(e)=>{
//     db.collection('bridgeList')
//        .get()
//        .then((res)=>{
//          console.log(res);
//        })
//   }
//   render(){
//     return(
//       <div>
//         Hello qljc
//         <button onClick={this.handleData}>Get!</button>
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//    <Show />,
//    document.getElementById('root')
// )
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
