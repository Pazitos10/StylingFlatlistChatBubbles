import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Message } from 'components/Message'
import { Styles } from 'components/Styles'

export class Chat extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const { messages } = this.props
    
    /* Para ajustar justifyContent y alignItems en un FlatList podemos usar contentContainerStyle */
    return (
      <View style={{ flex:1 }}>
        <FlatList
          style={Styles.chatContainer}
          //contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
          data={ messages }
          renderItem={({ item, index }) => (
            <Message message={ item } index={ index }/>
          )}
        />
      </View>
    )
  }
}