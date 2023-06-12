import { useContext, useState } from 'react';
import { StyleSheet, View ,FlatList, Text, Modal, Pressable, TextInput } from 'react-native';
import { UserContext } from '../store/auth-context';
import { Colors } from '../constants/styles'
import { Appbar } from 'react-native-paper';

export function Home() {
  const userCtx = useContext(UserContext);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [contactInfoModalVisible, setContactInfoModalVisible] = useState(false);

  const [newFriendName, setNewFriendName] = useState('');
  const [newFriendHomeNumber, setNewFriendHomeNumber] = useState('');
  const [newFriendMobileNumber, setNewFriendMobileNumber] = useState('');

  const [editFriendName, setEditFriendName] = useState('');
  const [editFriendHomeNumber, setEditFriendHomeNumber] = useState('');
  const [editFriendMobileNumber, setEditFriendMobileNumber] = useState('');
  const [editFriendKey, setEditFriendKey] = useState('');

  const [friends, setFriends] = useState([
    {
      text: 'John Doe',
      key:'John Doe',
      homeNumber: '25656565',
      mobileNumber: '987654321'
    },
    {
      text: 'Mary John',
      key: 'Mary John',
      homeNumber: '25656585',
      mobileNumber: '987954321'
    }]);

  let addFriendHandler = () =>  {
    setFriends((currentFriends) => [...currentFriends, 
    {
      text: newFriendName,
      key: newFriendName,
      homeNumber: newFriendHomeNumber,
      mobileNumber: newFriendMobileNumber
    }
  ]);
  }

  let editFriendsHandler = () => {
    console.log(editFriendKey);
    setFriends((currentFriends) => currentFriends.filter((item) => item.key != editFriendKey));
    setFriends((currentFriends) => [...currentFriends, 
      {
        text: editFriendName,
        key: editFriendName,
        homeNumber: editFriendHomeNumber,
        mobileNumber: editFriendMobileNumber
      }
    ]);
  }
  
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Home" />
        <Appbar.Action icon="plus" onPress={() => {setModalVisible(true)}} />
        <Appbar.Action icon="logout" onPress={() => {userCtx.logout();}} />
      </Appbar.Header>

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
            <TextInput placeholder='Enter name of friend' value={newFriendName} onChangeText={(txt) => setNewFriendName(txt)} />
            <TextInput placeholder='Enter mobile number' value={newFriendMobileNumber} onChangeText={(txt) => setNewFriendMobileNumber(txt)} />
            <TextInput placeholder='Enter home number' value={newFriendHomeNumber} onChangeText={(txt) => setNewFriendHomeNumber(txt)} />

            <View style={styles.buttoncontainer}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    addFriendHandler(); 
                    setNewFriendName('');
                    setNewFriendHomeNumber('');
                    setNewFriendMobileNumber('');
                    setModalVisible(!modalVisible)}}>
                    <Text style={styles.textStyle}>Add</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setNewFriendName('');
                    setNewFriendHomeNumber('');
                    setNewFriendMobileNumber('');
                    setModalVisible(!modalVisible)}}>
                    <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={contactInfoModalVisible}
        onRequestClose={() => {
          setContactInfoModalVisible(!contactInfoModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Contact Information {'\n'}</Text>
            <View style={styles.contactInfoContainer}>
              <Text>Name: </Text>
              <TextInput placeholder='name' value={editFriendName} onChangeText={(txt) => setEditFriendName(txt)}/>
            </View>
            <View style={styles.contactInfoContainer}>
              <Text>Home number: </Text>
              <TextInput placeholder='hno' value={editFriendHomeNumber} onChangeText={(txt) => setEditFriendHomeNumber(txt)}/>
            </View>
            <View style={styles.contactInfoContainer}>
              <Text>Mobile number: </Text>
              <TextInput placeholder='mno' value={editFriendMobileNumber} onChangeText={(txt) => setEditFriendMobileNumber(txt)}/>
            </View>

            <View style={styles.buttoncontainer}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    editFriendsHandler();
                    setEditFriendMobileNumber('');
                    setEditFriendName('');
                    setEditFriendHomeNumber('');
                    setContactInfoModalVisible(!contactInfoModalVisible)}}>
                    <Text style={styles.textStyle}>OK</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {setEditFriendMobileNumber('');
                  setEditFriendName('');
                  setEditFriendHomeNumber('');
                  setContactInfoModalVisible(!contactInfoModalVisible)}}>
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
          return <Pressable style={styles.item} key={itemData.key} onPress={() => {
            setEditFriendName(itemData.item.text);
            setEditFriendHomeNumber(itemData.item.homeNumber);
            setEditFriendMobileNumber(itemData.item.mobileNumber);
            setEditFriendKey(itemData.item.key);
            setContactInfoModalVisible(true)}}>
              <View style={styles.itemContainer}> 
                <Text> {itemData.item.text} </Text>
              </View>
            </Pressable>
          
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
    backgroundColor: Colors.primary500
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
  itemContainer:{
    backgroundColor: Colors.primary800,
    width:'100%',
    borderWidth:0.6,
    borderColor:'white',
    height:40,
    justifyContent:'center',
    alignItems:'center'
  },
  item:{
    color:'white',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
  },
  contactInfoContainer:{
    flexDirection:'row',
  }
});
