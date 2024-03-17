import { useState } from "react"
import eligibility from "../../assets/data/eligibility.json"
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LearnEligibilityActivity() {
    const [currentFrame, setCurrentFrame] = useState(0);
    const frame = eligibility.eligibility_questions[currentFrame]
    const [value, setValue] = useState("");
    console.log(frame, currentFrame);
    function check(index) {
        console.log(index,  frame.correct_index)
        if (index === frame.correct_index) {
            if (currentFrame === eligibility.eligibility_questions.length - 2) {
                navigation.goBack();
            } else {
                setCurrentFrame(prev => prev + 1)
            }
        } else {
            if (frame.state) {
                setValue(frame.val);
                setCurrentFrame(eligibility.eligibility_questions.length - 1)
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Are you eligible to vote?</Text>
            {frame?.question && (
                <View style={styles.activity}>
                <Text>{frame.question}</Text>
                <FlatList
                        style={styles.answers}
                        data={frame.answers}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={styles.card} onPress={() => check(index)}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
            </View>)}

            {frame?.finish_card && (
                <View><Text>{frame.finish_card.end_text.replace("%val%", value)}</Text></View>
                
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 25
    },
    header: {
        fontSize: 24
    },
    card: {
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 8
    },
    activity: {
        marginTop: 200
    },
    question: {
        fontSize: 20
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
});