import { View, Text, StyleSheet, Pressable } from "react-native";

const SingleTodo = ({todo, deleteTodoHandler, id}) => {
  return (
    <Pressable onPress={deleteTodoHandler.bind(this, id)}>
      <View style={styles.singleTodo}>
        <Text style={styles.singleTodoText}>{todo.text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  singleTodo: {
    // borderWidth: 1,
    // borderColor: "rgb(51, 0, 203)",
    width: "100%",
    height: 62,
    marginVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#0f0025",
    borderRadius: 11,
    backgroundColor: "#167693",
    // backgroundColor: "#157491",
    // backgroundColor: "#321591",
  },
  singleTodoText: {
    // borderWidth: 1,
    // borderColor: "rgb(61, 152, 255)",
    color: "#b0cbd5",
    fontSize: 16,
    fontWeight: "900",
    letterSpacing: 1.4,
  },
});

export default SingleTodo;
