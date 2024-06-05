import React, { useEffect, useState } from "react";
import {
  StatusBar,
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { styles } from "./styles/style";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
import Season from "./Pages/Season";
import Images from "./Pages/Images";

const Stack = createNativeStackNavigator();



export default function App() {
  const [showHeader, setShowHeader] = useState(true);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const scrollHeight = event.nativeEvent.contentSize.height;
    const screenHeight = event.nativeEvent.layoutMeasurement.height;

    if (offsetY + screenHeight >= scrollHeight) {
      // Scrolling at the bottom
      setShowHeader(false);
    } else if (offsetY <= 0) {
      // Scrolling at the top
      setShowHeader(true);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Manga List" }}
        />
        <Stack.Screen
          styles={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Season"
          component={Season}
        />
        <Stack.Screen name="Images" component={Images} options={{
          headerShown: { showHeader},
          presentation: 'fullScreen',
          onScroll={handleScroll}
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
