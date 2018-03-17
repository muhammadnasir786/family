// FOR Request and pending status using tabs
import React, { Component } from "react";
import { Text, View } from "react-native";
import CreateCircle from "./createCircle";
import MyCircle from './mycircle'
import { connect } from "react-redux";
class Request extends Component {
  componentDidMount(){
    this.props.getUsers();
  }
  render() {
    return (
      <View>
        <CreateCircle />
        <MyCircle/>
      </View>
    );
  }
}
// export default Request;
let mapStateToProps = (state)=>{
  return {

  }
}
let mapDispatchToProps = (dispatch)=>{
  return {
    getUsers : dispatch(FTAction.getUsers())
  }
}
connect(mapStateToProps, mapDispatchToProps)(Request)
