import React, { Component } from 'react';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  SignInButton: {
    width: 48,
    height: 48,
  },
});

class Login extends Component {
  static signIn() {
    GoogleSignin.signIn()
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
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: '538482594746-0jnfj6004h2dugd85bghhs0c0a857hr4.apps.googleusercontent.com',
        offlineAccess: true,
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      if (user) Actions.map();
    } catch (err) {
      console.log('Play services error', err.code, err.message);
    }
  }

  componentDidMount() {
    this.constructor.setupGoogleSignin();
  }

  render() {
    return (
      <GoogleSigninButton
        style={styles.SignInButton}
        size={GoogleSigninButton.Size.Icon}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => { this.signIn(); }}
      />
    );
  }
}
// const mapStateToProps = (state) => {
//   return true;
// }

export default Login;
