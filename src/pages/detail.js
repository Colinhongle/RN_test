import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Detail extends Component {

  render() {

    const { route } = this.props;
    const { id,name } = route.params;

    return (
      <View>
        <Text>
          我是detail,ID是：{id},{name}
        </Text>
      </View>
    )
  }
}

export default Detail