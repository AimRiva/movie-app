import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MovieDetails from '../components/MovieDetails';


const Details = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {

    var myHeaders = new Headers();
    myHeaders.append("X-MAL-CLIENT-ID", "f92a8d1d21d2961f22ba51f005dc77fd");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    // hit TMDB endpoint to get details of a movie
    fetch(`https://cors-anywhere.herokuapp.com/api.myanimelist.net/v2/manga/${movieId}?fields=rank,mean,alternative_titles,synopsis,main_picture`, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .then(result => setMovie(result))
        .catch(error => console.log('error', error));
    }, 
    // eslint-disable-next-line
  []);

  return(
    <>
      <Navigation />
      <MovieDetails movie={movie} />
      <Footer />
    </>
  );
}

export default Details;






