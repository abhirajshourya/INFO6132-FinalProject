import ContentTile from '@/components/ContentTile';
import * as dbSvc from "@/database/service";
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H1, ScrollView, Separator, YGroup, YStack } from 'tamagui';

const Index = () => {
    const [favorites, setFavorites] = useState([{}])

    const reloadFav = () => {
        const fetchData = async () => {
            await dbSvc.getList().then((value) => {
                setFavorites(value)
            })
        }
        fetchData()
    }

    useEffect(() => {
        reloadFav()
    }, [])

    return (
        <ScrollView backgroundColor={'$background'}>
            <SafeAreaView />
            <YStack padding={20} gap={20}>
                <H1>Favorites</H1>
                <YGroup
                    separator={
                        <Separator width={'100%'} borderColor={'$color10'} />
                    }
                    marginBottom={100}
                >
                    {favorites.map((favorite, index) => (
                        <ContentTile key={index} content={favorite} />
                    ))}
                </YGroup>
            </YStack>
        </ScrollView>
    )
}

export default Index