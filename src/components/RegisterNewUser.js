import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';


class RegisterNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Test' };
  }

  render() {
    const gray = 'gray';
    console.log(this);
    const styles = StyleSheet.create({
      textInput: {
        height: 40,
        borderColor: gray,
        borderWidth: 1,
      },
    });

    const { handleSubmit } = this.props;

    return (
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

RegisterNewUser = reduxForm({
  form: 'register',
})(RegisterNewUser);

export default RegisterNewUser;
