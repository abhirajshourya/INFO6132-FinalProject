import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
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
import { auth } from '@/database/config'

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({
        email: '',
        password: '',
    })

    const handleLogin = async () => {
        setError({ email: '', password: '' })
        if (!email) {
            setError({ ...error, email: 'Email is required' })
            return
        }
        if (!password) {
            setError({ ...error, password: 'Password is required' })
            return
        }
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                // console.log(user)
                router.replace('/')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
                if (errorCode === 'auth/invalid-credential') {
                    setError({ ...error, email: 'Invalid credential' })
                } else if (errorCode === 'auth/invalid-email') {
                    setError({ ...error, email: 'Please enter a valid email' })
                } else if (errorCode === 'auth/user-not-found') {
                    setError({ ...error, email: 'User not found' })
                } else if (errorCode === 'auth/wrong-password') {
                    setError({ ...error, password: 'Wrong password' })
                }
            })
    }

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
                                onChangeText={(text) => {
                                    setEmail(text)
                                    if (error.email)
                                        setError({ ...error, email: '' })
                                }}
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
                                onChangeText={(text) => {
                                    setPassword(text)
                                    if (error.password)
                                        setError({ ...error, password: '' })
                                }}
                                secureTextEntry={true}
                                placeholder="Enter your password"
                            />
                        </YStack>
                    </YGroup>
                    <YStack gap={10}>
                        <Button
                            icon={<AntDesign name="login" size={20} />}
                            onPress={handleLogin}
                        >
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
