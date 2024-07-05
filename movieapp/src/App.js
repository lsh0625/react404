import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import MovieList from './components/MovieList/MovieList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SingleMovie from './components/SingleMovie/SingleMovie';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MovieList type='popular' title='인기작품' emoji={Fire} />} />
          <Route
            path='/top_rated'
            element={<MovieList type='top_rated' title='최고평점' emoji={Star} />}
          />
          <Route
            path='/upcoming'
            element={<MovieList type='upcoming' title='예정작품' emoji={Party} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/singleMovie/:movieId" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
