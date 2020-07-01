import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator,HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import { Platform, StyleSheet } from 'react-native';
// import Home from '../pages/Home';
import Detail from '../pages/Detail';
import BottomTabs from './BottomTabs';
let Stack = createStackNavigator()
// Navigator,Screen
class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled:true,
            gestureDirection:'horizontal',
            headerStyle:{
              ...Platform.select({
                android:{
                  elevation:0,
                  borderBottomWidth:StyleSheet.hairlineWidth
                }
              })
            }
          }}>
          <Stack.Screen name="BottomTabs"  component={BottomTabs}  />
          <Stack.Screen name="Detail" options={{ headerTitle: '详情页' }} component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Navigator