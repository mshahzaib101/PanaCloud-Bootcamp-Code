/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: [],
    };
  }
  print = () => {
    this.state.data.push(this.state.text);
    console.log(this.state.data);
    this.setState({text: ''})
  }
  render() {
    return (
      <ScrollView>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        
      }}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
        <TextInput value={this.state.text} onChangeText={(text) => this.setState({text})} />
        <Button title='Submit' onPress={this.print} />
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}} >
        {
          this.state.data.map(
            (a, b) => {
              return(<Text> {a} </Text>)
            }
          )
        }
        </View>
      </View>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'pink',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: 'black',
//     marginBottom: 5,
//   },
// });
