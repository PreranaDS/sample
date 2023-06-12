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
import { Appbar } from 'react-native-paper';

export function ProfileDetails() {
  const userCtx = useContext(UserContext);
  const navigate = useNavigation();
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {navigate.replace("Profile")}} />
        <Appbar.Content title="Profile Details" />
      </Appbar.Header>

    <View style={styles.appContainer}>
      <Text>Profile Details:</Text>
      <Text>Username: {userCtx.username}</Text>
      <Text>Mobile Number: {userCtx.mobileNumber}</Text>
      <Text> Home Number: {userCtx.homeNumber}</Text>
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
  }
});
