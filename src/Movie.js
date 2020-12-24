import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title,summary,poster,year,genres,rating}) {
    return (
    <div className="movie" >
        <img src={poster} alt={title} title={title}></img>
        <div clas="data">
            <h3 className="title">{title}({year})</h3>
            <h5 className="rating"><span className="source">평점 : </span>{rating}</h5>
            <h5 className="source">장르</h5>
            <ul className="genres">
                {genres.map((genre, index) => {
                    return <li key={index} className="genres_genre">{genre}</li>
                })}
            </ul>
            <h5 className="source">줄거리</h5>
            <p className="summary">{summary.slice(0,140)}</p>
        </div>
    </div>);
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    genres:PropTypes.array.isRequired,
    rating:PropTypes.number.isRequired

};


export default Movie;