import React, { useEffect, useState } from "react";
import { StatusBar, View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import axios from "axios";
import { styles } from "./../styles/style";
import { TouchableOpacity } from 'react-native';

function onPointerOver(title, href,  image, navigation) {
  console.log(
    'Over blue box offset: ',
    title,
    href,
  );
    navigation.navigate('Season', {title, href, image});
}

const MangaItem = ({ title, href, image, navigation }) => (
  <TouchableOpacity style={styles.mangaCard} onPress={() => onPointerOver(title, href, image, navigation)}>
    <Image source={{ uri: image }} style={styles.mangaImage} />
    <Text style={styles.mangaTitle}>{title}</Text>
  </TouchableOpacity>
);

export default function Home({navigation}) {
  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/manga"
        );

        // Log the entire response to check its format
        console.log("Response data:", res.data);

        // Check if the response data is an array before setting state
        console.log("Manga data:", res);
        if (Array.isArray(res.data)) {
          setMangaData(res.data);
          // Log title, href, and image of each item in the fetched data
          // res.data.forEach((item) => {
          //   console.log("Title:", item.title);
          //   console.log("Href:", item.href);
          //   console.log("Image:", item.image);
          // });
        } else {
          console.error("Error: Response data is not an array.");
        }
      } catch (error) {
        console.error("Error fetching manga data:", error);
      }
    };
   
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.mangaContainer}>
        {mangaData.length? mangaData.map((manga, index) => (
          <MangaItem
            key={index}
            title={manga.title}
            href={manga.href}
            image={manga.image}
            navigation={navigation}
          />
        )): 
        <ActivityIndicator color={"#C8C8C8"}/>}
      </ScrollView>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}