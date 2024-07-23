import ContentTile from '@/components/ContentTile'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { H1, ScrollView, Separator, Text, View, YGroup, YStack } from 'tamagui'

const Index = () => {
    const [series, setSeries] = useState([
        {
            Title: "The Avengers: Earth's Mightiest Heroes",
            Year: '2010–2012',
            imdbID: 'tt1626038',
            Type: 'series',
            Poster: 'https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg',
        },
        {
            Title: 'The Avengers',
            Year: '1961–1969',
            imdbID: 'tt0054518',
            Type: 'series',
            Poster: 'https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg',
        },
        {
            Title: 'Avengers Assemble',
            Year: '2012–2019',
            imdbID: 'tt2455546',
            Type: 'series',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg',
        },
        {
            Title: 'The New Avengers',
            Year: '1976–1977',
            imdbID: 'tt0074031',
            Type: 'series',
            Poster: 'https://m.media-amazon.com/images/M/MV5BNTc5MzY3NDYtMjEwYi00ODdkLWJmNGYtM2E3Zjc5MjY2MzQ2XkEyXkFqcGdeQXVyMTY4MjAyNzU@._V1_SX300.jpg',
        },
    ])
    return (
        <ScrollView backgroundColor={'$background'}>
            <SafeAreaView />
            <YStack padding={20} gap={20}>
                <H1>Series</H1>
                <YGroup
                    separator={
                        <Separator width={'100%'} borderColor={'$color10'} />
                    }
                    marginBottom={100}
                >
                    {series.map((series, index) => (
                        <ContentTile key={index} content={series} />
                    ))}
                </YGroup>
            </YStack>
        </ScrollView>
    )
}

export default Index
