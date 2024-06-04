import {
  StatusBar,
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";

import { seasonStyles } from "./../styles/seasonStyle";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { TouchableOpacity } from "react-native";

const SeasonsItems = ({ href, number, date, navigation }) => {
  return (
    <TouchableOpacity
      style={seasonStyles.SeasonItem}
      onPress={() => navigation.navigate("Images", { href })}
    >
      <Text style={seasonStyles.SeasonItemText}>{number}</Text>
      <Text style={seasonStyles.SeasonItemDate}>{date}</Text>
    </TouchableOpacity>
  );
};

const Season = ({ navigation, route }) => {
  const [Description, setDescription] = useState("");
  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: route.params.title });
    const res = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/manga/seasons?name=" + route.params.href
        );
        console.log("Response data:", res.data.description, res.data.mangaData);
        const description = res.data.description || "No description available";
        setDescription(description);
        setMangaData(res.data.mangaData || []);
      } catch (error) {
        console.error("Error fetching manga data:", error);
      }
    };
    res();
  }, []);

  return (
    <View style={seasonStyles.Cont}>
      <ScrollView contentContainerStyle={seasonStyles.ScrollView}>
        <View style={seasonStyles.container}>
          <Image
            source={{ uri: route.params.image }}
            style={{ width: 200, height: 300 }}
          />
          <Text style={seasonStyles.title}>{route.params.title}</Text>
        </View>
        <View style={seasonStyles.container}>
          <Text style={seasonStyles.description}>{Description}</Text>
          {mangaData.length ? (
            mangaData.map((manga, index) => (
              <SeasonsItems
                key={index}
                number={manga.number}
                date={manga.date}
                href={manga.href}
                navigation={navigation}
              />
            ))
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Season;
