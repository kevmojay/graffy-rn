import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
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
    return (
      <View>
        <Text>User Name:</Text>
        <TextInput
          onChangeText={text => this.setState({ text })}
        />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
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
