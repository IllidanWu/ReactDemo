import React from 'react'
import reactDom from 'react-dom';

//导入TabBar
import { TabBar } from 'antd-mobile';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import News from '../News'
import Index from '../Index'
import List from '../List'
import Profile from '../Profile'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import './index.css'
export default class Home extends React.Component{
    state = {
        //默认选中的TabBar菜单项
        selectedTab: 'blueTab',
        //全屏
      }
  componentDidUpdate(prevProps){
    console.log(prevProps);
    console.log(this.props);
    if(prevProps.location.pathname==="/home" && this.props.location.pathname==="/home/list"){
      //说明路由发生切换
      this.setState({
        selectedTab:'redTab'
      })
    }
  }
    render(){
        return (
        <div className="home">
        {/* 渲染子路由 */}
       <Route path="/home/news" component={News}></Route>
       <Route path="/home/list" component={List}></Route>
       <Route path="/home/profile" component={Profile}></Route>
       <Route exact path="/home" component={Index}></Route>
       {/* TabBar */}
      
        <TabBar
          noRenderContent={true}
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
         
 
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
                <i className="iconfont    icon-home" />
            }
            selectedIcon={ 
                 <i className="iconfont    icon-home" />
            }
            selected={this.state.selectedTab === 'blueTab'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
              //路由切换
              this.props.history.push('/home')
            }}
            data-seed="logId"
          >
       
          </TabBar.Item>
          <TabBar.Item
            icon={
               <i className="iconfont icon-bridge" />
       
            }
            selectedIcon={

            <i className="iconfont icon-bridge" />
            }
            title="桥梁信息"
            key="Koubei"
            // badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
              this.props.history.push('/home/list')

            }}
            data-seed="logId1"
          >
         
          </TabBar.Item>
          <TabBar.Item
            icon={
             
        <i className="iconfont    icon-icon_xinyong_xianxing_jijin-" />
            }
            selectedIcon={
                <i className="iconfont    icon-icon_xinyong_xianxing_jijin-" />
            }
            title="规范"
            key="Friend"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
              this.props.history.push('/home/news')
            }}
          >
    
          </TabBar.Item>
          <TabBar.Item
            icon={
                <i className="iconfont    icon-my" />
            }
            selectedIcon={
                <i className="iconfont    icon-my" />
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
              this.props.history.push('/home/profile')
            }}
          >
      
          </TabBar.Item>
        </TabBar>
  
        </div>
        )
    }
}