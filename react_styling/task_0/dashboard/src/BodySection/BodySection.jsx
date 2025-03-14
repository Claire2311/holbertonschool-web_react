import PropTypes from "prop-types";
import React from "react";

class BodySection extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h2 className="bodySection">{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySection;
