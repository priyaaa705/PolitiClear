import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import news from "../../assets/data/news.json";
import { Image } from "expo-image";

export default function LocalScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Local News</Text>
                <Text style={styles.subtitle}>Dublin Bay South</Text>
                {news["Dublin Bay South"].map((item) => (
                <View key={item.photo} style={styles.newsCard}>
                    <View style={styles.pair}>
                        <Image source={item.photo} style={styles.photo}/>
                        <Text style={styles.headline}>{item.headline} </Text>
                    </View>
                    <Text style={styles.source}>{item.source}</Text>
                </View>
                ))}
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 15
    },
    title: {
        fontSize: 28
    },
    subtitle: {
        fontSize: 18
    },
    photo: {
        width: 60,
        height: 60
    },
    newsCard: {
        margin: 5,
        width: 300,
    },
    pair: {
        flexDirection: "row"
    },
    headline: {
        marginLeft: 10
    },
    source: {
        textDecorationLine: "underline"
    }
})