import React, { Component } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  CheckBox
} from "react-native";
import { connect } from "react-redux";
import FTAction from "../store/actions/FTAction";
import * as firebase from "firebase";

// let currentUid = firebase.auth().currentUser.uid;

class CreateCircle extends React.Component {
  constructor() {
    super();
    this.state = {
      circleName: ""
    };
  }
  render() {
    return (
      <View>
        <Text>Circle Name : </Text>
        <TextInput
          value={this.state.circleName}
          onChangeText={text => {
            this.setState({ circleName: text });
          }}
          placeholder="Circle Name"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "lightgray",
            padding: 10
          }}
          onPress={() => {
            // alert(firebase.auth().currentUser.uid)
            let circle = {
              circleName: this.state.circleName
            };
            this.props.addCircle(circle);
          }}
        >
          <Text>Create Circel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// export default CreateCircle;
let mapStateToProps = state => {
  return {
    // users: state.FTReducer.users
  };
};
let mapDispatchToProps = dispatch => {
  return {
    addCircle: data => {
      dispatch(FTAction.addCircle(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateCircle);

// class OneUser extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       isCheck : false
//     }
//   }
//   render(){
//     return (<View
//       onPress={()=>{
//       }}
//       style={{
//       backgroundColor : 'gray',
//       margin : 10 ,
//       padding : 20 ,color : 'white'
//     }}>
//       <Text>{this.props.oneUser.userData.email}</Text>
//       <CheckBox onValueChange={()=>{
//         this.setState({ isCheck : !this.state.isCheck});
//       }} value={this.state.isCheck}/>
//     </View>);
//   }
// }
