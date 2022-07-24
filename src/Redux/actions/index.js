import {API_URL, API_KEY} from '@env'
export function getMovies(titulo) {
  return function(dispatch) {
    return fetch(`${API_URL}?apikey=${API_KEY}&s=${titulo}`)
      .then(response => response.json())
      .then(json => {
        console.log("GET_MOVIES?",json);
        
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`)
      .then(response => response.json())
      .then(json => {
      dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
      console.log(json)
      });
  }
}

export function addMovieFavorite(movie) {
  return { type: "ADD_MOVIE_FAVORITE", payload:movie};
}

export function removeMovieFavorite(id) {
  return { 
    type:"DELETE_MOVIE_FAVORITE",
    payload:id
  };
}
