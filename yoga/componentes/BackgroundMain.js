import { StatusBar } from 'expo-status-bar';
import React, { Component, ReactNode} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BackgroundMain = ({ children }) => {
  return (
    <View style={styles.container}>

        <View style={styles.introducao}>
            <View>
                <Text style={styles.nome}>YogaFusion</Text>
                <Text style={styles.slogan}>Encontre Equilíbrio, Envolva-se, Evolua</Text>
            </View>
            <Image style={styles.logo}
            source={require('../assets/logo.png')}
            />
        </View>
        

        <View style={styles.Card}>
            {children}
        </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },

  introducao:{
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },

  nome:{
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  slogan:{
    marginTop: 10,
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
    width: 200,
    textAlign: 'center'
  },
 
  logo:{
    margin: 0,
    width: 150,
    height: 150,
 },


  Card:{
    backgroundColor: 'white',
    width: '88%',
    height: '80%',
    borderRadius: 15,
    marginTop: 15,
  }

});


export default BackgroundMain;