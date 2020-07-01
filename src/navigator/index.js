import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../pages/Home';
import detail from '../pages/detail';

let Stack=createStackNavigator()
// Navigator,Screen
class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitleAlign:'center'
        }}>
          <Stack.Screen name="Home" options={{headerTitle:'首页'}} component={Home} />
          <Stack.Screen name="detail" options={{headerTitle:'详情页'}} component={detail} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Navigator
