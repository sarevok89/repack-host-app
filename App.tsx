import React, {Suspense} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChildApp = React.lazy(() => import('ChildApp/App'));

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Host app!</Text>
      <Suspense fallback={<Text>Loading...</Text>}>
        <ChildApp />
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
