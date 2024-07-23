import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'tamagui'

type DetailProps = {}

const Detail = ({}: DetailProps) => {
    return (
        <View backgroundColor={'$background'}>
            <SafeAreaView />
            <Text>Detail of Movie</Text>
        </View>
    )
}

export default Detail
