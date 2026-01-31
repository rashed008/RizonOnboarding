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

  logoBox: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: "#FFF200",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  logoText: {
    fontWeight: "800",
    fontSize: 16,
    color: "#000",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#7A7A7A",
    textAlign: "center",
    marginBottom: 24,
  },

  buttonRow: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },

  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: "center",
  },

  secondaryText: {
    fontSize: 14,
    color: "#000",
  },

  primaryButton: {
    flex: 1,
    backgroundColor: "#000",
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: "center",
  },

  primaryText: {
    fontSize: 14,
    color: "#FFF",
    fontWeight: "600",
  },
});
