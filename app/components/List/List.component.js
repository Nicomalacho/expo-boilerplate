import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { PostConsumer, PostContext } from '../../contexts/PostContext';
import Cell from '../Cell/CellComponent';
export default class List extends React.Component {
  componentDidMount() {
    let value = this.context;
    value.fetchApi();
  };
  render() {
    let value = this.context;

    if (!value) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <PostConsumer>
        {(context) => (
          <View style={styles.container}>
            <FlatList
              data={context.state.posts}
              renderItem={({ item }) => <Cell item={item}></Cell>}
              keyExtractor={(item, index) => `${item.id}`}
            />
          </View>
        )}
      </PostConsumer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 22,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})

List.contextType = PostContext;