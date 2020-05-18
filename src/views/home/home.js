import React from 'react';
import store from '../../redux/store';
import{  jian1,add1 } from '../../redux/action';
// import './home.scss';

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: store.getState().loginReducer,
      val:2
    };
    //订阅redux的状态
    // store.subscribe(this.storeChange)
  }
  // 更新状态
  storeChange=()=> {
    this.setState({
      count: store.getState().loginReducer
    })
  }
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
      <button onClick={this.add}>+</button>
      <br/>
      <button onClick={this.jian}>-</button>
      </div>
    );
  }
  add=()=>{
    // store.dispatch(add1(this.state.val))
  }
  jian=()=>{
    // store.dispatch(jian1(this.state.val))
  }
  //组件渲染成功后，调用接口去后台请求数据
  componentDidMount() {
    
  }
  
}



export default home;
