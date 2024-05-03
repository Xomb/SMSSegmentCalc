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
    console.log(arr1);
    return arr1; // Join the hexadecimal values in the array to form a single string
  }

  const hex_array = ascii_to_hexa(smsInputText);

  return (
    <form>
      <h1>SMS Segment Calculator</h1>
      <div className="textInputBox">
        <textarea value={smsInputText} onChange={handleTextChange}></textarea>
      </div>
      <div className="information-box">
        {/* <span className="label">
          Use
          <a href="https://www.twilio.com/docs/messaging/services#smart-encoding">
            Smart Encoding
          </a>
          ?
        </span>
        <div className="value">
          <select className="not-really-value" id="smart-encoding">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <span className="label">Encoding</span>
        <div className="value">
          <select className="not-really-value" id="encoding">
            <option value="auto">Automatic</option>
            <option value="GSM-7">GSM-7</option>
            <option value="UCS-2">UCS-2</option>
          </select>
        </div>
        <span className="label">Encoding Used</span>
        <span className="value" id="encoding-used"></span>
        <span className="label">Number of Words</span> */}
        <span className="value" id="word-counter">
          {wordCount}
        </span>
        <span className="label">Number of characters</span>
        <span className="value" id="unicode-char-counter">
          {count}
        </span>
        <span className="label">Number of Unicode scalars</span>
        <span className="value" id="unicode-scalar-counter">
          {count}
        </span>
        <span className="label">Message size</span>
        <span className="value" id="message-size-counter"></span>
        <span className="label">Total size sent</span>
        <span className="value" id="total-size-counter"></span>
      </div>
      <div className="textOutputBox">
        <div className="textOutputBoxInner">
          <span className="label">Parsed Characters</span>
          <span className="value">
            <div className="message-blocks">
              {hex_array.map((textPiece, key) => {
                  return (
                    <span className="messageStyleSettings" key={key}>
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
                    console.log(hexPiece)
                    return (
                    <span className="hexStyleSettings" key={key}>                
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
