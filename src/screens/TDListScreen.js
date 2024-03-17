import { StyleSheet, Text, View } from "react-native";
import { constituencies } from "../../assets/data/constituencies.json";
import tds from "../../assets/data/tds.json";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import TDCard from "../components/TDCard";
import { Image } from "react-native"

export default function TDListScreen({ navigation }) {

    const tdList = constituencies.map((constituency) => (
        <View key={constituency.name}>
            <Text style={styles.constituencyTitle}>{constituency.name}</Text>
            <FlatList
                keyExtractor={(item) => tds[item].name}
                data={constituency.tds}
                numColumns={2}
                scrollEnabled={false}
                renderItem={({ item }) => {
                    const td = tds[item];
                    return <TDCard key={td.name} id={item} navigation={navigation} />
                }}
            />
        </View>
    ));

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Representatives (TDs)</Text>

            <ScrollView>
                <Image source={require("../../assets/sentiment_plot.png")} style={{ width: 380, height: 300, marginLeft: -20 }} />
                <Image source={require("../../assets/word_cloud.png")} style={{ width: 300, height: 150, marginLeft: 20, marginTop: 20, marginBottom: 20 }} />
                <Image source={require("../../assets/sentiment_plot2.jpg")} style={{ width: 300, height: 150, marginLeft: 20, marginTop: 20, marginBottom: 20 }} />

                {tdList}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 25
    },
    headerText: {
        fontSize: 20
    },
    constituencyTitle: {

    }
})