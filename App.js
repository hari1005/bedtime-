import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {ReadScreen} from "./screens/ReadScreen"
import {WriteScreen} from "./screens/WriteScreen"

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const navi=createMaterialTopTabNavigator();

var AppNavigator = createSwitchNavigator({
  ReadScreen:ReadScreen,
  WriteScreen:WriteScreen
});

const AppContainer = createAppContainer(AppNavigator);