import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'tamagui'

type DetailProps = {}

const Detail = ({}: DetailProps) => {
    return (
        <View background={'$background'}>
            <SafeAreaView />
            <Text>Detail of Series</Text>
        </View>
    )
}

export default Detail
