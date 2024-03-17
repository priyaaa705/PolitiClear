import { Linking, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Link({label, url}) {
    
    const go = async () => {
        await Linking.openURL(url);
    }

    return (
        <TouchableOpacity onPress={go}>
            <Text style={styles.social_media}>{label}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    social_media: {
        textDecorationLine: "underline",
        marginLeft: 15
    }
})