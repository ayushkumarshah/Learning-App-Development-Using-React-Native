import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TextInput, View,ScrollView,Image,TouchableHighlight,Button,TouchableOpacity} from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {text: '',username:'',password:''};
  }

  Register()
  {
    const un=this.state.username;
    const pw=this.state.password;
    if (un=='Ayush' && pw=='Ayush')
    {
      alert('Valid user');
    }
    else
    {
       alert('Invalid user');
     }
  }

  getData()
    {
      fetch('https://facebook.github.io/react-native/movies.json',{
        method:'GET'})
      .then((res)=>res.json())
      .then((resJSON)=>{
        this.setState({
        resultJSON:JSON.stringify(resJSON)
      })

      })
      .catch((error)=>{
        console.error(error);

      });

    }

  render() 
  {
    return (
     <ScrollView style={styles.container}>
     <Text style={{ fontSize: 24,textAlign:'center',marginTop:50,fontWeight:'bold'}}>
          IT MEET v8.0
        </Text>
        <TextInput
          style={{borderWidth:1,borderColor:'#c00'}}
          placeholder="Enter username"
          onChangeText={(text) => this.setState({username:text})}
        />

        <TextInput
          style={{borderWidth:1,borderColor:'#c00',marginTop:5}}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password:text})}
        />
        

        <Text> username: {this.state.username}</Text>
        <Text> password: {this.state.password}</Text>

     <TouchableHighlight
        onPress={this.Register.bind(this)}
        style={styles.button}>

        <Text style={{color:'#fff',textAlign:'center'}}>Register</Text>
      </TouchableHighlight>


<Button
  style={styles.button}
  onPress={()=>{
    alert('Button clicked');

  }}
  title='Button component'
  />

  <Button
  style={styles.button}
  onPress={this.getData.bind(this)}
  title='Get Data'
  />

  <Text>{this.state.resultJSON}</Text>

        <Image source={require('./ayush.jpg')}    
            style={{width:200,height:250}} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding:10,
    backgroundColor: '#F5FCFF',
  },

  button:{
    backgroundColor:'#c00',
    padding:10,
  },
});
