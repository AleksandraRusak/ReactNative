import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={require("../assets/onboarding2.png")}
        />

        <View style={styles.footer}>
          <Text style={styles.title}>Get things done with Tasks App!</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title1}>Organize work and life</Text>
        <Text style={styles.subtitle}></Text>

        <Button onPress={() => navigation.navigate("Tasks")} type={"purple"}>
          Get started
        </Button>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    flex: 1,
  },
  content: {
    padding: 50,
    paddingTop: 0,
    backgroundColor: "white",
  },
  title: {
    color: "#403572",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 21,
  },

  title1: {
    color: "#403572",
    textAlign: "center",
    fontSize: 18,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 16,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    height: 50,
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
