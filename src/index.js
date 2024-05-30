import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
import TextExpander from "./TextExpander";
import { useState } from "react";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TextExpander>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </TextExpander>
    <TextExpander
      buttonColor="blue"
      collapsedNumWords={3}
      expandButtonText="Expand"
      collapseButtonText="Collapse"
      buttonTextColor="red"
      className="box-text-expander"
    >
      Stefcho e bati picha maina
    </TextExpander>
    <TextExpander
      buttonColor="yellow"
      buttonTextColor="red"
      collapsedNumWords={5}
      expandButtonText="Open"
      collapseButtonText="Close"
      expanded={true}
    >
      Space travel requires some seriously amazing technology and collaboration
      between countries, private companies, and international space
      organizations. And while it's not always easy (or cheap), the results are
      out of this world. Think about the first time humans stepped foot on the
      moon or when rovers were sent to roam around on Mars.
    </TextExpander>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={20} color="red" className="test" defaultRating={1} />
    <Test></Test> */}
    {/* <App /> */}
  </React.StrictMode>
);
