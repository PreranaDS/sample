import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Login} from './components/Login';
import {Home} from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconButton from './ui/IconButton'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './components/Profile';
//import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import UserContextProvider, {UserContext} from './store/auth-context';
import { ProfileDetails } from './components/ProfileDetails';
import { HomeFromLogin } from './components/HomeFromLogin';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name='HomeFromLogin' component={HomeFromLogin} options={{ headerShown: false }}/>
          {/* <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
          <Tab.Screen name='ProfileDetails' component={ProfileDetails} options={{ headerShown: false }}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
