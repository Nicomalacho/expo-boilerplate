import React, { Component } from "react";

const TestContext = React.createContext();

class TestProvider extends Component {
  state = {
    name: 'Nicolas',
    age: 100,
    cool: true,
    post: {}
  }
  render() {
    return (
      <TestContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        }),
        fetchApi: this.testFetchApi
      }}>
        {this.props.children}
      </TestContext.Provider>
    )
  }
  testFetchApi = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const responseJson = await response.json();
      this.setState({
        post: responseJson
      });
    }catch(e) {
      throw e;
    }
  }
}

const TestConsumer = TestContext.Consumer;

export { TestProvider, TestConsumer, TestContext };