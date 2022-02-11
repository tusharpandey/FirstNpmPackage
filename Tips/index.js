import React from "react"
import { Pressable, Text, View } from "react-native"
import { NavigationConstants } from "../navigator/NavigationConstants"

const TipsScreen = ({ navigation }) => {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24 }}>{"TIPS SCREEN"}</Text>
        <Pressable onPress={() => navigation.navigate(NavigationConstants.loginScreen)}>
            <Text style={{ fontSize: 24 }}>{"GO TO LOGIN SCREEN"}</Text>
        </Pressable>
    </View>
}

export default TipsScreen