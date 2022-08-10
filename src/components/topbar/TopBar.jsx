import React from "react";
import { Link } from "react-router-dom";
import "./topbar.scss";

function TopBar() {
  const user = true;

  return (
    <div className="top">
      <div className="top__left">
        <i className="top__icon fa-brands fa-square-facebook"></i>
        <i className="top__icon fa-brands fa-square-twitter"></i>
        <i className="top__icon fa-brands fa-square-pinterest"></i>
        <i className="top__icon fa-brands fa-square-instagram"></i>
      </div>
      <div className="top__center">
        <ul className="top__list">
          <li className="top__list-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="top__list-item">
            <Link to="/post/:postId">POST</Link>
          </li>
          {user && (
            <li className="top__list-item">
              <Link to="/settings">SETTINGS</Link>
            </li>
          )}
          <li className="top__list-item">
            <Link to="/write">WRITE</Link>
          </li>
          <li className="top__list-item">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="top__right">
        {user ? (
          <img
            className="top__img"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <ul className="top__list">
            <li className="top__list-item">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="top__list-item">
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}

        <i className="top__search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
