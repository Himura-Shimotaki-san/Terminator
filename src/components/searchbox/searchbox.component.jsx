import React from "react";


const searchBox = ({ searchChange }) => {
    return(
        <div className="pa2">
            <input className="pa3 ba p b--green bg-lightest-blue" 
                type="search"
                placeholder="model keresés..."
                onChange={searchChange}>
            </input>
        </div>
    );
}
export default searchBox;