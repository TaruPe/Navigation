import React, { useEffect,useLayoutEffect } from 'react';
import { View, Text, BackHandler, StyleSheet } from 'react-native';

export default function SecondScreen({ route, navigation }) {
  useEffect(() => {
    if (route.params?.message) { // Check if the route has a "message" parameter and display it as a notification
      alert(route.params.message);
    }
    BackHandler.addEventListener('hardwareBackPress', close); // Let's listen to the device's back button event and attach the "close" function to it
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', close); // Remove the event listener for the back button when the component is detached
    };
  }, []);

  // Go back to the previous screen and prevent the default back button behavior
  function close() {
    navigation.goBack(null);
    return true;
  }

  // Use useLayoutEffect to set navigation headers
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#f0f0f0',
    },
});
}, []);

  return (
    <View style={styles.container}>
      <Text>Second screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
  });
