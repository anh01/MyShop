import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const banner = require('../../../../media/temp/banner.jpg');

export default class Shop extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>SPRING COLLECTION</Text>
        </View>
        <View style={styles.body}>
          <Image source={banner} style={styles.image} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: width - 20,
    margin: 10,
    padding: 10,
    paddingTop: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#292929',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3
  },
  body: {
    alignItems: 'center'
  },
  image: {
    width: width - 40,
    height: height / 4
  },
  title: {
    marginVertical: 15,
    color: '#A7A7A7',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  }     

});
