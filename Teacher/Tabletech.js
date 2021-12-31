import React from "react";
import { Table,Row,Rows } from "react-native-table-component";
import {
  View,
  StyleSheet
} from 'react-native';


const tableHead=['Name', 'Subject','Marks'];
const tableData= [['', '', ''],
                  ['', '', ''],
                  ['', '', ''],
                  ['', '', ''],
                  ['', '', '']]

const Tabletech=({navigation})=>{
  return(
      <>
<View>
  <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
    <Row data={tableHead} style={styles.head} textStyle={styles.text}></Row>
    <Rows data={tableData} textStyle={styles.text}></Rows>
  </Table>
</View>



</>
  )
};
const styles= StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#fff' 
  },
  head: { 
    height: 40, 
    backgroundColor: '#f1f8ff' 
  },
  text: { 
    margin: 6 
  },

})

export default Tabletech;