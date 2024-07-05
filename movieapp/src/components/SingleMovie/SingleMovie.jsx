
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Star from '../../assets/star.png';
import "./SingleMovie.css";

const SingleMovie=()=>{
    const { movieId } = useParams();
    const [movie, setMovie]=useState("");
    const [genres, setGenres]=useState([]);

    useEffect(() => {
		fetchSingleMovie();
	}, []);

    const fetchSingleMovie = async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=ad438ac94b772599d89d5c3e2ebe9856&language=ko`
		);
		const data = await response.json();
        setMovie(data);
        setGenres(data.genres)
        console.log(data.genres)
	};

    return(
        <div>영화 상세정보 보기
            <div>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie poster"
                className="movie_poster"
            />
            </div>
            <div>영화 아이디 : {movie.id}</div><br/>
            <div>영화 제목 : {movie.title}</div><br/>
            <div>original 제목 : {movie.original_title}</div><br/>
            <div>overview : <p>{movie.overview}</p></div><br/>
            <p>개봉일 : {movie.release_date}</p><br/>
            <p className="align_center">
                평점 : {movie.vote_average}
              <img src={Star} alt="rating icon" className="card_emoji" />
            </p><br/>
            <p>장르 : 
             {genres.map((genre, idx)=>
                <span key={idx}>{genre.name} | </span>
            )}
            </p><br/>
        </div>
    )
}
export default SingleMovie;