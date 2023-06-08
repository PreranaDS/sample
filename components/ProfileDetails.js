import { useContext, useState } from 'react';
import { StyleSheet, View ,FlatList, Text, Modal, Pressable, TextInput } from 'react-native';
import { userReducer } from '../redux/userReducer';
import { useReducer } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './Profile';
import { NavigationContainer } from '@react-navigation/native';
import ActionBar from 'react-native-action-bar';
import { UserContext } from '../store/auth-context';
import {useNavigation} from '@react-navigation/native';

export function ProfileDetails() {
  const userCtx = useContext(UserContext);
  const navigate = useNavigation();
  return (
    <>
      <ActionBar
        containerStyle={styles.bar}
        title={'Profile Details'}
        rightIcons={[
            {
                name: 'back',
                onPress: () => navigate.replace("Profile"),
            }
        ]}
      />
    <View style={styles.appContainer}>
      <Text>Profile Details:</Text>
      <Text>Username: {userCtx.username}</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop:50,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  goalsContainer:{
    flex:5,
    alignContent:'flex-start',
    justifyContent:'center',
    padding: 50,
    alignItems:'center',
  },
   tinyLogo: {
    width: 100,
    height: 100,
    alignSelf:'center'
  },
  bar:{
    backgroundColor:'#000000',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttoncontainer:{
    flexDirection:'row',
    paddingTop:40
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    flex:1
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  item:{
    backgroundColor:'grey',
    color:'white',
    width:100,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center'
  }
});
