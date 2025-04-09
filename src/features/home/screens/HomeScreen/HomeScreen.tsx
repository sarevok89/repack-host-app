import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title="Child app"
        onPress={() => navigation.navigate('ChildApp')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
