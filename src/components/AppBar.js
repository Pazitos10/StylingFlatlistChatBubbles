import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Styles } from 'components/Styles'

export class AppBar extends Component {
  render() {
    return (
      <View style={Styles.appBar}>
        <Text style={Styles.appBarTitle}> Chat </Text>
      </View>
    )
  }
}
