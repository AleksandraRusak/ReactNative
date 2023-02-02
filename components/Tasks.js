import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddTasks from "./AddTasks";
import Header from "./Header";

const Tasks = () => {
  const [task, setTask] = useState(); // new task in input
  const [taskList, setTaskList] = useState([]); // all tasks in list

  const onSubmit = () => {
    if (!task) {
      Alert.alert("Please enter the task title");
      return;
    }
    setTaskList([...taskList, task]); // show all old tasks + new task
    setTask(null);
    Keyboard.dismiss();
  };
  /* splice - Removes elements from an array and inserts new elements in their place, 
  returning the deleted elements and store the result in itemsCopy not include just deleted task. */
  const onDelete = (index) => {
    const itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    setTaskList(itemsCopy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Tasks */}
        <View style={styles.tasksWrapper}>
          <Header title="Tasks" />
          <ScrollView style={styles.items}>
            {/* This is where the tasks will go */}
            {/* Map - calls a defined callback function on each element of an array, and returns an array that contains the results. */}
            {/* index we get from maping fanction */}
            {taskList.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => onDelete(index)}>
                  <AddTasks text={item} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view not to cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write your task here..."}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => onSubmit()} hitSlop={8}>
          {/* Plus icon made with style*/}
          <View style={styles.plusIcon}>
            <Text style={styles.plusIconText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#403572",
  },
  items: {
    marginTop: 30,
    height: "80%",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#E8EAED",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 280,
    marginLeft: 10,
  },
  plusIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#403572",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#403572",
    borderWidth: 1,
    marginRight: 10,
  },
  plusIconText: {
    color: "white",
    fontSize: 35,
  },
});
