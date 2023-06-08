import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { userReducer } from '../redux/userReducer';
import { useContext, useReducer, useState } from 'react';
import { UserContext } from '../store/auth-context';

export function Login() {
  const navigate = useNavigation();
  const [state, dispatch] = useReducer(userReducer, '');
  const [username, setUsername] = useState('');
  const userCtx = useContext(UserContext);

  let navigateToHome = () => {
    // await dispatch({
    //     type: 'SET_USER',
    //     payload:  username,
    //   });
    userCtx.setUsername(username);
    navigate.replace('HomeFromLogin');
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput placeholder='Enter username' onChangeText={(name) => setUsername(name)}/>
      <TextInput placeholder='Enter password' />
      <Button title='Login' onPress={navigateToHome} />
    </View>
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
