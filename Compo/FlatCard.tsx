import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import allBackgroundImage from './Imagesapp'

export default function FlatCard() {
    return (
        <View>
            <Text style={styles.textProp}>TRAVEL SUGGESTION</Text>
            <View style={styles.container}>
                <View style={styles.card}>
                    <TouchableOpacity>
                        <ImageBackground source={allBackgroundImage.mainHead.delhiBackground} resizeMode='cover' style={styles.backimage}>
                            <Text style={styles.texthead}>DELHI</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity onPress={stateAlert}>
                        <ImageBackground source={allBackgroundImage.mainHead.uttarakhandBackground} resizeMode='cover' style={styles.backimage}>
                            <Text style={styles.texthead}>UTTARAKHAND</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity onPress={stateAlert}>
                        <ImageBackground source={allBackgroundImage.mainHead.assamBackground} resizeMode='cover' style={styles.backimage}>
                            <Text style={styles.texthead}>ASSAM</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
    function stateAlert() {
        Alert.alert('State travel guide is yet to come');
    }
}


const styles = StyleSheet.create({

    textProp: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#f7c8d3'

    },

    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'space-around',
        alignContent: 'space-between'
    },

    card: {
        flex: 1,
        width: 70,
        height: 100,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    backimage: {
        flex: 1,
        justifyContent: 'center',
        height: 100,
        width: 70,
    },

    texthead: {
        color: 'white',
        fontSize: 9,
        // lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    }

})