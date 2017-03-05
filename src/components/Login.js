import React, { Component } from 'react';
import GoogleSignIn from 'react-native-google-sign-in';
import { TouchableHighlight, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { setAuthenticatedUser } from '../actions';


// const styles = StyleSheet.create({
//   SignInButton: {
//     width: 48,
//     height: 48,
//   },
// });

class Login extends Component {
  static async setupGoogleSignin() {
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

  constructor() {
    super();
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    this.constructor.setupGoogleSignin();
  }

  signIn() {
    GoogleSignIn.signInPromise()
    .then((user) => {
      this.props.setAuthenticatedUser(user);
      Actions.register();
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  render() {
    return (
      <TouchableHighlight onPress={this.signIn}>
        <Text>
          Google Sign-In
        </Text>
      </TouchableHighlight>
    );
  }
}

Login.propTypes = {
  // setAuthenticatedUser: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authenticatedUser: state.authenticatedUser,
});

export default connect(mapStateToProps, { setAuthenticatedUser })(Login);
