import React from "react";
import "./SMSSegmentCalc.css";
import { useState } from "react";

function SearchBar() {
    return (
      <form>
        <h1>SMS Segment Calculator</h1>
        <div className="textInputBox">
            <textarea></textarea>
        
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </div>
        <div className="textOutputBox">
          <h2>This is where the processed text will go</h2>
        </div>
      </form>
    );
}

// function FilterableProductTable({ products }) {
//     return (
//       <div>
//         <SearchBar />
//       </div>
//     );
//   }
export const SMSSegmentCalc = () => {
    return <SearchBar />
}