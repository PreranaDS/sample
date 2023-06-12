import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button, Pressable, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { userReducer } from '../redux/userReducer';
import { useContext, useReducer, useState } from 'react';
import { UserContext } from '../store/auth-context';
import { Colors } from '../constants/styles';

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
      <View style={styles.formContainer}>
        <StatusBar style="auto" />
        <View style={styles.nestedContainer}>
          <TextInput style={styles.textinputstyle} placeholder='Enter username' onChangeText={(name) => setUsername(name)}/>
        </View>
        <View style={styles.nestedContainer}>
          <TextInput style={styles.textinputstyle} placeholder='Enter password'  secureTextEntry={true}/>
        </View>
        <View style={styles.nestedContainer}>
          <Pressable onPress={navigateToHome} style={styles.button}>
            <Text style={{fontWeight:'bold', fontSize:17}}>Login</Text>
          </Pressable>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:100,
  },
  nestedContainer: {
    alignItems: 'center',
    paddingTop:10
  },
  formContainer:{
    marginTop: 64,
    marginHorizontal: 32,
    padding: 20,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  textinputstyle:{
    width:200,
    height:50,
    backgroundColor:'#ffffff',
    padding:10,
    borderRadius:60
  },
  button:{
    backgroundColor:'#347aeb',
    borderRadius:60,
    width:200,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  }
});
