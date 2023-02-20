import { View, TextInput, Button, StyleSheet, Pressable, Text } from "react-native";

const TodoInput = ({ currTodo, todoInputHandler, addTodoHandler }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="TODO"
        style={styles.textInput}
        onChangeText={todoInputHandler}
        value={currTodo}
        placeholderTextColor="#a4a8aa"
        onSubmitEditing={addTodoHandler}
      />
      {/* <Button
        title="+"
        // title="CREATE"
        onPress={addTodoHandler}
        color="#3a92f7"
        // buttonStyle={styles.createButton}
      /> */}
      <Pressable onPress={addTodoHandler}>
        <View>
          <Text style={styles.addButtonText}>+</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "",
    alignItems: "center",
    width: "100%",
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    flex: 1,
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: "rgb(151, 151, 151)",
    backgroundColor: "rgb(219, 219, 219)",
    width: "84%",
    height: 38,
    marginRight: 8,
    borderRadius: 8,
    padding: 8,
  },
  addButtonContainer: {

  },
  addButtonText: {
    fontSize: 36,
    color: "#3a92f7",
  },
});

export default TodoInput;
