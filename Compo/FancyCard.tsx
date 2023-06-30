import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles2.textProp}>Trending Places</Text>
            <View style={[styles2.card, styles2.cardEle]}>
                <Image
                    source={{uri: 'https://thefederal.com/file/2023/01/iStock-1369987507.jpg',
                }}
                    style={styles2.imageStyle}
                />
                <View style={styles2.cardBody}>
                    <Text style={styles2.cardTitle}> Red Fort</Text>
                    <Text numberOfLines={2} style={styles2.cardDec}> The Red Fort or Lal Qila Hindustani is a historic fort in the Old Delhi neighbourhood of Delhi, India, that historically served as the main residence of the Mughal emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12th May 1638, when he decided to shift his capital from Agra to Delhi. Originally red and white, its design is credited to architect Ustad Ahmad Lahori, who also constructed the Taj Mahal. The fort represents the peak in Mughal architecture under Shah Jahan and combines Persianate palace architecture with Indian traditions.</Text>
                    <Text style={styles2.cardFoot}> Its not far when you need It</Text>
                </View>
            </View>
        </View>

    )
}

const styles2 = StyleSheet.create({
    textProp: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        color: '#f7c8d3'
    },

    card: {
        heigt: 360,
        borderRadius: 4,
        marginVertical: 5,
        marginLeft: 9,
        marginRight: 9,
    },

    cardEle: {
        backgroundColor: '#FFFFFF',
        elevation: 5,
        shadowOffset: {width: 1, height:1}
    },

    imageStyle: {
        height: 200,
        marginBottom: 7,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 5,
    },

    cardTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
    },

    cardDec: {
        fontSize: 15,
        marginBottom: 10,
        color: '#000000',
        
    },

    cardFoot: {
        color: '#000000',
        fontSize: 10,
    },
})