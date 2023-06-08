import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActionBar from 'react-native-action-bar';

export  function Profile() {
  const navigate = useNavigation();
  return (
    <>
    <ActionBar
        containerStyle={styles.bar}
        title={'Profile'}
      />
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
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
