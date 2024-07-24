import { MovieDetailType, SearchContentType } from '@/constants/Types'
import { Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    View,
    Text,
    ScrollView,
    Image,
    Spinner,
    YStack,
    Spacer,
    H1,
    H2,
    Paragraph,
    XStack,
    useTheme,
    Button,
} from 'tamagui'

type DetailProps = {}

const Detail = ({}: DetailProps) => {
    const theme = useTheme()
    const { imdbID } = useLocalSearchParams<SearchContentType>()
    const [detailedContent, setDetailedContent] =
        useState<MovieDetailType | null>({
            Title: 'Avengers: Endgame',
            Year: '2019',
            Rated: 'PG-13',
            Released: '26 Apr 2019',
            Runtime: '181 min',
            Genre: 'Action, Adventure, Drama',
            Director: 'Anthony Russo, Joe Russo',
            Writer: 'Christopher Markus, Stephen McFeely, Stan Lee',
            Actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo',
            Plot: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
            Language: 'English, Japanese, Xhosa, German',
            Country: 'United States',
            Awards: 'Nominated for 1 Oscar. 70 wins & 133 nominations total',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
            Ratings: [
                { Source: 'Internet Movie Database', Value: '8.4/10' },
                { Source: 'Rotten Tomatoes', Value: '94%' },
                { Source: 'Metacritic', Value: '78/100' },
            ],
            Metascore: '78',
            imdbRating: '8.4',
            imdbVotes: '1,281,284',
            imdbID: 'tt4154796',
            Type: 'movie',
            DVD: 'N/A',
            BoxOffice: '$858,373,000',
            Production: 'N/A',
            Website: 'N/A',
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
                        <Text>BoxOffice: {detailedContent.BoxOffice}</Text>
                    </YStack>
                </>
            )}
        </ScrollView>
    )
}

export default Detail
