import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [valor, setValor] = useState('0');
  return (
    <View style={styles.mainContainer}>
      <Text>Polski converter 1.0 </Text>
      <TextInput style={styles.input} onChangeText={setValor} value={valor} />
      <TextInput
        style={styles.input}
        onChangeText={() => console.log('hola')}
        value={valor}
      />
      <TouchableOpacity onPress={() => console.log('hola')} style={styles.boton}>
        <Text>convertir</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boton:{
    padding:20,
    backgroundColor:'blue'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 40,
  },
});

export default App;
