import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {
    Text,
    Form,
    H1,
    Label,
    ScrollView,
    XStack,
    YGroup,
    YStack,
    Input,
    Button,
} from 'tamagui'
import { auth } from '@/database/config'

const Signup = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<{ email: string; password: string }>({
        email: '',
        password: '',
    })

    const handleSignup = async () => {
        setError({ email: '', password: '' })
        if (!email) {
            setError({ ...error, email: 'Email is required' })
            return
        }
        if (!password) {
            setError({ ...error, password: 'Password is required' })
            return
        }
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                // console.log(user)
                router.replace('/login')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                // console.log(errorCode, errorMessage)
                if (errorCode === 'auth/invalid-email') {
                    setError({ ...error, email: 'Please enter a valid email' })
                } else if (errorCode === 'auth/weak-password') {
                    setError({ ...error, password: 'Password is too weak' })
                }
            })
    }

    return (
        <ScrollView backgroundColor={'$background'}>
            <SafeAreaView />
            <YStack padding={20} gap={20}>
                <H1>Signup</H1>
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
                                autoCapitalize="none"
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
                            icon={<AntDesign name="adduser" size={20} />}
                            onPress={handleSignup}
                        >
                            Signup
                        </Button>
                        <Button
                            iconAfter={<AntDesign name="login" size={20} />}
                            variant="outlined"
                            chromeless
                            onPress={() => router.replace('/login')}
                        >
                            Already have an account? Login
                        </Button>
                    </YStack>
                </Form>
            </YStack>
        </ScrollView>
    )
}

export default Signup
