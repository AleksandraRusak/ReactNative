import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, type, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, type === "purple" ? styles.purpleBg : {}]}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#403572",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 13,
    marginVertical: 8,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  purpleBg: {
    backgroundColor: "#403572",
  },
});
