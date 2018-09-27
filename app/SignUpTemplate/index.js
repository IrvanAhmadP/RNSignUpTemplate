import React, {Component} from 'react';
import {
  View, ScrollView, Text, TextInput, CheckBox, TouchableOpacity, StyleSheet
} from 'react-native';

export default class App extends Component{

  state = {
    hiddenPassword : true,
    statusTos: false,
    valPassword: ''
  }

  setHiddenPassword(){
    this.setState({
      hiddenPassword: !this.state.hiddenPassword
    });
  }

  setStatusTos(){
    if(this.state.statusTos){
      this.setState({
        statusTos: false
      });
    }else{
      this.setState({
        statusTos: true
      });
    }
  }

  render(){
    const iconHiddenPasswordTrue = 
      <Text 
        style={[styles.fontAwesomeSolid, styles.iconEye]}
        onPress={()=> {this.setHiddenPassword()}}>
          &#xf070;
      </Text>;
    const iconHiddenPasswordFalse =
      <Text 
        style={[styles.fontAwesomeSolid, styles.iconEye]}
        onPress={()=> {this.setHiddenPassword()}}>
          &#xf06e;
      </Text>;
    return (
      <View style={styles.appWrap}>
        <View style={styles.headerWrap}>
          <Text style={[styles.iconHeader, styles.fontAwesomeSolid]}>
            &#xf234;&nbsp;
          </Text>
          <Text style={[styles.textHeader, styles.textBold]}>
            Sign up
          </Text>
        </View>
        <Text style={[styles.colorPrimary, styles.textWrap, styles.textBold, styles.textNormal]}>
          Sign up with your social media...
        </Text>
        <View style={styles.SocialMediaIconWrap}>
          <Text style={[styles.SocialMediaIcon, styles.FacebookIconColor]}>
            &#xf082;
          </Text>
          <Text style={[styles.SocialMediaIcon, styles.GooglePlusIconColor]}>
            &#xf0d4;
          </Text>
          <Text style={[styles.SocialMediaIcon, styles.TwitterIconColor]}>
            &#xf081;
          </Text>
        </View>
        <Text style={[styles.colorPrimary, styles.textWrap, styles.textBold, styles.textNormal]}>
          ...or sign up manually
        </Text>
        <View style={styles.labelWrap}>
          <Text style={[styles.iconLabel, styles.colorBlack, styles.fontAwesomeSolid]}>
            &#xf007;
          </Text>
          <Text style={[styles.label, styles.textBold, styles.colorBlack]}>
            USERNAME
          </Text>
        </View>
        <TextInput 
          style={styles.input}
          underlineColorAndroid='transparent'/>
        <View style={styles.labelWrap}>
          <Text style={[styles.iconLabel, styles.colorBlack, styles.fontAwesomeSolid]}>
            &#xf0e0;
          </Text>
          <Text style={[styles.label, styles.textBold, styles.colorBlack]}>
            EMAIL
          </Text>
        </View>
        <TextInput 
          style={styles.input}
          underlineColorAndroid='transparent'/>
        <View style={styles.labelWrap}>
          <Text style={[styles.iconLabel, styles.colorBlack, styles.fontAwesomeSolid]}>
            &#xf13e;
          </Text>
          <Text style={[styles.label, styles.textBold, styles.colorBlack]}>
          PASSWORD
          </Text>
        </View>
        <View style={styles.inputPasswordWrap}>
          <TextInput
            style={[
              styles.input,
              styles.inputPassword
            ]}
            underlineColorAndroid='transparent'
            secureTextEntry={this.state.hiddenPassword}/>
          {this.state.hiddenPassword ? iconHiddenPasswordTrue : iconHiddenPasswordFalse }
        </View>
        <View style={styles.TosWrap}>
          <CheckBox 
            style={styles.CheckBoxTos}
            value={this.state.statusTos}
            onChange={()=> {this.setStatusTos()}}
          />
          <Text style={[styles.textNormal, styles.colorBlack]}>
            I agree to
          </Text>
          <Text style={[styles.textNormal, styles.colorBlack, styles.textBold]}>
            &nbsp;Term & Conditions
          </Text>
        </View>
        <View style={styles.btnSignUpWrap}>
          <TouchableOpacity style={styles.btnSignUp}>
            <Text style={styles.btnSignUpText}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fontAwesomeSolid:{
    fontFamily: 'font-awesome-solid'
  },
  fontAwesomeRegular:{
    fontFamily: 'font-awesome-regular'
  },
  textNormal:{
    fontSize: 16
  },
  colorPrimary:{
    color: '#458bff'
  },
  colorBlack:{
    color: '#000'
  },
  textBold: {
    fontWeight: 'bold'
  },
  textWrap: {
    marginTop:15,
    marginBottom: 15
  },
  appWrap: {
    padding : 25,
    backgroundColor: '#fff',
    flex: 1
  },
  headerWrap:{
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row'
  },
  iconHeader: {
    fontSize: 45,
    color: '#000'
  },
  textHeader: {
    fontSize: 35,
    color   : '#000'
  },
  SocialMediaIconWrap:{
    flexDirection: 'row'
  },
  SocialMediaIcon: {
    fontFamily: 'font-awesome-brand',
    fontSize: 95,
    marginRight: 25
  },
  FacebookIconColor:{
    color: '#0054ff'
  },
  GooglePlusIconColor:{
    color: '#ff4169'
  },
  TwitterIconColor:{
    color: '#2ebcfe'
  },
  labelWrap:{
    marginTop:15,
    marginBottom: 15,
    flexDirection: 'row'
  },
  iconLabel:{
    marginRight:10,
    fontSize: 21
  },
  label:{
    fontSize: 18
  },
  input:{
    backgroundColor: '#ebebeb',
    marginTop:3,
    marginBottom:3,
    fontSize:18
  },
  inputPasswordWrap:{
    flexDirection: 'row'
  },
  inputPassword:{
    width: '100%',
    paddingRight: 55
  },
  inputPasswordShow:{
    fontSize:18
  },
  inputPasswordHidden:{
    fontSize:21
  },
  iconEye:{
    position: 'absolute',
    right:7,
    top: 9,
    fontSize: 30
  },
  TosWrap:{
    marginTop: 20,
    flexDirection: 'row'
  },
  CheckBoxTos:{
    marginTop:-5
  },
  btnSignUpWrap:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right:0,
    backgroundColor: '#458bff',
    paddingTop: 15,
    paddingBottom: 25
  },
  btnSignUp:{
  },
  btnSignUpText:{
    fontSize: 30,
    color: '#fff',
    textAlign: 'center'
  }
});