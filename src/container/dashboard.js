import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CreateCircle from './createCircle'
import { connect } from "react-redux";
import FTAction from '../store/actions/FTAction'


class DashBoard extends Component {
  
  render() {
    return (
      <View>
        <CreateCircle/>
      </View>
    );
  }
}


export default DashBoard;
