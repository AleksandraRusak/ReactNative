import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from "./links";

function DrawerContent(props) {
  const { navigation } = props;

  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.row}>
        <TouchableOpacity onPress={closeDrawer} hitSlop={8}>
          <Image style={styles.icon} source={require("../assets/close_.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      <Text
        style={styles.link}
        onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}
      >
        Privacy Policy
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}
      >
        Terms and Conditions
      </Text>
      <Text style={styles.link} onPress={() => navigation.navigate("Splash")}>
        Log out
      </Text>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 20,
    color: "#403572",
    fontWeight: "500",
    marginLeft: 60,
  },
  link: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
    margin: 10,
    marginHorizontal: 16,
    padding: 10,
    backgroundColor: "#F3F2F2",
  },
  icon: {
    width: 26,
    height: 26,
  },
});

export default DrawerContent;
