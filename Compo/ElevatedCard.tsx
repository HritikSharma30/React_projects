import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Linking, Image } from 'react-native'
import hotPlace from './hotPlace'

export default function ElevatedCard() {
    return (
        <View>
            <Text style={styles1.textProp}>Hot places to visit</Text>
            <ScrollView horizontal={true} style={styles1.container}>

                {hotPlace.map(({ uid, imgurl, name, mapLink }) => (
                    <View key={uid} style={[styles1.card1, styles1.cardEle]}>
                        <Image source={{uri: imgurl}}
                            style={styles1.imagehead}
                        />
                        <TouchableOpacity onPress={() => openWeb(mapLink)}>
                            <Text style={styles1.textHead}>{name}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    )

    function openWeb(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
}

const styles1 = StyleSheet.create({
    textProp: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f7c8d3',
        paddingHorizontal: 20,
    },
    container: {
        flex: 1,
        padding: 10,
    },
    card1: {
        flex: 1,
        margin: 4,
        borderRadius: 4,
        height: 100,
        width: 100,
    },
    cardEle: {
        elevation: 4,
        shadowColor: 'red',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: { width: 1, height: 1, },
    },

    imagehead: {
        height: 90,
    },

    textHead: {
        color: 'white',
        fontSize: 9,
        fontWeight: 'bold',
        backgroundColor: '#000000c0',
        textAlign: 'center'
    },

})

