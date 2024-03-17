import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LearnScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Learn</Text>
                <Text style={styles.subtitle}>Learn more about Ireland and its political past through simple activities.</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.learnCard} onPress={() => {
                    navigation.navigate("LearnActivity", {activity: "basic_questions"});
                }}>
                    <Text style={styles.learnTitle}>1. </Text>
                    <Text style={styles.learnSubtitle}>Simple Irish Political History (Activity) </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.learnCard} onPress={() => {
                    (async function() {
                        await Linking.openURL("https://www.youtube.com/watch?v=l8XOZJkozfI")
                    })()                }}>
                    <Text style={styles.learnTitle}>2. </Text>
                    <Text style={styles.learnSubtitle}>Learn About Single-Transferrable Vote (Video)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.learnCard} onPress={() => {
                    (async function() {
                        await Linking.openURL("https://www.youtube.com/watch?v=l8XOZJkozfI")
                    })()                }}>
                    <Text style={styles.learnTitle}>3. </Text>
                    <Text style={styles.learnSubtitle}>Am I eligible to vote? (Activity)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.learnCard} onPress={() => {
                    navigation.navigate("LearnActivity", {activity: "ideology_questions"});
                }}>
                    <Text style={styles.learnTitle}>4. </Text>
                    <Text style={styles.learnSubtitle}>What do political parties in Ireland stand for? (Activity)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.learnCard} onPress={() => {
                    navigation.navigate("LearnActivity", {activity: "ideology_questions"});
                }}>
                    <Text style={styles.learnTitle}>5. </Text>
                    <Text style={styles.learnSubtitle}>An easy guide to Irish Politics (Article)</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        marginTop: 40
    },
    header: {

    },
    title: {
        fontSize: 24
    },
    subtitle: {
        fontSize: 15
    },
    learnCard: {
        backgroundColor: "#CCCCCC",
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 5,
        flexDirection: "row"
    },
    learnTitle: {
        fontSize: 24,
        fontWeight: "bold"
    },
    learnSubtitle: {
        fontSize: 16,
        alignSelf: "center",
        marginLeft: 30
    },
    button: {
        marginTop: "auto",
        backgroundColor: "#95d5b2",
        padding: 10,
        maxWidth: 200
    },
    buttonText: {
        textAlign: "center"
    }
})