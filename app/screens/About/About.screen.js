import React from 'react';
import { View, Text } from 'react-native';
import { PostProvider } from '../../contexts/PostContext';
import List from '../../components/List/List.component';
class AboutScreen extends React.Component {
  render() {
    return (
      <PostProvider> 
        <List></List>        
      </PostProvider>
    );
  }
}

export default AboutScreen;
