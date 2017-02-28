import React, { Component } from 'react'
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin'

import { Actions } from 'react-native-router-flux'

class Login extends Component {
  componentDidMount () {
    this._setupGoogleSignin()
  }

  async _setupGoogleSignin () {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true })
      await GoogleSignin.configure({
        webClientId: '538482594746-0jnfj6004h2dugd85bghhs0c0a857hr4.apps.googleusercontent.com',
        offlineAccess: true
      })

      const user = await GoogleSignin.currentUserAsync()
      console.log(user)
      if (user) Actions.map()
    } catch (err) {
      console.log('Play services error', err.code, err.message)
    }
  }

  _signIn () {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user)
      Actions.map()
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err)
    })
    .done()
  }

  render () {
    return (
    <GoogleSigninButton
      style={{width: 48, height: 48}}
      size={GoogleSigninButton.Size.Icon}
      color={GoogleSigninButton.Color.Dark}
      onPress={() => { this._signIn() }}/>
    )
  }
}

// const mapStateToProps = (state) => {
//   return true;
// }

export default Login
