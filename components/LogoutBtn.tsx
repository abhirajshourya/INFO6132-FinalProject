import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Button, Spacer, XStack } from 'tamagui'
import { getAuth, signOut } from 'firebase/auth'

const LogoutBtn = () => {
    const auth = getAuth()
    const handleLogout = async () => {
        await signOut(auth)
    }
    return (
        <XStack>
            <Spacer flex={1} />
            <Button
                icon={<AntDesign name="logout" size={20} />}
                onPress={handleLogout}
            >
                Logout
            </Button>
        </XStack>
    )
}

export default LogoutBtn
