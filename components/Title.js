import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ children, type }) => {
  return (
    <Text style={[styles.title, type === "thin" ? styles.thin : {}]}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 24,
  },
  thin: {
    fontSize: 24,
    fontWeight: "300",
    color: "#403572",
    paddingHorizontal: 24,
  },
});
