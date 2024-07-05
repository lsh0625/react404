import "./MovieList.css";
import Fire from '../../assets/fire.png';
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const MovieList=({type, title, emoji}) =>{
    console.log(type)
    const [movies, setMovies] = useState();
    const [filterMovies, setFilterMovies] = useState([]); //필터링한 영화데이터
    const [minRating, setMinRating] = useState(0);
    const [sort, setSort] = useState({
		by: 'default',
		order: 'asc',
	});

    useEffect(() => {
		fetchMovies();
	}, [type,]);

    const fetchMovies = async () => {
        console.log(type)
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${type}?api_key=ad438ac94b772599d89d5c3e2ebe9856&language=ko`
		);
		const data = await response.json();
		console.log(data.results);
        setMovies(data.results);
        setFilterMovies(data.results); //처음엔 모든 영화를 입력
	};

    const handleFilter = (rate) => {
		if (minRating === rate) {
			setMinRating(0);
			setFilterMovies(movies);
		} else {
			setMinRating(rate);
			const filtered = movies.filter((movie) => movie.vote_average >= rate);
			setFilterMovies(filtered);
		}
    
	};
    const handelSort = (e) => {
		const { name, value } = e.target;
		setSort((prev) => ({ ...prev, [name]: value }));
	};
	console.log(sort);

    useEffect(() => {
        if (sort.by !== "default") {
            const sortedMovies =_.orderBy(filterMovies, [sort.by], [sort.order]);
            setFilterMovies(sortedMovies);
        } 
    }, [sort]);

	return (
		<section className='movie_list' id={`${type}`}>
			<header className='align_center movie_list_header'>
				<h2 className='align_center movie_list_heading'>
					{title} <img src={Fire} alt='fire emoji' className='navbar_emoji' />
				</h2>

				<div className='align_center movie_list_fs'>
					<ul className='align_center movie_filter'>
						<li className={minRating === 8 ? "movie_filter_item active": "movie_filter_item"} 
                            onClick={()=>handleFilter(8)}>8+ Star</li>
						<li className={minRating === 7 ? "movie_filter_item active": "movie_filter_item"}  
                            onClick={()=>handleFilter(7)}>7+ Star</li>
						<li className={minRating === 6 ? "movie_filter_item active": "movie_filter_item"} 
                            onClick={()=>handleFilter(6)}>6+ Star</li>
					</ul>

					<select name='by' id='by' onChange={handelSort} className='movie_sorting'>
						<option value='default'>SortBy</option>
						<option value='release_date'>Date</option>
						<option value='vote_average'>Rating</option>
					</select>
					<select name='order' id='order' onChange={handelSort} className='movie_sorting'>
						<option value='asc'>Ascending</option>
						<option value='desc'>Descending</option>
					</select>
				</div>
			</header>

			<div className='movie_cards'>
                {filterMovies.map((movie)=>
                    <Link to="/movieDetail">
                        <MovieCard key={movie.id} movie={movie}/>
                    </Link>
                )}
                
			</div>
		</section>
	);
};
export default MovieList;
