import React from "react";

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest} >
            <i className={"m-2 sm bi bi-bookmark" + (status 
                ? "-heart-fill" 
                : "")}></i>
        </button>
    );
    
};

export default BookMark;