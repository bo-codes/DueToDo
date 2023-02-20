import { View, Text, StyleSheet, Pressable } from "react-native";
import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";

const SingleTodo = ({todo, deleteTodoHandler, id}) => {


  const leftSwipe = () => {
    return (
      <Pressable onPress={deleteTodoHandler.bind(this, id)}>
        <View style={styles.deleteBox}>
          <Text style={styles.completeBoxText}>Done</Text>
        </View>
      </Pressable>
    )
  }

  return (
    <GestureHandlerRootView>
      <Swipeable
        overshootFriction={4}
        leftThreshold="40px"
        renderRightActions={leftSwipe}
      >
        <View style={styles.singleTodo}>
          <Text style={styles.singleTodoText}>{todo.text}</Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
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
    backgroundColor: "#bd4200",
    // backgroundColor: "#167693",
    // backgroundColor: "#157491",
    // backgroundColor: "#321591",
  },
  singleTodoText: {
    // borderWidth: 1,
    // borderColor: "rgb(61, 152, 255)",
    color: "#d5c2b0",
    // color: "#b0cbd5",
    fontSize: 16,
    fontWeight: "900",
    letterSpacing: 1.4,
  },
  deleteBox: {
    backgroundColor: "#167693",
    // backgroundColor: "#00ca2c",
    height: 62,
    width: 390,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
    marginLeft: -310,
    paddingLeft: 310,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
  },
  completeBoxText: {
    color: "#c2dfea",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default SingleTodo;
