import { StyleSheet } from 'react-native';

// Para crear sombras en los componentes (Android e iOS)
// https://ethercreative.github.io/react-native-shadow-generator/
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
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