import writePhoto from "../../assets/write.jpg";

import "./write.scss";

function Write() {
  return (
    <div className="write">
      <img className="write__img" src={writePhoto} alt="text" />
      <form className="write__form">
        <div className="write__form-group">
          <label htmlFor="file-input">
            <i class="write__icon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write__input"
            autoFocus={true}
          />
        </div>
        <div className="write__form-group">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write__input write__text"
          ></textarea>
        </div>
        <button className="write__submit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
