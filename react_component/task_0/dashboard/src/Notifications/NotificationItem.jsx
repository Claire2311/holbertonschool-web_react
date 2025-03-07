import PropTypes from "prop-types";

function NotificationItem({ type, html, value }) {
  function containsHTML(str) {
    return /<\/?[a-z][\s\S]*>/i.test(str);
  }

  let listItem;

  if (!containsHTML(value)) {
    listItem = (
      <li
        style={{ color: type === "urgent" ? "red" : "blue" }}
        data-notification-type={type}
      >
        {value}
      </li>
    );
  } else {
    listItem = (
      <li
        style={{ color: type === "urgent" ? "red" : "blue" }}
        data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: html }}
      ></li>
    );
  }

  return listItem;
}

export default NotificationItem;

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.string,
  value: PropTypes.string.isRequired,
};
