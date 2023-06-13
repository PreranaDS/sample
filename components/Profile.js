import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActionBar from 'react-native-action-bar';
import { Appbar } from 'react-native-paper';
import { useContext } from 'react';
import { UserContext } from '../store/auth-context';
import { Colors } from '../constants/styles';

export  function Profile() {
  const navigate = useNavigation();
  const userCtx = useContext(UserContext);
  return (
    <>
    <Appbar.Header>
        <Appbar.Content title="Profile" />
        <Appbar.Action icon="logout" onPress={() => {userCtx.logout();}} />
      </Appbar.Header>

    <View style={styles.container}>
        <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => navigate.replace("ProfileDetails")}>
            <Text style={styles.textStyle}>View Profile Details</Text>
        </Pressable>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  bar:{
    backgroundColor:'#000000',
    //height:100,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: Colors.primary500,
  },
  buttonClose: {
    backgroundColor: Colors.primary800,
  },
  textStyle: {
    color: 'white',
    fontSize: 17,
  }
});
