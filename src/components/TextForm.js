

import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  };
  const handlesliceClick = () => {
    let newText = text.slice(5, 10);
    setText(newText);
    props.showAlert("Slice Method Apply on index 5 to 10.", "success");
  };
  const handleReplaceClick = () => {
    let newText = text.replace("Text", "Replace");
    setText(newText);
    props.showAlert(`Replace only "Text" word.`, "success");
  };
  const handleConcatClick = () => {
    let newText = text + " This String is Concat";
    setText(newText);
    props.showAlert("Concat Method Apllied", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Screen!", "success");
  };

  const handleCaptClick = () => {
    /*Explanation:
    ^\w : first character of the string
    | : or
    \s\w : first character after whitespace
    (^\w|\s\w) Capture the pattern.
    g Flag: Match all occurrences.*/

    let newText = text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    setText(newText);
    props.showAlert("Capitalized!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Space from given Lines", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  let [text, setText] = useState("");

  return (
    <React.Fragment>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>{props.heading}</h2>

        <div className="  my-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#c7c7c7" : "light",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter Text here!"
          ></textarea>

          <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleUpClick}>
            Convert to UpperCase
          </button>

          <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleLowClick}>
            Convert to lowerCase
          </button>

          <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handlesliceClick}>
            Slice
          </button>

          <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleReplaceClick}>
            Replacing
          </button>

          <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleConcatClick}>
            String concat
          </button>

          <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleCaptClick}>
            Capitilized
          </button>

          <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>

          <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleClearClick}>
            Clear
          </button>
        </div>
      </div>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Summary</h2>
        <p>
          {/* Total words are: {text.length > 0 ? text.trim().split(" ").length : 0}{" "} */}
          Total words are: {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}
          Total Character: {text.length}
        </p>
        <p>
          Taking Total time to read in minutes: {0.008 * text.split(" ").filter((element)=> {return element.length !==0}).length}
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </React.Fragment>
  );
}
