import React from 'react';
import { Text, View,FlatList,StyleSheet,TextInput,TouchableOpacity } from 'react-native';

export default class WriteScreen extends React.Component{
    constructor(){
        super()
        this.state=({
            story:""
        })
    }
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.searchBar}>
            <TextInput style={styles.bar} placeholder="enter bookId or studentId"
            onChangeText={(text)=>{
              this.setState({
                story:text
              })
            }}/>
            <TouchableOpacity style={styles.searchButton}>
                <Text>Submit</Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    bar:{
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10
    },
    searchButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"green"
    }
  })