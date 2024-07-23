import { SearchContentType, SeriesDetailType } from '@/constants/Types'
import { Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    View,
    Text,
    useTheme,
    ScrollView,
    YStack,
    Spacer,
    Spinner,
    XStack,
    Image,
    Paragraph,
    Button,
    H2,
} from 'tamagui'

type DetailProps = {}

const Detail = ({}: DetailProps) => {
    const theme = useTheme()
    const { imdbID } = useLocalSearchParams<SearchContentType>()
    const [detailedContent, setDetailedContent] =
        useState<SeriesDetailType | null>({
            Title: 'Star Trek: Strange New Worlds',
            Year: '2022–',
            Rated: 'TV-PG',
            Released: '05 May 2022',
            Runtime: '1 min',
            Genre: 'Action, Adventure, Sci-Fi',
            Director: 'N/A',
            Writer: 'Akiva Goldsman, Alex Kurtzman, Jenny Lumet',
            Actors: 'Anson Mount, Ethan Peck, Christina Chong',
            Plot: 'A prequel to Star Trek: The Original Series, the show follows the crew of the USS Enterprise under Captain Christopher Pike.',
            Language: 'English',
            Country: 'United States',
            Awards: 'Nominated for 2 Primetime Emmys. 9 wins & 34 nominations total',
            Poster: 'https://m.media-amazon.com/images/M/MV5BM2Q2YWM0NWMtMGJmYS00NjY3LTg2MDctY2ViY2ZiM2Y5ZTAyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
            Ratings: [{ Source: 'Internet Movie Database', Value: '8.3/10' }],
            Metascore: 'N/A',
            imdbRating: '8.3',
            imdbVotes: '60,422',
            imdbID: 'tt12327578',
            Type: 'series',
            totalSeasons: '3',
            Response: 'True',
        })

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
