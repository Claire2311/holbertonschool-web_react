import { memo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const NotificationItem = memo(function NotificationItem({
  id,
  type,
  html,
  value,
  markAsRead,
}) {
  return (
    <li
      className={css(
        type === "urgent" ? styles.urgent : styles.default,
        styles.small
      )}
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

const styles = StyleSheet.create({
  urgent: {
    color: "red",
  },
  default: {
    color: "blue",
  },
  small: {
    "@media (max-width: 900px)": {
      borderBottom: "1px solid black",
      padding: "10px 8px",
      fontSize: "20px",
    },
  },
});
