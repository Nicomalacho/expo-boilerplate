import React, { Component } from "react";

const PostContext = React.createContext();

class PostProvider extends Component {
  state = {    
    posts: []
  }
  render() {
    return (
      <PostContext.Provider value={{
        state: this.state,
        fetchApi: this.testFetchApi
      }}>
        {this.props.children}
      </PostContext.Provider>
    )
  }
  testFetchApi = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos')
      const responseJson = await response.json();
      this.setState({
        posts: responseJson
      });
    }catch(e) {
      throw e;
    }
  }
}

const PostConsumer = PostContext.Consumer;

export { PostProvider, PostConsumer, PostContext };