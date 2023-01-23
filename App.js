import React, { Component } from 'react';
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity,ActivityIndicator } from 'react-native';
import Api from './src/http/api';
import Filmes from './src/filmes';
export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      filmes:[],
      carregando:true,
    };
  }

  async componentDidMount(){
    const response = await Api.get('r-api/?api=filmes')
    this.setState({
      filmes:response.data,
      carregando: false,
    })
  
  }

  render(){
    if(this.state.carregando){
      return(
        <View style={styles.container}>
          <ActivityIndicator
          color='#09f' size={80}
          />
        </View>
      );
    }else{
      return(
        <View style={styles.container}>
          <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.lista}
          data={this.state.filmes}
          keyExtractor={ item => item.id.toString()}
          renderItem={({item}) => <Filmes data={item} />}
          />
        </View>
      );
    }

   
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,0,40)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lista:{
    marginTop:180,
    marginLeft:20,
    alignContent:'space-between',
  },
});
