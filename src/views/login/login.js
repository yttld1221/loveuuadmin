import React from 'react';
import store from '../../redux/store';
import{  loginTo } from '../../redux/action';
// import './login.scss';

class login extends React.Component {
  constructor(props){
    super(props);
    this.state = { apiResponse:[],api:''};
}
handleClick=(e)=>{
    store.dispatch(loginTo('1234'))
    this.props.history.push("/home");
  }
render() {
  return (
    <div  onClick={this.handleClick}>login登录</div>
  );
}
}



export default login;
