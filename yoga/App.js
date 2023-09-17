import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Principal from './app/index';
import ListaPosicoes from './app/ListaPosicoes';
import CadastroInicial from './app/CadastroInicial';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="ListaPosicoes" component={ListaPosicoes} />
        <Stack.Screen name="CadastroInicial" component={CadastroInicial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

