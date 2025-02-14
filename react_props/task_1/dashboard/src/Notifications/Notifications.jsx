import "./Notifications.css";
import closeImage from "../assets/close-button.png";
import { getLatestNotification } from "../utils/utils";

function Notifications() {
  return (
    <div className="notifications">
      <p>Here is the list of notifications</p>
      <button
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img
          src={closeImage}
          alt="Close icon"
          style={{ width: "10px", height: "10px" }}
        />
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
