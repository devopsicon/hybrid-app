import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text ,FlatList, ActivityIndicator} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";

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
          onPress={() => this.props.navigation.navigate('Sales')}
        />
      </View>
    );
  }
}
  



class SalesScreen extends React.Component  {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://raw.githubusercontent.com/yuya373/spark-tutorial/master/src/main/resources/sales.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){


    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(

    

      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.customerId}, {item.amountPaid},{item.transactionId}</Text>}
          keyExtractor={(item, index) => index}
        />
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