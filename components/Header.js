import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = ({ title }) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      {/* hitSlop - This defines how far your touch can start away from the button.  */}
      <TouchableOpacity onPress={openDrawer} hitSlop={8}>
        <Image style={styles.icon} source={require("../assets/menu.png")} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Splash")}
        hitSlop={8}
      >
        <Image style={styles.icon1} source={require("../assets/logout.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: "#403572",
    fontWeight: "500",
  },
  icon: {
    width: 20,
    height: 18,
    marginLeft: -12,
  },
  icon1: {
    width: 23,
    height: 22,
    marginRight: -12,
  },
});
