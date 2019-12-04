import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TestConsumer, TestContext } from '../../contexts/TestContext';

export default class Profile extends React.Component {
  componentDidMount() {
    let value = this.context;
    value.fetchApi();
  }
  render() {      
    return (
      <TestConsumer>
        {(context) => (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{context.state.name}</Text>
            <Text>{context.state.age}</Text>
            <Text>Post id: {context.state.post.id}</Text>
            <Button
              buttonStyle={styles.loginButton}
              onPress={context.growAYearOlder}
              title="Increase Age"
            />
            
          </View>
        )}
      </TestConsumer>
    )
  }
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10
  },
})

Profile.contextType = TestContext