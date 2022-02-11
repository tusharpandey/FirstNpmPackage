import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../login';
import RegistrationScreen from '../registration';
import TipsScreen from '../Tips';
import { FlowType } from '..';
import { NavigationConstants } from './NavigationConstants';

const Stack = createNativeStackNavigator();

function BharatPayUserFlow() {
    return (
        <Stack.Navigator initialRouteName={NavigationConstants.loginScreen} >
            <Stack.Screen name={NavigationConstants.loginScreen} component={LoginScreen} />
            <Stack.Screen name={NavigationConstants.registrationScreen} component={RegistrationScreen} />
        </Stack.Navigator>
    );
}

function AmericanExpressUserFlow() {
    return (
        <Stack.Navigator initialRouteName={NavigationConstants.tipsScreen}>
            <Stack.Screen name={NavigationConstants.tipsScreen} component={TipsScreen} />
            <Stack.Screen name={NavigationConstants.loginScreen} component={LoginScreen} />
            <Stack.Screen name={NavigationConstants.registrationScreen} component={RegistrationScreen} />
        </Stack.Navigator>
    );
}

function UserFlowNavigator({ flowType }) {

    switch (flowType) {
        case FlowType.BHARAT_PAY:
            return BharatPayUserFlow()
        case FlowType.AMERICAN_EXPRESS:
            return AmericanExpressUserFlow()
    }
}

export default UserFlowNavigator