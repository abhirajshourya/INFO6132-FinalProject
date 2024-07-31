import { NavigationHeaderStyle } from '@/constants/Styles'
import { Stack } from 'expo-router'
import { useTheme } from 'tamagui'

export default function StackLayout() {
    const theme = useTheme()
    Stack.defaultProps = {
        screenOptions: {
            headerShown: false,
        },
    }
    return (
        <>
            <Stack screenOptions={NavigationHeaderStyle(theme)}>
                <Stack.Screen
                    name="login"
                    options={{
                        title: 'Login',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="signup"
                    options={{
                        title: 'Signup',
                        headerShown: false,
                    }}
                />
            </Stack>
        </>
    )
}
