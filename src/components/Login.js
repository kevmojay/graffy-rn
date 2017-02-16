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
        webClientId: '704773601562-1s2setonrgka0lqigio0pid4bi9jlshv.apps.googleusercontent.com',
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

export default Login
