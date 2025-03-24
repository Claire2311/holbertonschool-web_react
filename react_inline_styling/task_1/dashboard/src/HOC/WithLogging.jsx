// import React from "react";
// import PropTypes from "prop-types";

// class WithLogging extends React.Component {
//   componentName =
//     this.props.Component.displayName ||
//     this.props.Component.name ||
//     "Component";

//   componentDidMount() {
//     console.log(`Component ${this.componentName} is mounted`);
//   }

//   componentWillUnmount() {
//     console.log(`Component ${this.componentName} is going to unmount`);
//   }

//   static displayName = `WithLogging(${this.componentName})`;

//   render() {
//     const { Component, ...rest } = this.props;
//     return <Component {...rest} />;
//   }
// }

// export default function withLogging(WrappedComponent) {
//   function WithLoggingComponent(props) {
//     return <WithLogging WrappedComponent={WrappedComponent} {...props} />;
//   }

//   WithLoggingComponent.displayName = `WithLogging(${
//     WrappedComponent.displayName || WrappedComponent.name || "Component"
//   })`;

//   return WithLoggingComponent;
// }

// WithLogging.propTypes = {
//   Component: PropTypes.func,
// };
