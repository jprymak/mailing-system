import React from 'react';

function Button({text, handleOnClick}) {
    return (
        <button onClick={handleOnClick ? ()=>handleOnClick() : null} className="btn">
            {text}
        </button>
    );
}

export default Button;