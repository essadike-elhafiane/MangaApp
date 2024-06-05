import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, ScrollView, Image, ActivityIndicator } from "react-native";

import { ImagesStyle } from "./../styles/imagesStyle";
import { styles } from "../styles/style";

const Images = ({ navigation, route }) => {
  const [Images, setImages] = useState([]);
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

  return (
   
    <ScrollView
      contentContainerStyle={ImagesStyle.ScrollView}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      zoomScale={zoomScale}
      maximumZoomScale={3} // Maximum zoom scale
      minimumZoomScale={1} // Minimum zoom scale
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
  );
};

export default Images;

// imagesStyle.js
