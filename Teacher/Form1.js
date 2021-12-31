import React from 'react';

import { 
  View,
  Text, 
  StyleSheet, 
  Button
} from 'react-native'

const Form=({navigation})=>{
  return(
    
    <View style={{backgroundColor:'#9CDDEB', height:'100%'}}>

    <View style={{ 
    backgroundColor:'#E3E6E7',
    borderRadius: 10,
    borderColor:'white',
    borderWidth: 4, 
    paddingTop:10,
    paddingBottom:10,
    margin:10}}>

    <Text style={{paddingLeft:10, fontWeight:'bold', fontSize:20}}>MAD</Text>
    </View>

    <View style={{
      backgroundColor:'#E3E6E7',
      borderRadius: 10,
      borderColor:'white',
    borderWidth: 4, 
    paddingTop:10,
    paddingBottom:10,
    margin:10}}>

    <Text style={{paddingLeft:10,fontWeight:'bold',fontSize:20}}>Calculus</Text>
    </View>

    <View style={{
      backgroundColor:'#E3E6E7' ,
      borderRadius: 10,
      borderColor:'white',
    borderWidth: 4, 
    paddingTop:10,
    paddingBottom:10,
    margin:10}}>
    <Text style={{paddingLeft:10,fontWeight:'bold',fontSize:20}}>Dataware</Text>
    </View>

    <View style={{
      backgroundColor:'#E3E6E7',
      borderColor:'white',
      borderRadius: 10,
    borderWidth: 4, 
    paddingTop:10,
    paddingBottom:10,
    margin:10}}>
    <Text style={{paddingLeft:10,fontWeight:'bold',fontSize:20}}>DevOps</Text>
    </View>

    <View style={{paddingLeft:15, paddingTop:20}}>
      <Button title='Add Quiz' onPress={()=> navigation.navigate("Form")}>
        </Button>
    </View>

    </View>
   
  
  )};
  export default Form;
