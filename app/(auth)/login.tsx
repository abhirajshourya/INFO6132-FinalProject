import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    View,
    Text,
    ScrollView,
    YStack,
    H1,
    Form,
    Input,
    YGroup,
    Label,
    XStack,
    Button,
} from 'tamagui'

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({
        email: '',
        password: '',
    })
    return (
        <ScrollView backgroundColor={'$background'}>
            <SafeAreaView />
            <YStack padding={20} gap={20}>
                <H1>Login</H1>
                <Form gap={20}>
                    <YGroup>
                        <YStack>
                            <XStack
                                gap={5}
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Label>Email</Label>
                                {error.email && (
                                    <Text color="red">{error.email}</Text>
                                )}
                            </XStack>
                            <Input
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                placeholder="Enter your email"
                            />
                        </YStack>
                        <YStack>
                            <XStack
                                gap={5}
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Label>Password</Label>
                                {error.password && (
                                    <Text color="red">{error.password}</Text>
                                )}
                            </XStack>
                            <Input
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={true}
                                keyboardType="visible-password"
                                placeholder="Enter your password"
                            />
                        </YStack>
                    </YGroup>
                    <YStack gap={10}>
                        <Button icon={<AntDesign name="login" size={20} />}>
                            Login
                        </Button>
                        <Button
                            iconAfter={<AntDesign name="adduser" size={20} />}
                            variant="outlined"
                            chromeless
                            onPress={() => router.replace('/signup')}
                        >
                            Don't have an account? Signup
                        </Button>
                    </YStack>
                </Form>
            </YStack>
        </ScrollView>
    )
}

export default Login
