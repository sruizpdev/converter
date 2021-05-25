import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [valor, setValor] = useState<number>(1);
  const calcular = () => {
    setValor(valor * 4);
  };
  return (
    <View style={styles.mainContainer}>
      <Text>Polski converter 1.0 </Text>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TouchableOpacity onPress={calcular} style={styles.boton}>
        <Text> {valor}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    padding: 20,
    backgroundColor: 'blue',
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
