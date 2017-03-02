import React, { Component } from 'react';
import GoogleSignIn from 'react-native-google-sign-in';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  SignInButton: {
    width: 48,
    height: 48,
  },
});

class Login extends Component {
  static signIn() {
    console.log('signin pressed');
    GoogleSignIn.signInPromise()
    .then((user) => {
      console.log(user);
      Actions.map();
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  static async setupGoogleSignin() {
    console.log('signin mounted');
    await GoogleSignIn.configure({
      // iOS
      // clientID: 'yourClientID',

      // iOS, Android
      // https://developers.google.com/identity/protocols/googlescopes
      scopes: ['openid', 'email', 'profile'],

      // iOS, Android
      // Whether to request email and basic profile.
      // [Default: true]
      // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a06bf16b507496b126d25ea909d366ba4
      shouldFetchBasicProfile: true,
    });
  }

  componentDidMount() {
    this.constructor.setupGoogleSignin();
  }

  render() {
    return (
      <TouchableHighlight onPress={this.constructor.signIn()}>
        <Text>
            Google Sign-In
          </Text>
      </TouchableHighlight>
    );
  }
}
// const mapStateToProps = (state) => {
//   return true;
// }

export default Login;
