import React from "react"
import { Pressable, Text, View } from "react-native"
import { NavigationConstants } from "../navigator/NavigationConstants"

const LoginScreen = ({ navigation }) => {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24 }}>{"LOGIN SCREEN"}</Text>
        <Pressable onPress={() => navigation.navigate(NavigationConstants.registrationScreen)}>
            <Text style={{ fontSize: 24 }}>{"GO TO REGISTRATION SCREEN"}</Text>
        </Pressable>
    </View>
}

export default LoginScreen