import * as database from "@/database/util";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface Fav {
  id: String,
  Poster: String,
  Title: String,
  Type: String,
  Year: String,
  imdbID: String,
}

export default function Index() {

  const [favList, setFavList] = useState<Fav[]>([])

  // Example for getAll
  useEffect(() => {
    const fetchData = async () => {
      setFavList(await database.getAll());
      console.log("-----------------------")
      favList.forEach((e) => {
        console.log(e)
      })
      console.log("-----------------------")
    }
    fetchData();

    var id: String = "lrVv20bAOAj1Bfx8Lyjl"
    addFav
    updateFav(id);
    deleteFav(id);
  }, []);

  // Example for adding
  const addFav = async () => {
    await database.save({
      Poster: "poster",
      Title: "title",
      Type: "movie",
      Year: "2024",
      imdbID: "imdbId",
    })
    setFavList(await database.getAll());
  }

  // Example for updating
  const updateFav = async (id: String) => {
    await database.update(id, {
      Poster: "poster modified",
      Title: "title modified",
      Type: "movie modified",
      Year: "2024 modified",
      imdbID: "imdbID modified",
    })
    setFavList(await database.getAll());
  }

  // Example for deleting
  const deleteFav = async (id: String) => {
    await database.remove(id)
    setFavList(await database.getAll());
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
