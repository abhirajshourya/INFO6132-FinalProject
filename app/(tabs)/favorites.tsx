import ContentTile from '@/components/ContentTile'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { H1, ScrollView, Separator, YGroup, YStack } from 'tamagui'

export default function FavoritesScreen() {
    const [favorites, setFavorites] = useState([
        {
            Title: "The Avengers: Earth's Mightiest Heroes",
            Year: '2010–2012',
            imdbID: 'tt1626038',
            Type: 'series',
            Poster: 'https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg',
        },
        {
            Title: 'Avengers: Endgame',
            Year: '2019',
            imdbID: 'tt4154796',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
        },
        {
            Title: 'Avengers: Infinity War',
            Year: '2018',
            imdbID: 'tt4154756',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
        },
    ])

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
