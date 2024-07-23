import ContentTile from '@/components/ContentTile'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, YStack, H1, YGroup, Separator } from 'tamagui'

const Index = () => {
    const [movies, setMovies] = useState([
        {
            Title: 'The Avengers',
            Year: '2012',
            imdbID: 'tt0848228',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
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
                <H1>Movies</H1>
                <YGroup
                    separator={
                        <Separator width={'100%'} borderColor={'$color10'} />
                    }
                    marginBottom={100}
                >
                    {movies.map((movie, index) => (
                        <ContentTile key={index} content={movie} />
                    ))}
                </YGroup>
            </YStack>
        </ScrollView>
    )
}

export default Index
