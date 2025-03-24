import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead } = this.props;
    return (
      <li
        style={{ color: type === "urgent" ? "red" : "blue" }}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead()}
      >
        {value}
      </li>
    );
  }
}

export default NotificationItem;

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  html: PropTypes.string,
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func,
};
