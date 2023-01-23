import React, { Component } from "react";
import { View , Text, Image, StyleSheet, TouchableOpacity} from "react-native";

class Filmes extends Component{
    render(){
        const {nome,foto} =this.props.data
        return(

        <View>
            <View style={styles.card}>
                <Text
                    style={styles.titulo}
                >{nome}</Text>
                <Image
                style={styles.capa}
                source={{uri:foto}}
                />
                <Text style={styles.sinopse}>
                    {this.props.data.sinopse}
                </Text>
            </View>
            <View style={styles.areaBtn}>
                <TouchableOpacity style={styles.btn}
                    onPress={() => alert(nome)}
                >
                    <Text style={styles.btnTxt}>
                        Leia Mais
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
            
        )
    }

  
}
const styles = StyleSheet.create({
    card:{
        shadowColor:'#000',
        backgroundColor:'#fff9',
        width:350,
        padding:10,
        shadowOffset:{width:0 , height: 1},
        shadowOpacity:0.8,
        margin:15,
        shadowRadius:5,
        borderRadius:5,
        elevation:3,
        zIndex:1,
    },
    titulo:{
    fontSize:18,
    padding:15,
    textAlign:'center',
    },
    capa:{
        height:250,
        zIndex:2
    },
    sinopse:{
        fontSize:20,
        margin:5,
    },
    areaBtn:{
        alignItems:'flex-end',
        marginTop:-40,
        marginRight:15,
        zIndex:9,
    },
    btn:{
        widht:9,
        backgroundColor:'#09afff',
        opacity:1,
        paggin:8,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
    },
    btnTxt:{
        textAlign:'center',
        color:'#fff'
    }
});

export default Filmes;