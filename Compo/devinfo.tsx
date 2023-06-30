import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import dInfo from './Devloperinfo'

export default function DevInfo() {
    return (
        <View style={styles4.mainView}>
            <ImageBackground source={require('../ImageAsset/blackbg.jpg')}>
            {dInfo.map(({ uid, name, dec, imagedev }) => (
                <View key={uid} style={styles4.card}>
                    <Image source={imagedev} style={styles4.imageprop} />
                    <View >
                        <Text style={styles4.textinfo}>{dec}</Text>
                        <Text style={styles4.textinfo}>{name}</Text>
                    </View>
                </View>
            ))}
            </ImageBackground>
        </View>
    )
}

const styles4 = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingTop: 10,
    },
    imageprop: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight: 20,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    textinfo: {
        color: 'white'
    },

})