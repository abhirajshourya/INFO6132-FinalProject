import { NavigationHeaderStyle } from '@/constants/Styles'
import { Stack } from 'expo-router'
import { useTheme } from 'tamagui'

export default function StackLayout() {
    const theme = useTheme()
    return (
        <>
            <Stack screenOptions={NavigationHeaderStyle(theme)}>
                <Stack.Screen
                    name="index"
                    options={{
                        title: 'Series',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="detail"
                    options={{
                        title: 'Detail',
                    }}
                />
            </Stack>
        </>
    )
}
