import "./sidebar.scss";

import aboutMePhoto from "../../assets/sidebar-photo.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">ABOUT ME</span>
        <img src={aboutMePhoto} alt="aboutme" />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">CATEGORIES</span>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">Life</li>
          <li className="sidebar__list-item">Music</li>
          <li className="sidebar__list-item">Style</li>
          <li className="sidebar__list-item">Sport</li>
          <li className="sidebar__list-item">Tech</li>
          <li className="sidebar__list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">FOLLOW US</span>
        <div className="sidebar__social">
          <i className="sidebar__icon fa-brands fa-square-facebook"></i>
          <i className="sidebar__icon fa-brands fa-square-twitter"></i>
          <i className="sidebar__icon fa-brands fa-square-pinterest"></i>
          <i className="sidebar__icon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
