import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SearchBar} from 'react-native-elements'

export default class ReadScreen extends Component{
   state={
    search:''
    }
    updateSearch=(search)=>{
        this.setState({search})
    }
    render(){
        const {search}=this.state;
    return(
    <View>
    <Text>this is where you read</Text>
    <SearchBar
    placeholder="search for books here"
    onChangeText={this.updateSearch}
    value={search}
    />
    </View>
    )
    }
}