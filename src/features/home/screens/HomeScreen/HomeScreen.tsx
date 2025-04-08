import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title="Child app"
        onPress={() => navigation.navigate('ChildApp')}
      />
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
