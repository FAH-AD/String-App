import React, { useState } from "react";


export default function TextArea(props) {
  const [text, setText] = useState("Enter text here");
  const [mystyle, setMystyle] = useState({
    fontFamily: "Roboto",
    
    // color: props.mode === "dark" ?"black" : "white"
  });
  const getUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const getLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const changeDetect = (event) => {
    console.log("on changer");
    setText(event.target.value);
  };
  const getClear = () => {
    setText("");
  };

  const txtChivo = () => {
    setMystyle({
      fontFamily: "ChivoMono",
      // backgrounColor: props.mode === "light" ? "black" : "white"
    });
  };
  const txtDongle = () => {
    setMystyle({
      fontFamily: "Dongle",
      fontSize: "20px",
      // backgrounColor: props.mode === "light" ? "black" : "white"
    });
  };
  const txtMerri = () => {
    setMystyle({
      fontFamily: "Merriweather",
      // backgrounColor: props.mode === "light" ? "black" : "white"
    });
  };
  const txtRoman = () => {
    setMystyle({
      fontFamily: "Times New Roman",
      // backgrounColor: props.mode === "light" ? "black" : "white"
    });
  };
  const txtRoboto = () => {
    setMystyle({
      fontFamily: "Roboto",
      // backgrounColor: props.mode === "light" ? "black" : "white"
    });
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div className="Container mt" style={{ color:props.mode === "dark" ? "white" : "black"}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3 mt  "  >
          <textarea className="form-control"
            id="myBox"
            rows="6"
            value={text}
            onChange={changeDetect}
          
            style={mystyle}
              
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={getUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={getLoClick}>
          Convert to Lower Case
        </button>
        <button
          className="btn btn-primary mx-2 dropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <button className="nav-link dropdown-toggle" href="">
            Change Font
          </button>

          <ul className="dropdown-menu">
            <li>
              <button onClick={txtChivo} className="dropdown-item">
                ChivoMono
              </button>
            </li>
            <li>
              <button onClick={txtRoman} className="dropdown-item">
                Times New Roman
              </button>
            </li>

            <li>
              <button onClick={txtMerri} className="dropdown-item">
                Merriweather
              </button>
            </li>
            <li>
              <button onClick={txtDongle} className="dropdown-item">
                Dongle
              </button>
            </li>
            <li>
              <button onClick={txtRoboto} className="dropdown-item">
                Roboto
              </button>
            </li>
          </ul>
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={getClear}>
          Clear
        </button>
      </div>
      <div className="container my-3" style={{ color:props.mode === "dark" ? "white" : "black"}}>
        <h1>Your text Summary!</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters
        </p>
        <p>
          {" "}
          An average reader will take{" "}
          {(text.split(" ").length / 183).toFixed(3)} minutes to read it
        </p>
      </div>
    </>
  );
}
