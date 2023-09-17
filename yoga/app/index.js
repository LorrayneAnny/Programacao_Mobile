import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BackgroundMain from '../componentes/BackgroundMain';

export default function Principal() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <BackgroundMain>
            
          <TouchableOpacity onPress={() => navigation.navigate('ListaPosicoes')} style={styles.viagens}>
            <Text style={styles.texto}>Posições</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.viagens}>
            <Text style={styles.texto}>Meditações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.viagens}>
            <Text style={styles.texto}>Nutrição</Text>
          </TouchableOpacity>


            <TouchableOpacity  onPress={() => navigation.navigate('CadastroInicial')} style={styles.button}>
                <Text style={styles.buttonText}>Cadastro Inicial</Text>
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

  apresentacao:{
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 25,
    fontWeight:'500'
  },

  button:{
    backgroundColor: '#94E7FF',
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
  },
  viagens:{
    borderWidth: 1,
    borderRadius: 20,
    width: '80%',
    height: 80,
    alignSelf: 'center',
    verticalAlign: 'middle',
    textAlign: 'center',
    padding: 10,
    marginTop: 20,
    backgroundColor: '#FFF2F2'
  },

  texto:{
    marginTop: 14,
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center'
  }
});
