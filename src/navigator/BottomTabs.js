import React, { Component } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Listen from '../pages/Listen';
import Found from '../pages/Found';
import Account from '../pages/Account';

const Tab = createBottomTabNavigator()


function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : route.params.screen || 'Home'
  switch (routeName) {
    case 'Home':
      return '首页'
      break;
    case 'Listen':
      return '人才库'
      break;
    case 'Found':
      return '消息'
      break;
    case 'Account':
      return '我的'
      break;
    default:
      return '首页'
      break;
  }
 
}

class BottomTabs extends Component {
  
  componentDidUpdate() {
    const { navigation,route } = this.props;
    let showBar=true
    if(getHeaderTitle(route)=='我的'){
      showBar=false
    }
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
      headerShown:showBar
    })
  }
  render() {
    return (

      <Tab.Navigator tabBarOptions={{ activeTintColor: '#f84f49' }}>
        <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: '首页' }} />
        <Tab.Screen name="Listen" component={Listen} options={{ tabBarLabel: '人才库' }} />
        <Tab.Screen name="Found" component={Found} options={{ tabBarLabel: '消息' }} />
        <Tab.Screen name="Account" component={Account} options={{ tabBarLabel: '我的' }} />
      </Tab.Navigator>

    )
  }
}

export default BottomTabs
