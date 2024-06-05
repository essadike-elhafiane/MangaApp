
import { StyleSheet , Dimensions} from "react-native";
const screenWidth = Dimensions.get('window').width;
const ImagesStyle = StyleSheet.create({

  ScrollView: {
    flex: 1,
    backgroundColor: "#fff",
    height: "auto",
    minWidth: screenWidth,
    maxWidth: 800,
    position: "absolute",
    zIndex: 100,
    overflow: "scroll",

  },
  image: {
    minWidth:  screenWidth,
    maxWidth: 800,
    width: screenWidth,
    height: "auto",
    resizeMode: "contain",
    aspectRatio: 0.1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity or color as needed
  },
});

export { ImagesStyle };