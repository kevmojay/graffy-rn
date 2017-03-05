import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class RegisterNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Test' };
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
      <TextInput
        style={styles.textInput}
        onChangeText={text => this.setState({ text })}
      />
    );
  }
}

export default RegisterNewUser;
