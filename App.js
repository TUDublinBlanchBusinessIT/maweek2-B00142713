import { StyleSheet, View, Text } from 'react-native';
import React, {useState} from 'react';
const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function App() {
  return(
    <View>
    <Text style={styles.paragraph}>Hello, World
    const [fullName, setFullName] = useState("Abel Ikhaguebor");</Text>
    </View>
  )
};
  
