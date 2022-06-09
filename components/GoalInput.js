import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    }
    
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }


    return (
        <Modal visible={props.visible} animationType="slid"  >
                <View style={styles.inputContainer}>
                    <Image source={require('../assets/images/goal.png')} style={styles.image} />
                    <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder="Your Course Goal!" value={enteredGoalText} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button color="#f31282" title="Cancel" onPress={props.onCancel} />
                        </View>
                        <View style={styles.button}>
                            <Button color="#5e0acc"  title="Add Goal" onPress={addGoalHandler} />
                        </View>
                       
                   </View>
                </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#311b6b',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: '100%',
        padding: 16
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
      },
      button: {
          width: 100,
          marginHorizontal: 8
      },
      image: {
          width: 100,
          height: 100,
          margin: 20
      }
})