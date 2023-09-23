import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState('Testing'); // Status variable "message" and its initialization

  // Use useLayoutEffect to set navigation headers
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#f0f0f0',
      },
      headerRight: () => (
        <AntDesign
          style={styles.navButton}
          name="arrowright"
          size={24}
          onPress={() => navigation.navigate('Second', { message })}
        />
      ),
    });
  }, [message]);

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <TextInput
        onChangeText={(text) => setMessage(text)}
        value={message}
        placeholder="Type message here"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  navButton: {
    marginRight: 5,
    padding: 4,
  },
});
