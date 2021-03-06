import React from "react";
import $ from "jquery";
import iconCSS from "../icon.less";
import colors from "../../rules/colors.js";
class Comments extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.path) return;
    const props = this.props;
    $(this.path).attr(
      "fill",
      `${props.fillcolor ? colors[props.fillcolor] : "currentColor"}`
    );
    $(this.svg)
      .removeClass()
      .addClass(iconCSS.icon);
  }
  render() {
    const props = this.props;
    return (
      <svg
        ref={svg => (this.svg = svg)}
        className="icon"
        viewBox="0 0 1024 1024"
        width={props.size ? props.size : "20px"}
        height={props.size ? props.size : "20px"}
        {...props}
      >
        <defs />
        <path
          ref={path => (this.path = path)}
          d="M131.254 789.333c-43.444 0-78.741-35.859-78.741-79.915V69.333L26.256 96h866.597c43.379 0 78.634 35.853 78.634 79.916V816l26.257-26.667h-480.51l-6.585 4.421-224.737 150.882c-12.096 8.122-15.42 24.665-7.424 36.95 7.997 12.287 24.286 15.663 36.383 7.541l224.736-150.881-14.479 4.42H1024v-666.75c0-73.502-58.751-133.25-131.147-133.25H0V709.419c0 73.508 58.805 133.249 131.254 133.249h136.863c14.501 0 26.257-11.94 26.257-26.667 0-14.728-11.756-26.667-26.257-26.667H131.254z"
        />
        <path d="M367.59 442.667c0-58.91-47.022-106.667-105.026-106.667s-105.026 47.756-105.026 106.667c0 58.91 47.022 106.666 105.026 106.666S367.59 501.577 367.59 442.667zm-157.539 0c0-29.456 23.511-53.334 52.513-53.334s52.513 23.878 52.513 53.334c0 29.455-23.51 53.333-52.513 53.333-29.002 0-52.513-23.878-52.513-53.333zM630.154 442.667c0-58.91-47.022-106.667-105.026-106.667s-105.025 47.756-105.025 106.667c0 58.91 47.021 106.666 105.025 106.666 58.004 0 105.026-47.756 105.026-106.666zm-157.539 0c0-29.456 23.511-53.334 52.513-53.334s52.513 23.878 52.513 53.334c0 29.455-23.51 53.333-52.513 53.333-29.002 0-52.513-23.878-52.513-53.333zM892.718 442.667c0-58.91-47.022-106.667-105.026-106.667s-105.025 47.756-105.025 106.667c0 58.91 47.021 106.666 105.025 106.666 58.004 0 105.026-47.756 105.026-106.666zm-157.539 0c0-29.456 23.511-53.334 52.513-53.334s52.513 23.878 52.513 53.334c0 29.455-23.51 53.333-52.513 53.333-29.002 0-52.513-23.878-52.513-53.333z" />
      </svg>
    );
  }
}
export default Comments;
