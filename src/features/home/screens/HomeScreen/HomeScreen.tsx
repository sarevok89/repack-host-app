import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
