import { useCallback, useEffect, useState } from "react";
import learn from "../../assets/data/learn.json"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";

export default function LearnActivity({ route, navigation }) {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [score, setScore] = useState(0);
    const [hasLost, setHasLost] = useState(false);

    const { activity } = route.params;
    const questions = learn[activity];
    const question = questions[currentFrame];

    useFocusEffect(
        useCallback(() => {
          // Do something when the screen is focused
    
          return () => {
            setCurrentFrame(0);
            setScore(0);
            setHasLost(false);
          };
        }, [])
      );

    function check(index) {
        if (index === question.correct_index) {
            setScore(prev => prev + 1);

            if (currentFrame === questions.length - 2) {
                navigation.goBack();
            } else {
                setCurrentFrame(prev => prev + 1)
            }
        } else {
            setHasLost(true);        
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Learn</Text>
            <Text style={styles.scoreTitle}>Score: <Text style={styles.score}>{score}</Text></Text>
            {!hasLost && (
                <View style={styles.activity}>
                    <Text style={styles.question}>
                        {question.question}
                    </Text>
                    <FlatList
                        style={styles.answers}
                        data={question.answers}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={styles.card} onPress={() => check(index)}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
            {hasLost && (
                <View style={styles.activity}>
                    <Text style={styles.question}>You lost ! Try again.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Go Back</Text>
                    </TouchableOpacity>
                </View>
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
})