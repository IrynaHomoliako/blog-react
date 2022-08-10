import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.scss";

function Settings() {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__update-title">Update Your Account</span>
          <span className="settings__delete-title">Delete Your Account</span>
        </div>
        <form className="settings__form">
          <label>Profile Picture</label>
          <div className="settings__pp">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="file-input">
              <i class="settings__pp-icon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="user name" />
          <label>Email</label>
          <input type="email" placeholder="user email" />
          <label>Password</label>
          <input type="password" />
          <button className="settings__submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
