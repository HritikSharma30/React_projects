import { StyleSheet, Text, View, Linking, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default function ActionCard() {
  return (
    <View>
      <Text style={styles2.textProp}>Application creation</Text>
      <View style={[styles2.card, styles2.cardEle]}>
        <View>
          <ImageBackground resizeMode='cover' source={require('../ImageAsset/react-native.png')}
            style={styles2.imageStyle}>
              <Text style={styles2.textinfo}>Project created with the help of React Native. The poject you just saw is very simple project with the intent to increas my css skills and in this project java property which are used are - APi calling, useState, useEffect, Linking, touch and button on press, and my favorite hide/unhide function </Text>
          </ImageBackground>
          
          <TouchableOpacity onPress={() => openWeb('https://reactnative.dev/')}>
            <Text>Read more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
  function openWeb(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
}

const styles2 = StyleSheet.create({
  textProp: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: '#f7c8d3'
  },
  card: {
    marginLeft: 4,
    marginRight: 4,
    borderColor: 'black'
  },
  cardEle: {},
  imageStyle: {
    flex: 1,
    height: 350,
    width: '100%',
    borderColor: 'black',
    justifyContent: 'center',
  },
  textinfo: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },

})