import React from 'react'
//导入组件
import { Flex, WhiteSpace } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import gongBridge from '../../assets/images/gongbridge.jpg'
import goldBridge from '../../assets/images/goldbridge.jpg'
import yangmingBridge from '../../assets/images/yangmingbridge.jpg'
import pic1 from '../../assets/images/1.jpg'
import pic2 from '../../assets/images/2.jpg'
import pic3 from '../../assets/images/3.jpg'
import './index.css'

const navs=[
    {
        id:1,
        img:pic1,
        title: '开始巡检',
        path:'/home/list'
    },
    {
        id:2,
        img:pic2,
        title: '桥梁信息',
        path:'/home/list'
    },
    {
        id:3,
        img:pic3,
        title: '桥梁分布',
        path:'/home/list'
    },
    {
        id:4,
        img:pic3,
        title: '使用说明',
        path:'/home/list'
    }
]
export default class Index extends React.Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 212,
      }
      renderNavs(){
          return navs.map(item=><Flex.Item key={item.id} onClick={()=>
           this.props.history.push(item.path)
          }>

            <div  className="itemWrap">
        <img src={item.img}></img>
        <text  className="whiteName">{item.title}</text>
        </div>
     
          </Flex.Item>)
      }
      renderSwipers(){
     return     this.state.data.map(val => (
        <a
          key={val}
        //   href="http://www.alipay.com"
          style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
        >
          <img
            src={`${val}`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: '212' });
            }}
          />
        </a>
      ))
    }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: [gongBridge, goldBridge, yangmingBridge],
          });
        }, 100);
      }
      render() {
        return (
   
          <div className="index">
          <div className="title">~~~~欢迎来到桥梁外观检测信息系统~~~~</div> 
            <Carousel
              autoplay={true}
              infinite
              autoplayInterval={5000}
            >
   
        {this.renderSwipers()}
            </Carousel>
        {/* flex布局组件 */}
        <Flex align="center" class="nav">
            {this.renderNavs()}
        </Flex>
          </div>
        );
      }
}