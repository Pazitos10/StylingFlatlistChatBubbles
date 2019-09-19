import React, {Component} from 'react';
import { View } from 'react-native';
import { Chat } from 'components/Chat'
import { AppBar } from 'components/AppBar'

export class App extends Component {

  constructor(props){
    super(props)
    const messages = [
      { key: '0', id: 0, text: 'this is a test' },
      { key: '1', id: 1, text: 'this is a test' },
      { key: '2', id: 2, text: 'this is a test' },
      { key: '3', id: 3, text: 'this is a test' },
      { key: '4', id: 4, text: 'this is a test' },
      { key: '5', id: 5, text: 'this is a test' },
      { key: '6', id: 6, text: 'this is a test' },
      { key: '7', id: 7, text: 'this is a test' },
      { key: '8', id: 8, text: 'this is a test' },
      { key: '9', id: 9, text: 'this is a test' },
      { key: '10', id: 10, text: 'this is a test' },
      { key: '11', id: 11, text: 'this is a test' },
      { key: '12', id: 12, text: 'this is a test' }
    ]
    this.state = { messages } // equivalente a -> { messages: messages }
  }

  render() {
    const { messages } = this.state
    return(
      <View style={{ flex:1 }}>
        <AppBar />
        <Chat messages={ messages }/>
      </View>
    )
  }
}
