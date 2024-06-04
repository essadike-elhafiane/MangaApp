
import { StyleSheet , Dimensions} from "react-native";
const screenWidth = Dimensions.get('window').width;
const ImagesStyle = StyleSheet.create({

  ScrollView: {
    flex: 1,
    backgroundColor: "red",
    height: "auto",
    minWidth: screenWidth,
    maxWidth: screenWidth,

  },
  image: {
    minWidth: screenWidth,
    maxWidth: screenWidth,
    height: "auto",
    resizeMode: "contain",
    aspectRatio: 0.1,
    // marginTop: -50,
  },
});

export { ImagesStyle };