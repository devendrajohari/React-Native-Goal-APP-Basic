import { StyleSheet, View, FlatList, Button } from 'react-native';
import React, { useState } from 'react';
import GoaltItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])
    console.log(enteredGoalText);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id!== id );
    })
  }


  return (
    <React.Fragment>
        <StatusBar style="light" />
        <View style={styles.appContainer}>
          <Button title='Add New Goal' color='#5e8acc' onPress={startAddGoalHandler} />
          <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} visible={modalIsVisible} />
          <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return (
              <GoaltItem text={itemData.item.text} id={itemData.item.id}  onDeleteItem={deleteGoalHandler} />
            );
          }} 
          keyExtractor={(item, index)=> {
            return item.id;
          } }
          />
            {/* <Text>List of Goals....</Text>
            {courseGoals.map((goal) => {
              return ( 
              <View style={styles.goalItem} key={goal}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
              );
            } )} */}
          </View>
        </View>
    </React.Fragment>
   
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
 
  goalsContainer: {
    flex: 5,
  },
 

});


