import { Tabs, useRouter } from 'expo-router'
import React from 'react'

import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useColorScheme } from '@/hooks/useColorScheme'
import { useTheme } from 'tamagui'
import { auth } from '@/database/config'

export default function TabLayout() {
    const theme = useTheme()
    const router = useRouter()

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // console.log('User is signed in')
        } else {
          router.replace('(auth)/login')
        }
    })

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.color12?.get(),
                tabBarInactiveTintColor: theme.color1?.get(),
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.color10?.get(),
                    borderTopWidth: 0,
                },
            }}
        >
            <Tabs.Screen
                name="(movie)"
                options={{
                    title: 'Movies',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? 'film' : 'film-outline'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="(series)"
                options={{
                    title: 'Series',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? 'tv' : 'tv-outline'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? 'star' : 'star-outline'}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
