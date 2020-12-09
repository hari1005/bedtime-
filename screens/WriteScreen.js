import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';
export default class WriteScreen extends Component{
    render(){
    return(
    <View>
    <Text>this is where you write</Text>
    <Button title="writeStoryHere" onPress={()=>{
        this.props.navigation.navigate('ReadScreen')
    }}/>
    </View>
    )
    }
}