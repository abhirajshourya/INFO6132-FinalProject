import ContentTile from '@/components/ContentTile'
import LogoutBtn from '@/components/LogoutBtn'
import { SearchContentType } from '@/constants/Types'
import { firebaseDB } from '@/database/config'
import { getAuth } from 'firebase/auth'
import { collection, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { H1, ScrollView, Separator, YGroup, YStack } from 'tamagui'

const Index = () => {
    const insets = useSafeAreaInsets()
    const [favorites, setFavorites] = useState<SearchContentType[]>([])

    const auth = getAuth()

    useEffect(() => {

        const docsRef = collection(firebaseDB, `users/${auth.currentUser?.uid}/favorites`)
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
            },
        })
    }, [])

    return (
        <ScrollView
            backgroundColor={'$background'}
            paddingTop={insets.top}
            paddingHorizontal={20}
        >
            <LogoutBtn />
            <YStack gap={20}>
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
