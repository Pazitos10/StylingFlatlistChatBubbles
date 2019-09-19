import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Styles } from 'components/Styles'

export class Message extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const { message, index } = this.props
    const isEven = (index % 2 == 0)
    const backgroundColor = isEven ? 'white' : 'rgb(220, 248, 198)'
    const align = isEven ? 'flex-start': 'flex-end'
    
    return (
        <View style={[Styles.bubbleContainer, { alignItems: align }]}>
          <View style={[Styles.bubbleContent, { backgroundColor }]}>
              <Text style={ Styles.msgContent }>{ message.text }</Text>
          </View>
        </View>
    )
  }
}
