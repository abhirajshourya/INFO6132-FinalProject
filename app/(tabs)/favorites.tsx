import ContentTile from '@/components/ContentTile';
import { SearchContentType } from '@/constants/Types';
import { firebaseDB } from '@/database/config';
import {
    collection,
    onSnapshot
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H1, ScrollView, Separator, YGroup, YStack } from 'tamagui';

const Index = () => {
    const [favorites, setFavorites] = useState<SearchContentType[]>([])

    useEffect(() => {
        const docsRef = collection(firebaseDB, "Movie")
        const docsSnap = onSnapshot(docsRef, {
            next: (snapshot) => {
                const data: SearchContentType[] = []
                snapshot.docs.forEach((doc) => {
                    console.log(doc.data())
                    data.push({
                        Poster: doc.data().Poster,
                        Title: doc.data().Title,
                        Type: doc.data().Type,
                        Year: doc.data().Year,
                        imdbID: doc.data().imdbID,
                    })
                })
                setFavorites(data)
            }
        })
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