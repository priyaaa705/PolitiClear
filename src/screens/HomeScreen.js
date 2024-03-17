import { ImageBackground, Modal, Pressable, StyleSheet, Text, Touchable, View } from "react-native"
import { Image } from "expo-image"
import ireland_map from "../../assets/ireland_constituency_map.png"
import dublin_map from "../../assets/dublin_constituency_map.png"
import useDimensions from "../state/hooks/useDimensions";
import RelativeToBg from "../components/layout/RelativeToBg";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function HomeScreen({ navigation }) {
    const { scaledImageDimensions } = useDimensions(ireland_map);

    const [isDublinModalVisable, setIsDublinModalVisable] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                visible={isDublinModalVisable}
                onRequestClose={() => {
                    setIsDublinModalVisable(false);
                    navigation.navigate("Constituency", { constituency: "Donegal" });
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Pick your Dublin Constituency</Text>
                        <Pressable onPress={() => {
                            setIsDublinModalVisable(false)
                            navigation.navigate("Constituency", { constituency: "Dublin Bay South" })
                        }}>
                            <Image source={dublin_map} style={{
                                width: 280,
                                height: 391
                            }}
                            />
                        </Pressable>
                        <TouchableOpacity onPress={() => setIsDublinModalVisable(false)}>
                            <Text> Close </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Home</Text>
                <Text style={styles.subtitle}>Select a constituency to get started...</Text>
            </View>
            <ImageBackground
                source={ireland_map}
                resizeMode="center"
                style={{
                    ...styles.image,
                    top: 0 - scaledImageDimensions.yZero,
                    left: 0 - scaledImageDimensions.xZero,
                    width: scaledImageDimensions.width,
                    height: scaledImageDimensions.height,
                }}
            />
            <RelativeToBg relativeDimensions={{ x: 0.420, y: 0.24, w: 0.2, h: 0.130 }}>
                <Pressable
                    style={{
                        height: "100%",
                        width: "100%",
                        // backgroundColor: "rgba(0,0,0,0.4)", // used for development
                        zIndex: false ? 0 : 10,
                    }}
                    onPress={() => {
                        navigation.navigate("Constituency", { constituency: "Donegal" });
                    }}
                />
            </RelativeToBg>
            <RelativeToBg relativeDimensions={{ x: 0.28, y: 0.46, w: 0.16, h: 0.090 }}>
                <Pressable
                    style={{
                        height: "100%",
                        width: "100%",
                        // backgroundColor: "rgba(50,0,0,0.4)", // used for development
                        zIndex: false ? 0 : 10,
                    }}
                    onPress={() => {
                        navigation.navigate("Constituency", { constituency: "Galway West" })
                    }}
                />
            </RelativeToBg>
            <RelativeToBg relativeDimensions={{ x: 0.24, y: 0.59, w: 0.17, h: 0.140 }}>
                <Pressable
                    style={{
                        height: "100%",
                        width: "100%",
                        // backgroundColor: "rgba(0,50,0,0.4)", // used for development
                        zIndex: false ? 0 : 10,
                    }}
                    onPress={() => {
                        navigation.navigate("Constituency", { constituency: "Kerry" })
                    }}
                />
            </RelativeToBg>
            <RelativeToBg relativeDimensions={{ x: 0.65, y: 0.46, w: 0.08, h: 0.090 }}>
                <Pressable
                    style={{
                        height: "100%",
                        width: "100%",
                        // backgroundColor: "rgba(0,0,50,0.4)", // used for development
                        zIndex: false ? 0 : 10,
                    }}
                    onPress={() => {
                        setIsDublinModalVisable(true);
                    }}
                />
            </RelativeToBg>
            <Image style={styles.map} source={ireland_map} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        marginTop: 40
    },
    titleContainer: {
        paddingLeft: 25,
        paddingTop: 40,
        marginBottom: 50,
    },
    title: {
        fontSize: 36
    },
    image: {
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        margin: 0,
    },
    modalView: {
        margin: 20,
        marginTop: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 20
    }
})