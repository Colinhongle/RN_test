import React, { Component } from 'react'
import { View,Text, Button } from 'react-native'

class Account extends Component {

  onPress=()=>{
    const {navigation}=this.props
    navigation.navigate('Detail',{
      id:'100',
      name:'我是哈哈哈哈'
    })
  }
  render() {
    return (
      <View>
        <Text>
          我是Account
        </Text>
        <Button title="跳转到详情页" onPress={this.onPress}></Button>
      </View>
    )
  }
}

export default Account