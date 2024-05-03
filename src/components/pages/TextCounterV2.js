import React, { useState } from "react";
import "./services/SMSSegmentCalc.css";

function SearchBar () {
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
      
          arr1.push(hex); // Push the hexadecimal value to the array
        }
        return arr1.join(''); // Join the hexadecimal values in the array to form a single string
      }

      const hex_array = ascii_to_hexa(setSmsInputText)

    return (
        <>
            <h1>SMS Segment Calculator</h1>
            <div className="textInputBox">
                <textarea value={smsInputText} onChange={handleTextChange}></textarea>
            </div>
            <div className="textOutputBox">
                <div className="textOutputBoxInner">
                <span className="label">Parsed Characters</span>
                <span className="value">
                    <div className="message-blocks">
                        {hex_array}
                    </div>
                </span>
                <span className="label">Parsed Hex Values</span>
                <span className="value">
                    <div className="hex-blocks">
                    </div>
                </span>
                </div>
            </div>
        </>
    )
}
export const TextCounterV2 = () => {
    return <SearchBar />;
  };