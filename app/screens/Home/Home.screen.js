import React from 'react';
import { TestProvider } from '../../contexts/TestContext';
import Profile from '../../components/Profile/Profile.component';

class HomeScreen extends React.Component {
  render() {
    return (
      <TestProvider>
        <Profile></Profile>
      </TestProvider>
    );
  }
}

export default HomeScreen;
