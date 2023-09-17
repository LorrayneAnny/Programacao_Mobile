import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BackgroundMain from '../componentes/BackgroundMain';
import Option from '../componentes/Option';

export default function ListaPosicoes() {
 
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <BackgroundMain>
            <Text style={styles.titulo2}>Posições</Text>
            
            <Option>
              Postura de Lótus  {'\n'} 
              (Padmasana)
            </Option>
            
            <Option>
              Postura de Cadeira  {'\n'} 
              (Sukhasana)
            </Option>

            <Option>
              Postura de Joelhos {'\n'} 
               (Vajrasana) 
            </Option>

            <Option>
              Postura deitada {'\n'} 
              (Shavasana) 
            </Option>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NovaViagem')}>
                <Text style={styles.buttonText}>Nova viagem</Text>
            </TouchableOpacity>
        </BackgroundMain>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  titulo2:{
    width: '80%',
    marginLeft: 40,
    marginTop: 20,
    fontSize: 20,
    fontWeight:'800'
  },

  viagens:{
    borderWidth: 1,
    borderRadius: 20,
    width: '80%',
    alignSelf: 'center',
    padding: 10,
    marginTop: 20,
  },

  button:{
    backgroundColor: '#00D26D',
    width: '50%',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 80,
  },
  buttonText:{
    alignSelf: 'center',
    paddingVertical: 10,
    fontSize: 20
  }
});
