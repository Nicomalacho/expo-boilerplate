import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Button
} from "react-native";
import { AuthConsumer } from "../../contexts/AuthContext";

class LoginScreen extends React.Component {
  state = {
    username: '',
    password: '',
    error: null
  };
  render() {
    return (
      <AuthConsumer>
        {({ login }) => (
          <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.loginScreenContainer}>
                <View style={styles.loginFormView}>
                  <TextInput
                    placeholder="Username"
                    placeholderColor="#c4c3cb"
                    style={styles.loginFormTextInput}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                  />
                  <TextInput
                    placeholder="Password"
                    placeholderColor="#c4c3cb"
                    style={styles.loginFormTextInput}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry={true}
                  />
                  <Button
                    buttonStyle={styles.loginButton}
                    onPress={() => this.onLoginPress(login)}
                    title="Login"
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        )}
      </AuthConsumer>
    );
  }
  onLoginPress = async (login) => {
    const { username, password } = this.state;
    login(username, password)
      .then((data) => {
        this.props.navigation.navigate('App')
      })
      .catch((error) => {
        this.setState({ error })
      })
  };
}


const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoImage: {
    width: 205,
    height: 165,
    alignSelf: "center",
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    // marginTop: 100,
    marginBottom: 30,
    textAlign: "center"
  },
  loginFormView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: "transparent"
  }
});

export default LoginScreen;
