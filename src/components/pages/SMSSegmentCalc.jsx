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
    for (let n = 0, l = str.length; n < l; n++) {  // Iterate through each character in the input string     
      let hex = Number(str.charCodeAt(n)).toString(16); // Convert the ASCII value of the current character to its hexadecimal representation
      if (hex.length === 1){
        hex = "0x000" + hex;
      }
      else if (hex.length === 2) {
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
  const hex_array = ascii_to_hexa(smsInputText); // This contains the character and its associated hex/unicode value in an array

  // Section below is used for creating hover over, highlighted, associations for the character and unicode

  function charHighlight(key, parentClass){
    return (e) => {      
      e.target.className += " selected"
      const el = document.getElementsByClassName(`${parentClass} > ${key}-value`)
      //console.log(el);
      if(el.length > 0){
       el[0].className += " selected"
      }
    }
  }
  function charHighlightRemover(key, parentClass){
    return (e) => {
      e.target.className = `messageStyleSettings ${key}-value`
      const el = document.getElementsByClassName(`${parentClass} > ${key}-value selected`)
      //console.log(el);
      if(el.length > 0){
        el.target.className = `messageStyleSettings ${key}-value`
      }
    }
  }
  // The section below is used for checking if the given string is GSM or UNICODE encoding
  function containsNonLatinCodepoints(s) {
    return /[^\u0000-\u00ff]/g.test(s);
  }
  const hexOutput = containsNonLatinCodepoints(smsInputText);
  
  function IsGSM({outputChecker}) {
    if (outputChecker){
      return <p>UCS-2</p>
    }
    return <p>GSM-7</p>
  }  

  // This section is used for taking the input string and breaking it into segments of 140 characters if GSM and 70 if UNI.
  function segCount(hex_array){
    let segmentCounter = [];
      if (IsGSM) {
        for (let n = 0, charLength = hex_array.length; n < charLength; n+= 70) {
          segmentCounter.push(hex_array.substring(n, n + 70));
        }
      } else {
          for (let n = 0, charLength = hex_array.length; n < charLength; n+= 160) {
            segmentCounter.push(hex_array.substring(n, n + 160));
          }
        }return segmentCounter;
        
  }
  
  const segmentBuilder = segCount(smsInputText);

  console.log(segmentBuilder.length);


  return (
    <form>
      <h1>SMS Segment Calculator</h1>
      <div className="textInputBox">
        <textarea value={smsInputText} onChange={handleTextChange}></textarea>
      </div>
      <div className="information-box">
        <span className="label">Encoding</span>
        <span className="value" id="encoding-used">         
          <IsGSM 
            outputChecker={hexOutput}
          />    
        </span>
        <span className="label">Segment Counter</span>
        <span className="value">
          {segmentBuilder.length}
        </span>
        <span className="label">Character Count</span>
        <span className="value">
          {count}
        </span>
        <span className="label">Number of Unicode scalars</span>
        <span className="value">
          {count}
        </span>
        <span className="label">Message Size</span>
        <span className="value">
          {smsInputText.length * 16}
        </span>
        <span className="label">Total size submitted</span>
        <span className="value">
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
                    <span className={`messageStyleSettings ${key}-value`} onMouseOver={charHighlight(key, "hex-blocks")} onMouseOut={charHighlightRemover(key, "hex-blocks")} key={key}>
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
                    <span className={`messageStyleSettings ${key}-value`} onMouseOver={charHighlight(key, "message-blocks")} onMouseOut={charHighlightRemover(key, "message-blocks")} key={key}>                
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
