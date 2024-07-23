import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H1, ScrollView, Text, View, YStack } from 'tamagui';

const Index = () => {
    return (
        <ScrollView backgroundColor={'$background'}>
            <SafeAreaView />
            <YStack padding={20}>
                <H1>Series</H1>
            </YStack>
        </ScrollView>
    );
}

export default Index;
