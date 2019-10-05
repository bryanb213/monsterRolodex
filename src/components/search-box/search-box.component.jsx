import React from 'react';
import './search-box.style.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div className="search">
            <input
            className="search"
            type="search" 
            placeholder={placeholder} //make it dynamic 
            onChange={handleChange}
            />
        </div>
    )
}