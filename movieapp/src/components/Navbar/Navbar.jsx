import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import DarkMode from "../DarkMode/DarkMode";
import LoginIcon from "../../assets/login_icons.png"

import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>MovieApp</h1>

      <div className="navbar_links">
        <DarkMode />
        <NavLink to="/" href="#popular">
          인기순
          <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </NavLink>
        <NavLink to="/top_rated" href="#top_rated">
          평점순
          <img className="navbar_emoji" src={Star} alt="star emoji" />
        </NavLink>
        <NavLink to="/upcoming" href="#upcoming">
          최신순
          <img className="navbar_emoji" src={Party} alt="party emoji" />
        </NavLink>
        <NavLink to="/login" href="#login">
          로그인
          <img className="navbar_emoji" src={LoginIcon} alt="party emoji" />
        </NavLink>
      </div>
    </nav>
  );
}
