import React, { useState } from "react";
import "./SMSSegmentCalc.css";

function SearchBar() {
  const [smsInputText, setSmsInputText] = useState("");
  const [count, setCount] = useState(0);
  const [countChar, setCountChar] = useState("");
  const wordCount = countChar.split(" ").filter(Boolean).length;

  const handleTextChange = (e) => {
    setSmsInputText(e.target.value);
    setCount(e.target.value.length);
    setCountChar(e.target.value);
  };

  function ascii_to_hexa(str) {
    let arr1 = []; // Initialize an empty array to store the hexadecimal values
   
    for (
      let n = 0, l = str.length;
      n < l;
      n++ // Iterate through each character in the input string
    ) {
      let hex = Number(str.charCodeAt(n)).toString(16); // Convert the ASCII value of the current character to its hexadecimal representation

      if (hex.length === 2) {
        hex = "0x00" + hex;
      } else if (hex.length === 3) {
        hex = "0x0" + hex;
      } else hex = "0x" + hex;
      
      const combinedValues = {
        hex,
        code: str[n]
      }
      
      arr1.push(combinedValues); // Push the hexadecimal value to the array. This array is getting assigned a number for each character entered
    }
    return arr1; // Join the hexadecimal values in the array to form a single string
  }

  const hex_array = ascii_to_hexa(smsInputText);
  console.log(hex_array);
  


  function charHighlight() {
    document.getElementById("characterSelection").className += " selected";
  }
  function charHighlightRemover() {
    document.getElementById("characterSelection").className = "messageStyleSettings";
  }




  return (
    <form>
      <h1>SMS Segment Calculator</h1>
      <div className="textInputBox">
        <textarea value={smsInputText} onChange={handleTextChange}></textarea>
      </div>
      <div className="information-box">
        <span className="label">Encoding</span>
        <span className="value" id="encoding-used">
        {hex_array === 'u' && <p>UCS-2</p>}
        {hex_array !== 'u' && <p>GSM-7</p>}
        </span>
        <span className="label">Word Count</span>
        <span className="value" id="word-counter">
          {wordCount}
        </span>
        <span className="label">Character Count</span>
        <span className="value" id="unicode-char-counter">
          {count}
        </span>
        <span className="label">Number of Unicode scalars</span>
        <span className="value" id="unicode-scalar-counter">
          {count}
        </span>
        <span className="label">Message Size</span>
        <span className="value" id="message-size-counter">
          {smsInputText.length * 16}
        </span>
        <span className="label">Total size submitted</span>
        <span className="value" id="total-size-counter">
        {smsInputText.length * 16}
        </span>
      </div>
      <div className="textOutputBox">
        <div className="textOutputBoxInner">
          <span className="label">Parsed Characters</span>
          <span className="value">
            <div className="message-blocks">
              {hex_array.map((textPiece, key) => {
                  return (
                    <span className='messageStyleSettings' id="characterSelection" onMouseOver={charHighlight} onMouseOut={charHighlightRemover} key={key}>
                      {textPiece.code}
                    </span>
                  );
                }
              )}
            </div>
          </span>
          <span className="label">Parsed Hex Values</span>
          <span className="value">
            <div className="hex-blocks">
              {hex_array.length === 0 && <p>Please enter your message!</p>}
              {hex_array.map((hexPiece, key) => {
                    return (
                    <span className='messageStyleSettings ' id="characterSelection" onMouseOver={charHighlight} onMouseOut={charHighlightRemover} key={key}>                
                      {hexPiece.hex}                
                    </span>                       
                  );} 
                )}            
            </div>
          </span>
        </div>
      </div>
    </form>
  ); 
}
 

export const SMSSegmentCalc = () => {
  return <SearchBar />;
};
