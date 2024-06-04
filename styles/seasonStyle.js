import { StyleSheet } from "react-native";

export const seasonStyles = StyleSheet.create({
   
    ScrollView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: 20,
        gap: 10,
        flexWrap: "wrap",
        maxWidth: 700,
        width: "100%",
        height: "auto",
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333', // Adjust color as needed
        paddingHorizontal: 16,
        paddingVertical: 12,
        height: "auto",
        width: "80vw",
        maxWidth: 500,
      },
      container: {
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        maxWidth: 700,
      },
      title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
      }
      ,
      SeasonItem: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        // alignItems: "space-between",
        justifyContent: "space-between",
        height: 50,
        width: "100%",
        hover: {
          backgroundColor: "#f0f0f0",
          TouchableOpacity: 0.8,
        },
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        marginBottom: 5,

      },
      SeasonItemText: {
        padding: 10,
        // backgroundColor: "red",
        width: 50,
      },
      SeasonItemDate: {
        padding: 10,
        // backgroundColor: "red",
        width: 150,
      },
      Cont: {
        width: "100vw",
        height: "100%",
        backgroundColor: "#f9f9f9",
        alignItems: "center",
        justifyContent: "center",
      },
});
