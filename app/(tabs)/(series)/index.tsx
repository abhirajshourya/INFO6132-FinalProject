import ContentTile from '@/components/ContentTile'
import { Feather, Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    Button,
    H1,
    Input,
    ScrollView,
    Separator,
    Spinner,
    Text,
    XGroup,
    YGroup,
    YStack
} from 'tamagui'

const Index = () => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [totalResults, setTotalResults] = useState(0)

    const [loading, setLoading] = useState(false)
    const [series, setSeries] = useState([])
    const [error, setError] = useState('')

    const seriesAPI = async (newSearch = false) => {
        if (newSearch) {
            setPage(1)
        }

        const baseURL = `https://www.omdbapi.com/?s=${search}&type=series&page=${page}&apikey=c2266d16`
        setLoading(true)
        setStatus('loading')

        const response = await fetch(baseURL)
        const data = await response.json()

        if (response.ok) {
            if (data.Response === 'True') {
                setStatus('success')
                setTotalResults(Math.ceil(data.totalResults / 10))
                setSeries(data.Search)
            }
            else {
                setError(data.Error)
                setSeries([])
                setStatus('error')
            }
        } else {
            setError('Sorry, an error occurred. Please try again later.')
            setSeries([])
            setStatus('error')
        }
        setLoading(false)
    }

    useEffect(() => {
        seriesAPI()
    }, [page])

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
                    <Button
                        icon={<Ionicons name={'search'} size={24} />}
                        onPress={() => seriesAPI(true)}
                    />
                </XGroup>

                {status === 'success' && series.length > 0 && (
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
                        value={`${page.toString()}/${totalResults}`}
                    />
                    <Button
                        icon={<Ionicons name={'chevron-forward'} size={24} />}
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
                


                <YGroup
                    separator={
                        <Separator width={'100%'} borderColor={'$color10'} />
                    }
                >
                    {status == "loading" && (
                        <Spinner size="large" scale={1.5} color={'$color10'} />
                    )}

                    {status === 'idle' && (
                        <Text
                            color={'$color7'}
                            fontSize={12}
                            textAlign={'center'}
                        >
                            Nothing to show. Please search for a series.
                        </Text>
                    )}

                    {status == 'error' && search === '' && (
                        <Text
                        color={'$color7'}
                        fontSize={12}
                        textAlign={'center'}
                    >
                        Please enter a search term.
                    </Text>
                    )}

                    {status == 'error' && search !== '' && (
                        <Text
                        color={'$color7'}
                        fontSize={12}
                        textAlign={'center'}
                    >
                        Sorry, an error occurred. Please try again.
                    </Text>
                    )}

                    {status === 'success' && series.length === 0 && (
                        <Text
                            color={'$color7'}
                            fontSize={12}
                            textAlign={'center'}
                        >
                            No series found. Please try a different search.
                        </Text>
                    )}


                    {status === "success" &&
                        series.length > 0 &&
                        series.map((series, index) => (
                            <ContentTile key={index} content={series} />
                    ))}
                </YGroup>

                {status === 'success' && series.length > 0 && (
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
                        value={`${page.toString()}/${totalResults}`}
                    />
                    <Button
                        icon={<Ionicons name={'chevron-forward'} size={24} />}
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
