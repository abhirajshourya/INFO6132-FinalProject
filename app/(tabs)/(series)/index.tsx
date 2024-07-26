import ContentTile from '@/components/ContentTile'
import { Ionicons } from '@expo/vector-icons'
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
    YStack,
} from 'tamagui'

const Index = () => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [series, setSeries] = useState([])
    const [error, setError] = useState('')

    const seriesAPI = async () => {
        const baseURL = `https://www.omdbapi.com/?s=${search}&type=series&page=${page}&apikey=c2266d16`
        setError('')
        setLoading(true)
        const response = await fetch(baseURL)
        const data = await response.json()

        if (response.ok) {
            setSeries(data.Search)
        } else {
            setError('Sorry, an error occurred. Please try again later.')
            setSeries([])
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
                        onPress={seriesAPI}
                    />
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
                    {error && <Text>{error}</Text>}
                    {!loading &&
                        !error &&
                        series &&
                        series.map((series, index) => (
                            <ContentTile key={index} content={series} />
                        ))}
                </YGroup>
            </YStack>
        </ScrollView>
    )
}

export default Index
