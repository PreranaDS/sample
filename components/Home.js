import { useContext, useState } from 'react';
import { StyleSheet, View ,FlatList, Text, Modal, Pressable, TextInput } from 'react-native';
import { userReducer } from '../redux/userReducer';
import { useReducer } from 'react';

import { Profile } from './Profile';
import { NavigationContainer } from '@react-navigation/native';
import ActionBar from 'react-native-action-bar';
import UserContextProvider, { UserContext } from '../store/auth-context';
import { ProfileHome } from './ProfileHome';

export function Home() {
  const userCtx = useContext(UserContext);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [newFriend, setNewFriend] = useState('');
  const [friends, setFriends] = useState([
    {
      text: 'John Doe',
      key:'John Doe'
    },
    {
      text: 'Mary John',
      key: 'Mary John'
    }]);
  const [state, dispatch] = useReducer(userReducer, '');

  function addFriendHandler() {
    setFriends((currentFriends) => [...currentFriends, 
    {
      text: newFriend,
      key: newFriend
    }
  ]);
  }
  return (
    <>
      <ActionBar
        containerStyle={styles.bar}
        title={'Home'}
        rightIcons={[
            {
                name: 'plus',
                onPress: () => setModalVisible(true),
            }
        ]}
      />
    <View style={styles.appContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add New Friend {'\n'}</Text>
            <TextInput placeholder='Enter name of friend' value={newFriend} onChangeText={(txt) => setNewFriend(txt)} />
            <View style={styles.buttoncontainer}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {addFriendHandler(); setNewFriend(''); setModalVisible(!modalVisible)}}>
                    <Text style={styles.textStyle}>Add</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {setNewFriend(''); setModalVisible(!modalVisible)}}>
                    <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Text>Welcome {userCtx.username}! Here is your friends list:</Text>
    </View>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={friends} 
          renderItem={(itemData) => {
            return <Text style={styles.item} key={itemData.key}> {itemData.item.text} </Text>
            }
          }
          keyExtractor={item => item.key} />
      </View>
      {/* <MyTabs /> */}
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
    //height:100,

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
