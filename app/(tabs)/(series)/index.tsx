import ContentTile from '@/components/ContentTile'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    Button,
    H1,
    Input,
    ScrollView,
    Separator,
    Spinner,
    Text,
    View,
    XGroup,
    XStack,
    YGroup,
    YStack,
} from 'tamagui'

const Index = () => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
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
                <XGroup>
                    <Input
                        flex={1}
                        placeholder={'Search'}
                        value={search}
                        onChangeText={setSearch}
                    />
                    <Button icon={<Ionicons name={'search'} size={24} />} />
                </XGroup>
                <XGroup>
                    <Button
                        icon={<Ionicons name={'chevron-back'} size={24} />}
                        onPress={() => {
                            if (page > 1) setPage(page - 1)
                        }}
                    />
                    <Input
                        flex={1}
                        placeholder={'1'}
                        placeholderTextColor={'$color'}
                        fontSize={20}
                        textAlign="center"
                        keyboardType="numeric"
                        inputMode="numeric"
                        value={page.toString()}
                    />
                    <Button
                        icon={<Ionicons name={'chevron-forward'} size={24} />}
                        onPress={() => setPage(page + 1)}
                    />
                </XGroup>
                <YGroup
                    separator={
                        <Separator width={'100%'} borderColor={'$color10'} />
                    }
                    marginBottom={100}
                >
                    {loading && (
                        <Spinner size="large" scale={1.5} color={'$color10'} />
                    )}
                    {!loading &&
                        series.map((series, index) => (
                            <ContentTile key={index} content={series} />
                        ))}
                </YGroup>
            </YStack>
        </ScrollView>
    )
}

export default Index
