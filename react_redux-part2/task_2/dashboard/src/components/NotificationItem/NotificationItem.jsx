import { memo } from "react";
import PropTypes from "prop-types";
import "./NotificationItem.css";

const NotificationItem = memo(function NotificationItem({
  id,
  type,
  html,
  value,
  markAsRead,
}) {
  return (
    <li
      className={`notification-item ${
        type === "urgent" ? "urgent" : "default"
      }`}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
});

export default NotificationItem;

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  html: PropTypes.string,
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func,
};
