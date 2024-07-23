import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useTheme } from 'tamagui';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const theme = useTheme();

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
        name="(movies)"
        options={{
          title: 'Movies',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'film' : 'film-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(series)"
        options={{
          title: 'Series',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'tv' : 'tv-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'star' : 'star-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
