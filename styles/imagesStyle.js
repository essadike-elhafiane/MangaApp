
import { StyleSheet , Dimensions} from "react-native";
const screenWidth = Dimensions.get('window').width;

const ImagesStyle = StyleSheet.create({

  ScrollView: {
    margin:0,
    padding:0,
    // flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "100%",
    minWidth: screenWidth,
    maxWidth: screenWidth,
    width: screenWidth,
  },
  image: {
    minWidth:  screenWidth,
    maxWidth: 800,
    width: screenWidth,
    height: "auto",
    resizeMode: "contain",
    aspectRatio: 0.1,
  },
  image:{
    margin:0,
    padding:0,
    // minWidth: screenWidth,
    // maxWidth: screenWidth,
    // width: screenWidth,
    height: 'auto',
    aspectRatio: 0.642857143,
    resizeMode: 'contain',

  }
});

export { ImagesStyle };