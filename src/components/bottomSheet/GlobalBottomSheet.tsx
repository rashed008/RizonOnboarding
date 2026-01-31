import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const { height } = Dimensions.get("window");

type Props = {
  children: React.ReactNode;
};

export default function GlobalBottomSheet({ children }: Props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.sheet}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  sheet: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 12,
    paddingBottom: 24,
    minHeight: height * 0.35,
  },
});
