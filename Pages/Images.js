import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {  View, ScrollView, Image, ActivityIndicator } from "react-native";


import {ImagesStyle} from "./../styles/imagesStyle";


const Images = ({ navigation, route }) => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    // navigation.setOptions({ title: route.params.title });
    const res = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/manga/Images?name=" + route.params.href
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

      <ScrollView contentContainerStyle={ImagesStyle.ScrollView}>
        {Images.length ? (
          Images.map((manga, index) => (
            <Image key={index} source={{ uri: manga.image }} style={ImagesStyle.image} />
          ))
        ) : (
          <ActivityIndicator color={"#C8C8C8"} />
        )}
      </ScrollView>
   
  );
};

export default Images;

// imagesStyle.js


