import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Alert, Image, Linking, ScrollView, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import imagetest from './imagetes'
let check
let Password1;

export default function ImageCheck() {
    const [state, setState] = useState(image5);
    const [check, setcheck] = useState(false);
    const [Password1, setPassword1] = useState("");
    let imagechange = "";
    return (
        <View>
            <Text style={styles2.textProp}>Bellow is Dev only function please enter password</Text>
            <TextInput
                style={styles2.input}
                secureTextEntry={true}
                placeholder='Password'
                onChangeText={(numeric) => setPassword1(numeric)}
            />
            <Button title='unhide' onPress={passCheck}></Button>
            <Button title='hide' onPress={hidden}></Button>
            <View style={check ? styles2.mainView1 : styles2.mainView2}>
                <ScrollView horizontal={true}>
                    <View style={styles2.cardOne}>
                        <TouchableOpacity onPress={() => ChnageImage(imagetest.imagedown1)}>
                            <ImageBackground source={imagetest.imagedown1} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', }}>
                                <Text>Priya</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles2.cardOne}>
                        <TouchableOpacity onPress={() => ChnageImage(imagetest.imagedown2)}>
                            <ImageBackground source={imagetest.imagedown2} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', }}>
                                <Text>Priya</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles2.cardOne}>
                        <TouchableOpacity onPress={() => ChnageImage(imagetest.imagedown3)}>
                            <ImageBackground source={imagetest.imagedown3} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', }}>
                                <Text>Rakhi</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles2.cardOne}>
                        <TouchableOpacity onPress={() => ChnageImage(imagetest.imagedown4)}>
                            <ImageBackground source={imagetest.imagedown4} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', }}>
                                <Text>Hema</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles2.cardOne}>
                        <TouchableOpacity onPress={() => ChnageImage(imagetest.imagedown5)}>
                            <ImageBackground source={imagetest.imagedown5} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', }}>
                                <Text>Hema</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles2.cardOne}>
                        <TouchableOpacity onPress={() => ChnageImage(imagetest.imagedown6)}>
                            <ImageBackground source={imagetest.imagedown6} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', }}>
                                <Text>Hema</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles2.cardOne}>
                        <TouchableOpacity onPress={() => ChnageImage(imagetest.imagedown7)}>
                            <ImageBackground source={imagetest.imagedown7} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', }}>
                                <Text>Hema</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles2.cardOne}>
                        <TouchableOpacity onPress={() => ChnageImage(imagetest.imagedown8)}>
                            <ImageBackground source={imagetest.imagedown8} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', }}>
                                <Text>Hema</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles2.cardOne}>
                        <TouchableOpacity onPress={() => ChnageImage(imagetest.imagedown9)}>
                            <ImageBackground source={imagetest.imagedown9} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', }}>
                                <Text>Hema</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles2.cardOne}>
                        <TouchableOpacity onPress={() => ChnageImage(imagetest.imagedown10)}>
                            <ImageBackground source={imagetest.imagedown10} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', }}>
                                <Text>Hema</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles2.mainImg}>
                    <Image
                        source={state}
                        resizeMode='cover'
                        style={{ height: 600, width: '100%' }}
                    />
                </View>
            </View>

        </View>
    )
    function showAlert() {
        Alert.alert('Just to check');
    }

    function ChnageImage(imagechange: React.SetStateAction<{ uri: string; }>) {
        setState(imagechange);
    }

    function passCheck() {
        const pwd = '12345';
        if (Password1 === pwd) {
          setcheck(true)
        } else {
          setcheck(false)
        }
      }

    function hidden() {
        setcheck(false)
    }

}

let dsp = 'none';

// const [dsp , setDsp] = useState("none");
const styles2 = StyleSheet.create({
    textProp: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    mainView1: {
        display: 'flex'
    },
    mainView2: {
        display: 'none'
    },
    cards: {
        flex: 1,
        flexDirection: 'row',
    },

    cardOne: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        color: 'red',
        borderWidth: 4,
        borderColor: 'black',
        margin: 10
      },
    cardTwo: {},
    cardThree: {},
    cardFour: {},
    mainImg: {},

})

const image5 = { uri: 'https://legacy.reactjs.org/logo-og.png' };
// useEffect(() => {
    //   passCheckk(() => {
    //     if (Password1 == '12345') {
    //       setcheck(true)
    //     }
    //     else {
    //       setcheck(false)
    //     }
    //   } );
    // }, []);