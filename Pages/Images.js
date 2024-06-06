import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, ScrollView, Image, ActivityIndicator, TouchableWithoutFeedback } from "react-native";

import { ImagesStyle } from "./../styles/imagesStyle";
import { styles } from "../styles/style";

const Images = ({ navigation, route }) => {
  const [Images, setImages] = useState([]);
  const [showHeader, setShowHeader] = useState(true);
  const [zoomScale, setZoomScale] = useState(1);

  useEffect(() => {
    // navigation.setOptions({ title: route.params.title });
    const res = async () => {
      try {
        const res = await axios.get(
          "https://manga-backend-rho.vercel.app/manga/Images/" + btoa(route.params.href)
        );
        console.log("Response data:", res.data);
        setImages(res.data || []);
      } catch (error) {
        console.error("Error fetching manga data:", error);
      }
    };
    res();
  }, []);
 
  useEffect(() => {
    navigation.setOptions({
      headerShown: showHeader,

    });
  }
  , [showHeader]);
  
  return (
    <TouchableWithoutFeedback onPress={() => setShowHeader(!showHeader)}>
    <ScrollView
      contentContainerStyle={ImagesStyle.ScrollView}
      scrollEventThrottle={16}
      zoomScale={zoomScale}
      maximumZoomScale={3}
      minimumZoomScale={1}
     style={ImagesStyle.ScrollView}
    >

      {Images.length ? (
        Images.map((manga, index) => (
          <Image
            key={index}
            source={{ uri: manga.image }}
            style={ImagesStyle.image}
          />
        ))
        
      ) : (
        <ActivityIndicator color={"#C8C8C8"} />
      )}
    </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Images;

// imagesStyle.js
