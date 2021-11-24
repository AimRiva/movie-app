import React, { useState, useEffect } from 'react';
import MovieItem from "./MovieItem";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    // const [ manga, setManga] = useState([]);
    const [text, setText] = useState ('');


    useEffect(() => {
        

        var myHeaders = new Headers();
        myHeaders.append("X-MAL-CLIENT-ID", "f92a8d1d21d2961f22ba51f005dc77fd");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders
        };

        fetch(`https://cors-anywhere.herokuapp.com/api.myanimelist.net/v2/manga/ranking?limit=20`, requestOptions)
        .then(response => response.json())
        .then(result => setMovies(result.data))

        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("X-MAL-CLIENT-ID", "f92a8d1d21d2961f22ba51f005dc77fd");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders
        };

        // hit TMDB Rest API endpoint to search for a movie
        fetch(`https://cors-anywhere.herokuapp.com/api.myanimelist.net/v2/manga?q=${text}&limit=20`, requestOptions)
        .then(response => response.json())
        .then(result => setMovies(result.data))
    
        setText('');
      }

    const handleChange = (e) => {setText(e.target.value)};

    return (
        <section className="">
            <div className="container ">
                <div className="my-4 text-center">
                    <h2>Search Manga</h2>
                     <form onSubmit={handleSubmit} className="mb-2" >
                            <input type="text" className="form-control text-center" placeholder="Search Manga by Text" onChange={handleChange} value={text} />
                        </form>
                </div>

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                {/* { movies.map((movie) => 
                console.log(movie.node)
                )} */}

                { movies.map((movie) => <MovieItem key={movie.node.id} movie={movie} />)}

                </div>    
            </div>
        </section>
    );
}

export default Movies;