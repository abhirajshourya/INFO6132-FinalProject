import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, YStack, H1 } from 'tamagui'

const Index = () => {
    return (
        <ScrollView backgroundColor={'$background'}>
            <SafeAreaView />
            <YStack padding={20}>
                <H1>Movies</H1>
            </YStack>
        </ScrollView>
    )
}

export default Index
