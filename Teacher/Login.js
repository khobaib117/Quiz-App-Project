import React from 'react';


import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image
} from 'react-native';

const App = () => {

  return (

    <>

<View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Login</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TextInput TextInput placeholder={"Enter user name"}
          style={{
            height: 42,
            width: "50%",
            borderBottomWidth: 1,
            fontWeight: 'bold',
            fontSize: 15

          }} />
        <TextInput placeholder="Enter user password"
          style={{
            height: 42,
            width: "50%",
            borderBottomWidth: 1,
            fontWeight: 'bold',
            fontSize: 15
          }}></TextInput>

      </View>
      <View
        style={{
          paddingBottom: 10,
          paddingTop: 20,
          width: 100,
          alignSelf: 'center'
        }}>
        <Button title='Login'></Button>
      </View>
      <View >
        <Text style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center'
        }}>Don't have an Account?</Text>

      </View>



    </>




  )
}

export default App;