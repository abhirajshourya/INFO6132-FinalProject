import { SearchContentType, SeriesDetailType } from '@/constants/Types'
import { Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import {
    Button,
    H2,
    Image,
    Paragraph,
    ScrollView,
    Spacer,
    Spinner,
    Text,
    useTheme,
    XStack,
    YStack
} from 'tamagui'

type DetailProps = {}

const Detail = ({}: DetailProps) => {
    const theme = useTheme()
    const { imdbID } = useLocalSearchParams<SearchContentType>()
    const [detailedContent, setDetailedContent] =
        useState<SeriesDetailType | null>(null)

    const [error, setError] = useState('')

    useEffect(() => {
        fetchDetail()
    })

    const fetchDetail = async () => {
        const baseURL = `https://www.omdbapi.com/?i=${imdbID}&apikey=c2266d16`
        const response = await fetch(baseURL)
        const data = await response.json()

        if (response.ok) {
            setDetailedContent(data)
        } else {
            setError('Sorry, an error occurred. Please try again later.')
        }
    }

    return (
        <ScrollView backgroundColor={'$background'}>
            {detailedContent == null && (
                <>
                    <YStack
                        padding={20}
                        gap={20}
                        alignItems="center"
                        height={'100%'}
                    >
                        <Spacer />
                        <Spinner color={'$color'} scale={2} />
                        <Text>Loading...</Text>
                        <Spacer />
                    </YStack>
                </>
            )}

            {detailedContent != null && (
                <>
                    <Image
                        source={{ uri: detailedContent.Poster }}
                        width={'100%'}
                        height={300}
                    />
                    <YStack padding={20} gap={20}>
                        <XStack
                            gap={10}
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <YStack width={'80%'} gap={5}>
                                <H2 numberOfLines={2}>
                                    {detailedContent.Title}
                                </H2>
                                <Text>
                                    {detailedContent.Year} -{' '}
                                    {detailedContent.Rated} -{' '}
                                    {detailedContent.Runtime}
                                </Text>
                                <Text>{detailedContent.Genre}</Text>
                            </YStack>
                            <Button
                                width={'20%'}
                                onPress={() => {}}
                                icon={
                                    <Ionicons name="star-outline" size={30} />
                                }
                                chromeless
                            />
                        </XStack>

                        <XStack gap={10}>
                            {detailedContent.Ratings.map((rating, index) => (
                                <YStack
                                    key={index}
                                    gap={5}
                                    width={'30%'}
                                    justifyContent="space-between"
                                >
                                    <Text>{rating.Source}</Text>
                                    <Text>{rating.Value}</Text>
                                </YStack>
                            ))}
                        </XStack>

                        <Text>Rated: {detailedContent.Rated}</Text>

                        <Paragraph>{detailedContent.Plot}</Paragraph>

                        <Text>Release Date: {detailedContent.Released}</Text>

                        <XStack gap={5}>
                            <YStack gap={5}>
                                <Text>Director:</Text>
                                <Text>Writer: </Text>
                                <Text>Actors: </Text>
                            </YStack>
                            <YStack gap={5} width={'90%'}>
                                <Text numberOfLines={1}>
                                    {detailedContent.Director}
                                </Text>
                                <Text numberOfLines={1}>
                                    {detailedContent.Writer}
                                </Text>
                                <Text numberOfLines={1}>
                                    {detailedContent.Actors}
                                </Text>
                            </YStack>
                        </XStack>
                        <Text>Language: {detailedContent.Language}</Text>
                        <Text>Country: {detailedContent.Country}</Text>
                        <Text>Awards: {detailedContent.Awards}</Text>
                        <Text>imdbRating: {detailedContent.imdbRating}</Text>
                        <Text>imdbVotes: {detailedContent.imdbVotes}</Text>
                    </YStack>
                </>
            )}
        </ScrollView>
    )
}

export default Detail
