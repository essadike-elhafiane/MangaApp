import React, { useEffect, useState } from "react";
import { StatusBar, View, Text, ScrollView, Image, ActivityIndicator, FlatList } from "react-native";
import axios from "axios";
import { styles } from "./../styles/style";
import { TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

function onPointerOver(title, href, image, navigation) {
  console.log(
    'Over blue box offset: ',
    title,
    href,
  );
  navigation.navigate('Season', { title, href, image });
}

const MangaItem = ({ title, href, image, navigation }) => (
  <TouchableOpacity style={styles.mangaCard} onPress={() => onPointerOver(title, href, image, navigation)}>
    <Image source={{ uri: image }} style={styles.mangaImage} />
    <Text style={styles.mangaTitle}>{title}</Text>
  </TouchableOpacity>
);

export default function Search({ navigation }) {
  const [mangaData, setMangaData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMangaData, setFilteredMangaData] = useState([]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchData = async () => {
      try {
        const res = await axios.get("https://manga-backend-rho.vercel.app/manga/search/" + searchQuery);

        console.log("search:", res.data.mangaData);
        console.log("Manga data:", res);
        if (Array.isArray(res.data.mangaData)) {
          setMangaData(res.data.mangaData);
        } else {
          console.error("Error: Response data is not an array.");
        }
      } catch (error) {
        console.error("Error fetching manga data:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const onSearch = (text) => {
    setSearchQuery(text);
    const filtered = mangaData.filter((manga) =>
      manga.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMangaData(filtered);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search manga..."
        onChangeText={onSearch}
        value={searchQuery}
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
      />
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
      <StatusBar style="auto" />
    </View>
  );
}