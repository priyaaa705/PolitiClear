import { StyleSheet, Text, View } from "react-native";
import tds from "../../assets/data/tds.json";
import { Image } from "expo-image"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Link from "../components/Link";

export default function TDScreen({ route, navigation }) {
    const { td } = route.params;
    const profile = tds[td];
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.header}>{profile.name}</Text>
            </View>
            <Image source={profile.headshot} style={styles.image} />
            <View>
                <View style={styles.keyPair}>
                    <Text style={styles.key}>Age: </Text>
                    <Text style={styles.value}>{profile.age}</Text>
                </View>
                <View style={styles.keyPair}>
                    <Text style={styles.key}>Constituency: </Text>
                    <Text style={styles.value}>{profile.constituency}</Text>
                </View>
                <View style={styles.keyPair}>
                    <Text style={styles.key}>Party: </Text>
                    <Text style={styles.value}>{profile.party}</Text>
                </View>
                <View style={styles.keyPair}>
                    <Text style={styles.key}>External Links: </Text>
                    {profile.social_media.website && <Link label="Website" url={profile.social_media.website}/>}
                    {profile.social_media.facebook && <Link label="Facebook" url={profile.social_media.facebook}/>}
                    {profile.social_media.x && <Link label="X" url={profile.social_media.x}/>}
                </View>
                <View style={styles.keyPair}>
                    <Text style={styles.key}>Contact: </Text>
                    <Text style={styles.value}>{profile.contact}</Text>
                </View>
                <View style={styles.keyPair}>
                    <Text style={styles.key}>Party: </Text>
                    <Text style={styles.value}>{profile.party}</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: "center"
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 50,
        alignSelf: "center"
    },
    container: {
        marginTop: 40,
        padding: 24
    },
    button: {
        marginTop: 40,
        backgroundColor: "#95d5b2",
        padding: 10,
        maxWidth: 200,
        alignSelf: "center"
    },
    buttonText: {
        textAlign: "center"
    },
    keyPair: {
        flexDirection: "row",
    },
    key: {
        fontWeight: "bold",
        fontSize: 17
    },
    value: {
        fontSize: 15,
        marginLeft: 15,
        marginRight: 15,
        alignSelf: "center"
    }
})