import react from "react";

import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native'

function AppPro() {
    <View style={stmlyes.conta}>
        <ImageBackground source={imagee} style={stmlyes.imageS} resizeMode="cover">
            <Text style={stmlyes.textS}>Inside</Text>
        </ImageBackground>
    </View>
}

const imagee = { uri: 'Multi_Millionaire.jpg' };

const stmlyes = StyleSheet.create({
    conta: {
        flex: 1
    },
    imageS: {
        flex: 1,
        justifyContent: 'center'
    },
    textS: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
})

export default AppPro