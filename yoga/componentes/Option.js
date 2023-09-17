import { StatusBar } from 'expo-status-bar';
import React, { Component, ReactNode} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Option = ({ children }) => {
  return (
    <TouchableOpacity style={styles.viagens}>
      <Text style={styles.texto}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#94E7FF'
  },

  texto:{
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center'
  }
});


export default Option;