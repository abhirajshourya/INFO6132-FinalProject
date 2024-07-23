import { SafeAreaView } from 'react-native-safe-area-context'
import { H1, ScrollView, YStack } from 'tamagui'

export default function FavoritesScreen() {
    return (
        <ScrollView backgroundColor={'$background'}>
            <SafeAreaView />
            <YStack padding={20}>
                <H1>Favorites</H1>
            </YStack>
        </ScrollView>
    )
}
