import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

/* AddTasks consists of an image, text(props) and a checkbox and styles as well. */
const AddTasks = (props) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Checkbox
          /* Value indicating if the checkbox should be rendered as checked or not. */
          value={isChecked}
          /* Callback that is invoked when the user presses the checkbox. */
          onValueChange={setChecked}
          color={isChecked ? "#403572" : undefined}
          style={styles.checkbox}
        />
        {/* Props let you customize React components. For example, here I pass each "text/task" a different name to render */}
        <Text
          style={{
            maxWidth: "80%",
            marginLeft: 20,
            textDecorationLine: isChecked ? "line-through" : "none",
          }}
        >
          {props.text}
        </Text>
      </View>
      <View>
        <Image style={styles.image} source={require("../assets/delete.png")} />
      </View>
    </View>
  );
};
export default AddTasks;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  checkbox: {
    borderWidth: 1,
    borderColor: "#403572",
    borderRadius: 3,
    height: 18,
    width: 18,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2,
  },

  image: {
    width: 18,
    height: 18,
  },
});
