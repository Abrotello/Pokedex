import 'react-native-gesture-handler';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { Stacknavigator } from './presentation/navigator/StackNavigator';

export const PokedexApp = () => {
    return (
    <NavigationContainer>
        <Stacknavigator />
    </NavigationContainer>
    )
}