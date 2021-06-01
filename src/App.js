import React from 'react'
import {BrowserRouter as Router, Route,Link, Redirect} from 'react-router-dom'
//导入首页和城市选择两个组件
import Home from './pages/Home'
import CityList from './pages/CityList'


function App() {
  return (
    <Router>
    <div className="App">
      {/* Project Root Component
      <br/>
      <Button>Login</Button> */}
     <Route exact path="/" render={()=><Redirect to="/home" />}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/cityList" component={CityList}></Route>
    </div>
    </Router>
  );
}

export default App;
