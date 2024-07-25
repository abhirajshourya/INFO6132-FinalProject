import ContentTile from '@/components/ContentTile'
import { SearchContentType } from '@/constants/Types'
import { Feather, Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    Text,
    ScrollView,
    YStack,
    H1,
    YGroup,
    Input,
    Button,
    XGroup,
    Spinner,
} from 'tamagui'

const Index = () => {
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState<
        'idle' | 'loading' | 'success' | 'error'
    >('idle')
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)
    const [errorMessage, setErrorMessage] = useState('')
    const [movies, setMovies] = useState<SearchContentType[]>([])

    const movieAPI = async () => {
        const baseURL = `https://www.omdbapi.com/?s=${search}&type=movie&page=${page}&apikey=c2266d16`
        setStatus('loading')
        const response = await fetch(baseURL)
        const data = await response.json()

        if (response.ok) {
            if (data.Response === 'True') {
                setMovies(data.Search)
                setTotalResults(Math.ceil(data.totalResults / 10))
                setStatus('success')
            } else {
                setErrorMessage(data.Error)
                setMovies([])
                setStatus('error')
            }
        } else {
            setErrorMessage('Sorry, an error occurred. Please try again later.')
            setMovies([])
            setStatus('error')
        }
    }

    useEffect(() => {
        if (search) {
            movieAPI()
        }
    }, [page])

    return (
        <ScrollView backgroundColor={'$background'}>
            <SafeAreaView />
            <YStack padding={20} gap={20}>
                <H1>Movies</H1>
                <XGroup>
                    <Input
                        flex={1}
                        placeholder={'Search'}
                        value={search}
                        onChangeText={setSearch}
                    />
                    <Button
                        icon={<Ionicons name={'search'} size={24} />}
                        onPress={movieAPI}
                    />
                </XGroup>

                {status === 'success' && movies.length > 0 && (
                    <XGroup>
                        <Button
                            icon={<Feather name="chevrons-left" size={24} />}
                            onPress={() => {
                                if (page > 1) setPage(1)
                            }}
                            disabled={page <= 1}
                        />
                        <Button
                            icon={<Ionicons name={'chevron-back'} size={24} />}
                            onPress={() => {
                                if (page > 1) setPage(page - 1)
                            }}
                            disabled={page <= 1}
                        />
                        <Input
                            flex={1}
                            placeholder={'1'}
                            placeholderTextColor={'$color'}
                            fontSize={20}
                            textAlign="center"
                            keyboardType="numeric"
                            inputMode="numeric"
                            disabled
                            value={`${page.toString()}/${totalResults}`}
                        />
                        <Button
                            icon={
                                <Ionicons name={'chevron-forward'} size={24} />
                            }
                            onPress={() => setPage(page + 1)}
                            disabled={page >= totalResults}
                        />
                        <Button
                            icon={<Feather name="chevrons-right" size={24} />}
                            onPress={() => setPage(totalResults)}
                            disabled={page >= totalResults}
                        />
                    </XGroup>
                )}

                <YGroup>
                    {status === 'loading' && (
                        <Spinner size="large" scale={1.5} color={'$color10'} />
                    )}
                    {status === 'idle' && (
                        <Text
                            color={'$color7'}
                            fontSize={12}
                            textAlign={'center'}
                        >
                            Nothing to show. Please search for a movie.
                        </Text>
                    )}
                    {status === 'error' && search === '' && (
                        <Text
                            color={'$color7'}
                            fontSize={12}
                            textAlign={'center'}
                        >
                            Please enter a search term.
                        </Text>
                    )}
                    {status === 'error' && search !== '' && (
                        <Text
                            color={'$color7'}
                            fontSize={12}
                            textAlign={'center'}
                        >
                            Sorry, an error occurred. Please try again.
                        </Text>
                    )}
                    {status === 'success' && movies.length === 0 && (
                        <Text
                            color={'$color7'}
                            fontSize={12}
                            textAlign={'center'}
                        >
                            No movies found. Please try a different search.
                        </Text>
                    )}
                    {status === 'success' &&
                        movies.length > 0 &&
                        movies.map((movie, index) => (
                            <ContentTile key={index} content={movie} />
                        ))}
                </YGroup>

                {status === 'success' && movies.length > 0 && (
                    <XGroup>
                        <Button
                            icon={<Feather name="chevrons-left" size={24} />}
                            onPress={() => {
                                if (page > 1) setPage(1)
                            }}
                            disabled={page <= 1}
                        />
                        <Button
                            icon={<Ionicons name={'chevron-back'} size={24} />}
                            onPress={() => {
                                if (page > 1) setPage(page - 1)
                            }}
                            disabled={page <= 1}
                        />
                        <Input
                            flex={1}
                            placeholder={'1'}
                            placeholderTextColor={'$color'}
                            fontSize={20}
                            textAlign="center"
                            keyboardType="numeric"
                            inputMode="numeric"
                            disabled
                            value={`${page.toString()}/${totalResults}`}
                        />
                        <Button
                            icon={
                                <Ionicons name={'chevron-forward'} size={24} />
                            }
                            onPress={() => setPage(page + 1)}
                            disabled={page >= totalResults}
                        />
                        <Button
                            icon={<Feather name="chevrons-right" size={24} />}
                            onPress={() => setPage(totalResults)}
                            disabled={page >= totalResults}
                        />
                    </XGroup>
                )}
            </YStack>
        </ScrollView>
    )
}

export default Index
