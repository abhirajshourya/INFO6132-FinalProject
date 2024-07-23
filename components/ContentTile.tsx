import { SearchContentResponse } from '@/constants/Types'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import {
    Card,
    H3,
    H4,
    H5,
    Text,
    Image,
    ListItem,
    Spacer,
    View,
    XStack,
    YGroup,
    YStack,
} from 'tamagui'

export type ContentTileProps = {
    content: SearchContentResponse
}

const ContentTile = ({ content }: ContentTileProps) => {
    const router = useRouter()

    const tilePressHandler = () => {
        router.push({ pathname: `(${content.Type})/detail`, params: { ...content } })
    }

    return (
        <YGroup.Item>
            <ListItem
                padding={0}
                icon={null}
                width={'100%'}
                onPress={tilePressHandler}
            >
                <XStack gap={'$4'}>
                    <Image
                        padding={10}
                        source={{ uri: content.Poster }}
                        width={100}
                        height={150}
                    />
                    <YStack gap={5}>
                        <Spacer />
                        <H3>{content.Title}</H3>
                        <H4>{content.Year}</H4>
                        <H5>{content.Type}</H5>
                        <Spacer />
                    </YStack>
                </XStack>
            </ListItem>
        </YGroup.Item>
    )
}

export default ContentTile
