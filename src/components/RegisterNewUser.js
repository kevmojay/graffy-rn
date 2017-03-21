import React, { Component } from 'react';
import 'whatwg-fetch';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { updateAuthenticatedUser } from '../actions';


class RegisterNewUser extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { email: '', userName: '', userID: '', givenName: '', familyName: '' };
  }

  handleSubmit() {
    const { userID, givenName, familyName, email } = this.props.user;
    const { userName } = this.state;

    fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userID,
        user_name: userName,
        first_name: givenName,
        last_name: familyName,
        email,
      }),
    })
    .then(response => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson.status === 'success') {
        this.props.updateAuthenticatedUser(userName);
        Actions.map();
      } else {
        console.log('write better code here. Username already exists');
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const gray = 'gray';
    const styles = StyleSheet.create({
      textInput: {
        height: 40,
        borderColor: gray,
        borderWidth: 1,
      },
    });

    return (
      <View>
        <Text>User Name:</Text>
        <TextInput
          style={{ borderWidth: 1, height: 40 }}
          value={this.state.userName}
          onChangeText={userName => this.setState({ userName })}
        />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

RegisterNewUser.propTypes = {
  user: React.PropTypes.object.isRequired,
  updateAuthenticatedUser: React.PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.AuthenticatedUser,
});

export default connect(mapStateToProps, { updateAuthenticatedUser })(RegisterNewUser);
