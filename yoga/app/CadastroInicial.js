import { StatusBar } from 'expo-status-bar';
import React, { Component, useState  } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput , Button, Alert } from 'react-native';
import { format } from 'date-fns';


import BackgroundMain from '../componentes/BackgroundMain';

export default function CadastroInicial() {
  const confirmar = () => {
    Alert.alert('Cadastro realizado com sucesso!');
  }

  const [text1, setText1] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');

  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {
    // Aqui, você pode lidar com os dados do formulário, como enviar para um servidor ou processá-los localmente.
    console.log('Texto 1:', text1);
    console.log('Valor Numérico:', peso);
    console.log('Valor Numérico:', altura);
    console.log('Valor Numérico:', idade);
  };


  return (
    <View style={styles.container}>
        <BackgroundMain>
            <Text style={styles.titulo2}>Triagem para Yoga</Text>
            
            <View style={styles.form}>

              <Text>Peso:</Text>
              <TextInput
                style={styles.inputs}
                onChangeText={text => setPeso(text)}
                value={peso}
                keyboardType="numeric" // Isso faz com que o teclado exiba apenas números
                placeholder="Informe o peso"
              />

              <Text>Altura:</Text>
              <TextInput
                style={styles.inputs}
                onChangeText={text => setAltura(text)}
                value={altura}
                keyboardType="numeric" // Isso faz com que o teclado exiba apenas números
                placeholder="Informe o altura"
              />

              <Text>Idade:</Text>
              <TextInput
                style={styles.inputs}
                onChangeText={text => setIdade(text)}
                value={idade}
                keyboardType="numeric" // Isso faz com que o teclado exiba apenas números
                placeholder="Informe a idade"
              />

              <Text>Já pratica Yoga?</Text>
              <TextInput
                style={styles.inputs}
                onChangeText={text => setText1(text)}
                value={text1}
                placeholder=""
              />

              <TouchableOpacity style={styles.button} onPress={confirmar}>
                  <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>

            </View>
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
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight:'800'
  },

  form:{
    padding: 15,
    marginLeft: 10,
    marginTop: 5
  },

  inputs:{
    width: '90%',
    borderWidth: 1,
    borderRadius: 12,
    textAlign: 'center',
    marginVertical: 8,
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
  }
});
