import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 24,
  },

  handle: {
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#CFCFCF",
    marginBottom: 20,
  },

  image: {
    width: 72,
    height: 72,
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: "#8E8E93",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },

  button: {
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
