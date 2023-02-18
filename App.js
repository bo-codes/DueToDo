import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [currTodo, setCurrTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todoInputHandler = (enteredText) => {
    setCurrTodo(enteredText);
  };

  const addTodoHandler = () => {
    // addTodoThunk(currTodo);
    setTodos((existingTodos) => [...existingTodos, currTodo]);
    setCurrTodo("")
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="TODO"
          style={styles.textInput}
          onChangeText={todoInputHandler}
          value={currTodo}
        />
        <Button title="Create" onPress={addTodoHandler} />
      </View>
      <View style={styles.todosList}>
        <Text>Current TODOS</Text>
        {todos && todos.map((todo) => {
          return <Text key={todo}>{todo}</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 30,
    borderBottomWidth: 0.5,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "blue",
    width: "80%",
    height: 50,
    marginRight: 8,
    borderRadius: 8,
    padding: 8,
  },
  todosList: {
    flex: 6,
  },
});
