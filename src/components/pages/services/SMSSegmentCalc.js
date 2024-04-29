import React, { useState } from "react";
import "./SMSSegmentCalc.css";

function SearchBar() {
    const [smsInputText, setSmsInputText] = useState("");
    const [count, setCount] = useState(0);
    const [countChar, setCountChar] = useState("");
    //const [text, setText] = useState(""); 
    const wordCount = countChar.split(" ").filter(Boolean).length; 
    
    const handleTextChange = (e) => { 
        setCountChar(e.target.value); 
    };

    return (
      <form>
        <h1>SMS Segment Calculator</h1>
        <div className="textInputBox"> 
            <textarea 
                value={smsInputText} 
                onChange={e => {setSmsInputText(e.target.value); setCount(e.target.value.length); handleTextChange(e)}}>
            </textarea>
        </div>
        <div id="information-box">
            <span className="label">Use <a href="https://www.twilio.com/docs/messaging/services#smart-encoding">Smart Encoding</a>?</span>
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

            <span className="label">Number of Words</span>
            <span className="value" id="word-counter">{wordCount}</span>

            <span className="label">Number of characters</span>
            <span className="value" id="unicode-char-counter">{count}</span>

            <span className="label">Number of Unicode scalars</span>
            <span className="value" id="unicode-scalar-counter">{count}</span>

            <span className="label">Message size</span>
            <span className="value" id="message-size-counter"></span>

            <span className="label">Total size sent</span>
            <span className="value" id="total-size-counter"></span>
        </div>
        <div className="textOutputBox">
          <p>{smsInputText}</p>
        </div>
      </form>
    );
}

export const SMSSegmentCalc = () => {
    return <SearchBar />
}