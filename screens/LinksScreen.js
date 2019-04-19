import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import axios from 'axios';

class LinksScreen extends Component {
    state = {
        data: ''
    }
    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <View>
                <Text>
                    {this.state.data.body}
                </Text>
            </View>
        )
    }
}

export default LinksScreen
/*axios.get('https://my-json-server.typicode.com/typicode/demo/db')
    .then(function (response) {
      // handle success
      console.log(JSON.stringify(response));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {}
        <ExpoLinksView />
        <Text>
          {this.response}{'\n'}{'\n'}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
*/