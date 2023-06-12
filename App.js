import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Login} from './components/Login';
import {Home} from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserContextProvider, {UserContext} from './store/auth-context';
import { HomeFromLogin } from './components/HomeFromLogin';
import { useContext } from 'react';

function AuthStack(){
  const Stack = createNativeStackNavigator();
  return(
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='HomeFromLogin' component={HomeFromLogin} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}


function Root() {
  const userCtx = useContext(UserContext);

  return (
    <NavigationContainer>
      {userCtx.isLoggedIn && <HomeFromLogin />}
      {!userCtx.isLoggedIn && <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <UserContextProvider>
      <Root />
    </UserContextProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
