import React from "react";
import PropTypes from "prop-types";

function containsHTML(str) {
  return /<\/?[a-z][\s\S]*>/i.test(str);
}

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.type = props.type;
    this.html = props.html;
    this.value = props.value;
    this.markAsRead = props.markAsRead;
  }

  render() {
    let listItem;

    if (!containsHTML(this.value)) {
      listItem = (
        <li
          style={{ color: this.type === "urgent" ? "red" : "blue" }}
          data-notification-type={this.type}
          onClick={() => this.markAsRead(this.id)}
        >
          {this.value}
        </li>
      );
    } else {
      listItem = (
        <li
          style={{ color: this.type === "urgent" ? "red" : "blue" }}
          data-notification-type={this.type}
          dangerouslySetInnerHTML={{ __html: this.html }}
          onClick={() => this.markAsRead(this.id)}
        ></li>
      );
    }

    return listItem;
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
