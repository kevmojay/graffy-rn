import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


class RegisterNewUser extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log(this.props.user.name);
    Actions.map();
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

    const { handleSubmit } = this.props;

    return (
      <View>
        <Text>User Name:</Text>
        <TextInput
          style={{ borderWidth: 1, height: 40 }}
          onChangeText={text => this.setState({ text })}
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
