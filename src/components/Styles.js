import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'cadetblue',
    elevation: 3,
    flex:1, 
    justifyContent: 'center',
    maxHeight: 60,
  },
  appBarTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10
  },  
  bubbleContainer: {
    marginBottom: 20,
  },
  bubbleContent: {
    padding: 10,
    borderRadius: 5,
    elevation: 3
  },
  chatContainer: {
    backgroundColor: 'floralwhite',
    flex:1,
    padding: 10,
  },
  msgContent: {
    fontSize: 16,
  },
});

export { Styles };