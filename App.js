/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Picker
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './page/home/home';
const Stack = createStackNavigator();
//function HomeScreen({ navigation }) {
//  return (
//    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//      <Text>Home Screen</Text>
//      <Button
//        title="Go to Details"
//        onPress={() => navigation.push('Details')}
//      />
//    </View>
//  );
//}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const App: () => React$Node = () => {
  return (
      <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
       </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

const state = {
  language:'java'
}

export default App;
