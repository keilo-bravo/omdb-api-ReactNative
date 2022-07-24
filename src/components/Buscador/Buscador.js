import React from "react";
import { View, Text, TextInput, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, addMovieFavorite } from '../../Redux/actions/index.js';

export default function Buscador() {

  const dispatch = useDispatch()
  const { moviesLoaded } = useSelector(state => state)
  const [title, settitle] = React.useState("")


  const handleChange = (event) => {
    settitle(event);
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(getMovies(title));
  }


  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      paddingLeft: 10,
      paddingRight: 10
    },
    tinyLogo: {
      width: 80,
      height: 80,
    },
    buscador: {
      fontSize: 30,
      paddingTop: 20,
    },
    logo:{
      marginTop: 18,
      width: 30,
      height: 30,
    },
    poster: {
      width: 135,
      height: 200,
    },
    posterText: {
      width: 200,
      padding: 10,
      fontSize: 20,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      width: 260,
      padding: 10,
    },
    flexible: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: 10,
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.flexible}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2459/2459778.png',
          }}
        />
        <Text style={styles.buscador} >Pelis Plus</Text>
      </View>
      <View>
        <Text>Película: </Text>
        <View style={styles.flexible}>
          <TextInput
            name="title"
            type="text"
            id="text"
            placeholder="Movie Title"
            autoComplete="off"
            defaultValue={title}
            style={styles.input}
            onChangeText={(e) => handleChange(e)}
          />
          <TouchableHighlight onPress={(e) => handleSubmit(e)}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1179/1179120.png',
              }}
            />
          </TouchableHighlight>
        </View>
      </View>
      {
        moviesLoaded && moviesLoaded?.map((movie) => (
          <View key={movie.imdbID} style={styles.flexible}>
            <Image
              style={styles.poster}
              source={{
                uri: `${movie.Poster==="N/A" ? 
                "https://skydomepictures.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png" :
                movie.Poster}`,
              }}
            />
            <Text style={styles.posterText}>
              {movie.Title}
              {' '}
              {movie.Year}
            </Text>
          </View>
        ))
      }
    </View>
  );
}
