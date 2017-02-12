import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

class PostTagForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Tag' };
  }

    render() {
        return (
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />
        );
    }
}

export default PostTagForm;