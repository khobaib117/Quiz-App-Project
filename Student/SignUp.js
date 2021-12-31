import React from 'react'
import {
  Text,
  View,
  TextInput,
  Button,

} from 'react-native';
import Navigation from '../App';

const Signup = ({navigation}) => {
  return (
    <>
<View style={{backgroundColor:'pink', paddingTop:200}}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Create Account</Text>
      </View>


      <View style={{ alignItems: 'center' }}>

        <TextInput placeholder={"Full Name"} 
          style={{
            height: 42,
            width: "50%",
            borderBottomWidth: 1,
            fontWeight: 'bold',
            fontSize: 15,
            borderRadius:1


          }} />


        <TextInput placeholder="Email"
          style={{
            height: 42,
            width: "50%",
            borderBottomWidth: 1,
            fontWeight: 'bold',
            fontSize: 15
          }} />


        <TextInput TextInput placeholder={"Password"}
          style={{

            height: 42,
            width: "50%",
            borderBottomWidth: 1,
            fontWeight: 'bold',
            fontSize: 15
          }} />


        <TextInput TextInput placeholder={"Confirm Password"}
          style={{

            height: 42,
            width: "50%",
            borderBottomWidth: 1,
            fontWeight: 'bold',
            fontSize: 15
          }} />
      </View>

      <View style={{
        paddingBottom: 10,
        paddingTop: 20,
        width: 100,
        alignSelf: 'center'
      }}>
        <Button title='Sign Up' />
      </View>


<View style={{flexDirection:'row', paddingLeft:10, paddingTop:20, justifyContent:'center'}}>

      
        <Text style={{
          fontWeight: 'bold',
          fontSize: 13,
          textAlign: 'center',
          paddingTop:28
        }}>Already have an account?</Text>


     <View style={{paddingLeft:15, paddingTop:20}}>
      <Button title='Log in' onPress={()=> navigation.navigate("Login")}>
        </Button>
        </View>
        </View>
        </View>
    </>
    
  );
};


export default Signup;