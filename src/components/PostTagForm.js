import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class PostTagForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Tag' };
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
        value={this.state.text}
      />
    );
  }
}

export default PostTagForm;
