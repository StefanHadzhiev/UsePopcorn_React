import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.propTypes = {
  text: PropTypes.string,
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonInline: PropTypes.bool,
  className: PropTypes.string,
};

export default function TextExpander({
  children = "Some text",
  collapsedNumWords = 15,
  expandButtonText = "Expand text",
  collapseButtonText = "Collapse text",
  buttonColor = "",
  buttonTextColor = "",
  expanded = false,
  className = "",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [wordsArray, setWordsArray] = useState(children.split(" "));

  const displayText = isExpanded ? collapseButtonText : expandButtonText;

  function handleOnClick() {
    setIsExpanded(!isExpanded);
  }

  var buttonStyle = {
    background: buttonColor ? buttonColor : "none",
    color: buttonTextColor ? buttonTextColor : "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
  };

  return (
    <div className={className}>
      <span>
        {isExpanded
          ? children
          : wordsArray.slice(0, collapsedNumWords).join(" ").toString() + "..."}
      </span>
      <Button style={buttonStyle} onClick={handleOnClick} color={buttonColor}>
        {displayText}
      </Button>
    </div>
  );
}

function Button({ children, onClick, style }) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}
