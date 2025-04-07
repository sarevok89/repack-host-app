import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../home/screens';
import React, {Suspense} from 'react';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();
// const ChildApp = React.lazy(() => import('ChildApp/App'));

const RootStack = () => {
  return (
    <Suspense fallback={<Text>Loading</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="ChildApp" component={ChildApp} /> */}
      </Stack.Navigator>
    </Suspense>
  );
};

export default RootStack;
