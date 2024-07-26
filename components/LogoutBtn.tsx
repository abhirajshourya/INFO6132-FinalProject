import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Button, Spacer, XStack } from 'tamagui'
import { signOut } from 'firebase/auth'
import { auth } from '@/database/config'

const LogoutBtn = () => {
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
