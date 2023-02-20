import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";
import SingleTodo from "./components/SingleTodo/SingleTodo";
import TodoInput from "./components/TodoInput/TodoInput";

export default function App() {
  const [currTodo, setCurrTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todoInputHandler = (enteredText) => {
    setCurrTodo(enteredText);
  };

  const addTodoHandler = () => {
    // addTodoThunk(currTodo);
    setTodos((existingTodos) => [
      { text: currTodo, id: Math.random().toString() },
      ...existingTodos,
    ]);
    setCurrTodo("");
    Keyboard.dismiss();
  };

  const deleteTodoHandler = (id) => {
    // console.log("clicked")
    setTodos((existingTodos) => {
      return existingTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.appNameContainer}>
          <Text style={styles.appNameText}>DueToDo</Text>
        </View>
        <TodoInput
          currTodo={currTodo}
          todoInputHandler={todoInputHandler}
          addTodoHandler={addTodoHandler}
        />
        <View style={styles.todoListContainer}>
          <Text style={styles.todoListTitle}>CURRENT TODOS</Text>
          {/* ScrollView will render all items in the list at the same time. Even the ones that are off screen. Even if there are 10,000.*/}
          {/* <ScrollView style={styles.todosList}>
            {todos &&
              todos.map((todo, i) => {
                return (
                  <View key={i} style={styles.singleTodo}>
                    <Text style={styles.singleTodoText}>{todo}</Text>
                  </View>
                );
              })}
          </ScrollView> */}
          {/* FlatList will lazy render items that are not immediately in view on the screen */}
          <FlatList
            data={todos}
            renderItem={(todo) => {
              return (
                <SingleTodo
                  todo={todo.item}
                  id={todo.item.id}
                  deleteTodoHandler={deleteTodoHandler}
                />
              );
            }}
            style={styles.todosList}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    backgroundColor: "#212448",
  },
  appNameContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  appNameText: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
  },
  todoListContainer: {
    // borderWidth: 1,
    // borderColor: "rgb(203, 0, 0)",
    backgroundColor: "#ffffff",
    flex: 6,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  todoListTitle: {
    // borderWidth: 1,
    // borderColor: "rgb(0, 135, 203)",
    padding: 20,
    color: "#959c9f",
    fontWeight: "bold",
    fontSize: 17,
  },
  todosList: {
    // borderWidth: 1,
    // borderColor: "rgb(0, 203, 41)",
    width: "100%",
    flexDirection: "column",
  },
});
