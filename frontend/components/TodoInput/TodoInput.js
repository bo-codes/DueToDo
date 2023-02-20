import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import ReactDatePicker from "../DatePicker/DatePicker";

const TodoInput = ({ currTodo, todoInputHandler, addTodoHandler }) => {
  return (
    <KeyboardAvoidingView
      style={styles.bottomContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.appNameContainer}>
        <Text style={styles.appNameText}>DueToDo</Text>
      </View>
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
      {/* <ReactDatePicker display="inline"/> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    // borderWidth: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    flex: 1.5,
  },
  appNameContainer: {
    // borderWidth: 1,
    // borderColor: "green",
    width: "100%",
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  appNameText: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row"
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
  addButtonContainer: {},
  addButtonText: {
    fontSize: 36,
    color: "#3a92f7",
  },
});

export default TodoInput;
