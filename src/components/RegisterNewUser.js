import React, { Component } from 'react';
import 'whatwg-fetch';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


class RegisterNewUser extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { email: '', userName: '', userID: '' };
  }

  handleSubmit() {
    fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.props.user.userID,
        user_name: this.state.userName,
        first_name: this.props.user.givenName,
        last_name: this.props.user.familyName,
        email: this.props.user.email,
      }),
    })
    .then(response => response.json())
    .then((responseJson) => {
      Actions.map();
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
};

const mapStateToProps = state => ({
  user: state.AuthenticatedUser,
});

export default connect(mapStateToProps, {})(RegisterNewUser);
