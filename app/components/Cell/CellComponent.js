import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default class Cell extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: this.props.item.thumbnailUrl }}
          />
        </View>
        <View>
          <Text>{this.props.item.title}</Text>
          <Text>{this.props.item.id}</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    fontSize: 18,
    height: 120,
    flexDirection: 'row'
  },
  image: {
    width: 100, 
    height: 100,
    borderRadius: 50
  }
})

