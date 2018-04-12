import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Sales"
          onPress={() => this.props.navigation.navigate('Sales')}
        />
        <Button
          title="Go to Expenses"
          onPress={() => this.props.navigation.navigate('Expenses')}
        />
      </View>
    );
  }
}

class SalesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sales Screen</Text>
      </View>
    );
  }
}

class ExpensesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Expenses Screen</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Sales: {
      screen: SalesScreen,
    },
    Expenses: {
      screen: ExpensesScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}