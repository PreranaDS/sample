import { useContext, useState } from 'react';
import { StyleSheet, View ,FlatList, Text, Modal, Pressable, TextInput, Image } from 'react-native';
import { userReducer } from '../redux/userReducer';
import { useReducer } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './Profile';
import { NavigationContainer } from '@react-navigation/native';
import ActionBar from 'react-native-action-bar';
import { UserContext } from '../store/auth-context';
import {useNavigation} from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/styles';


export function ProfileDetails() {
  const userCtx = useContext(UserContext);
  const navigate = useNavigation();
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {navigate.replace("Profile")}} />
        <Appbar.Content title="Profile Details" />
      </Appbar.Header>

      <View style={styles.imageContainer}> 
        <Image
          style={styles.tinyLogo}
          source={require('../assets/profilepic.jpg')}
        />
        <Text style={{fontSize:20, color:Colors.primary500 }}> {userCtx.username} </Text>
      </View>
        <View style={styles.appContainer}>
          <View style={styles.nestedContainer}>
            <Ionicons name={'phone-portrait-outline'} size={20} color={Colors.primary800} />
            <Text style={styles.text}> {userCtx.mobileNumber} </Text>
          </View>
          <View style={styles.nestedContainer}>
            <Ionicons name={'call-outline'} size={20} color={Colors.primary800} />
            <Text style={styles.text}> {userCtx.homeNumber}</Text>
          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer:{
    paddingTop:50,
    paddingBottom:50,
    alignItems:'center',
    justifyContent:'flex-start',
    borderBottomEndRadius:100,
    backgroundColor:Colors.primary100,
    shadowColor: 'black',
    shadowOffset: {
      width: 20,
      height: 20
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2
  },
  appContainer: {
    flex:1,
    paddingTop:50,
    alignItems:'center',
    justifyContent:'flex-start',
  },
  nestedContainer:{
    flexDirection:'row',
  },
  text:{
    width:110,
    fontSize:20
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius:100,
    
  }
});
