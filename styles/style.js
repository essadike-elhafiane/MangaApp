import { StatusBar, View, Text, StyleSheet, Image } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  mangaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    gap: 10,
    flexWrap: "wrap",
    maxWidth: 1500,
  },
  mangaCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    alignItems: "center",
    minWidth: 80,
    minHeight: 100,
    height: "auto",
    width: "25vw",
    maxHeight: 300,
    maxWidth: 200,
  },
  header: {
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  mangaImage: {
    minWidth: 80,
    minHeight: 90,
    borderRadius: 5,
    height: "28vw",
    width: "25vw",
    maxHeight: 250,
    maxWidth: 200,
  },
  mangaTitle: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  searchBar: {
    width: "98%",
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  searchBarInput: {
    backgroundColor: "#f9f9f9",
  },
});
