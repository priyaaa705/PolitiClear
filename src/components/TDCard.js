import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {Image} from "expo-image";
import tds from "../../assets/data/tds.json";

export default function TDCard({ id, navigation }) {
    const profile = tds[id];

    if (!profile) return <Text>No td here.</Text>

    return (
        <TouchableOpacity style={styles.tdCard} onPress={() => {
            navigation.navigate("TD", { td: id });
        }}>
            <Image source={profile.headshot} style={styles.tdPic} />
            <Text style={styles.tdName}> {profile.name} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tdCard: {
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: 160,
        margin: 5
    },
    tdPic: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    tdName: {
        fontSize: 12
    },
})