import React from 'react';
import AppNavigator from './app/routes';
import { AuthProvider } from './app/contexts/AuthContext';

export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    );
  }
}
