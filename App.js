
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Signup from './Student/Signup';
import Login from './Student/Login';
import Form from './Teacher/Form';
import Form1 from './Teacher/Form1'

const Stack = createStackNavigator();


const App=()=>{
    return(
<NavigationContainer>
 <Stack.Navigator initialRouteName='Home'>
   
   {/* <Stack.Screen  name='Signup' component={Signup}  />
   <Stack.Screen  name='Login' component={Login}  /> */}
   <Stack.Screen  name='Form1' component={Form1}  />
   <Stack.Screen  name='Form' component={Form}  /> 
 
 </Stack.Navigator>
</NavigationContainer>
    )
};

export default App;
 
