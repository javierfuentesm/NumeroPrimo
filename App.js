import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  
 isPrime=(num) => {
   if (num==1) {
    return this.setState({text:'No es primo'})

   }
  if (num <= 1) {
    return this.setState({text:'Si es primo'})
  } else if (num <= 3) {
    return this.setState({text:'Si es primo'})
  } else if (num%2 === 0 || num%3 === 0) {
    return this.setState({text:'No es primo'})
  }
 
  let i = 5
  while (i*i <= num) {
    if (num%i === 0 || num%(i+2) === 0) {
      return this.setState({text:'No es primo'})
    }
    i += 6
  }
  return this.setState({text:'Si es primo'})
}

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Escribe aqui el numero que deseas saber si es primo"
          onChangeText={(text) => this.isPrime(text)}
          
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}