import React, { Component } from "react";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import * as firebase from "firebase";
class MyCircle extends Component {
  render() {
    console.log(this.props.users)
    return (
      <View>
        {this.props.users !== undefined ? (
          this.props.users.circle  !==
          undefined ? (
            Object.keys(
              this.props.users[firebase.auth().currentUser.uid].circle
            ).map(circleKey => {
              let oneCircle = this.props.users[firebase.auth().currentUser.uid]
                .circle[circleKey];
              return (
                <TouchableOpacity
                  style={{ borderColor: "gray", borderWidth: 1, padding: 20 }}
                >
                  <Text>{oneCircle.circleName}</Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <ActivityIndicator size="large" color="red" />
          )
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
    );
  }
}
// export default MyCircle;
let mapStateToProps = state => {
  return {
    users: state.FTReducer.users[firebase.auth().currentUser.uid]
  };
};
let mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(MyCircle);
