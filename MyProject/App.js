import React from 'react';
import {Text, View, StyleSheet, Linking, Alert} from 'react-native';
import {Card, Button, TextInput, Avatar} from 'react-native-paper';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View>
      <View style={styles.container}>
        {/* <Avatar.Image
          size={100}
          source={require('./assets/personal.png')}></Avatar.Image> */}

        <View style={styles.image_position}>
          <MaterialIcons name="person" size={100}></MaterialIcons>
        </View>

        <TextInput
          mode="underline"
          backgroundColor="white"
          label="Email"
          placeholder="Input your email"></TextInput>

        <TextInput
          mode="underline"
          label="Password"
          placeholder="Input your password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" backgroundColor="white" />}
          style={{backgroundColor: 'transparent'}}></TextInput>
      </View>
      <Text
        style={styles.rightPosition}
        onPress={() => Alert.alert('new page')}>
        Forgot Password?
      </Text>

      <Button style={styles.fix} mode="contained">
        Login
      </Button>

      <Text style={styles.centerPostion}>Or login with</Text>

      <View style={styles.logo}>
        <AntDesign
          style={styles.right}
          name="facebook-square"
          size={50}
          color="blue"></AntDesign>
        <AntDesign style={styles.right} name="github" size={50}></AntDesign>
        <AntDesign name="google" size={50} color="red"></AntDesign>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: 'white',
    // padding: 8,
  },
  white: {
    backgroundColor: 'white',
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 10,
  },
  image_position: {
    marginTop: 40,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerPostion: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  rightPosition: {
    marginTop: 5,
    textAlign: 'right',
  },
  fix: {
    marginTop: 50,
    marginBottom: 20,
  },
  right: {
    marginRight: 20,
  },
});
export default App;
