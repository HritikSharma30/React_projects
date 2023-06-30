import {
    SafeAreaView,
    ScrollView,
} from 'react-native'
import React from 'react'
import FlatCard from './Compo/FlatCard'
import ElevatedCard from './Compo/ElevatedCard'
import FancyCard from './Compo/FancyCard'
import ActionCard from './Compo/ActionCard'
import ImageCheck from './Compo/ImageCheck'
import DevInfo from './Compo/devinfo'

const App = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCard/>
                <ElevatedCard/>
                <FancyCard/>
                <ActionCard/>
                <DevInfo/>
                <ImageCheck/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default App