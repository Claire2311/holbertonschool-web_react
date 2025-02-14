import PropTypes from "prop-types";

function NotificationItem({ type, html, value }) {
  function containsHTML(str) {
    return /<\/?[a-z][\s\S]*>/i.test(str);
  }

  let listItem;

  if (!containsHTML(value)) {
    listItem = <li data-priority={type}>{value}</li>;
  } else {
    listItem = (
      <li data-priority={type} dangerouslySetInnerHTML={{ __html: value }}></li>
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
