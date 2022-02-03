import React from "react";

import "./button.scss";

function Button(props) {
    const { children, disabled } = props;
    return (
        <button
            {...props}
            className="button"
            style={{ cursor: disabled ? "notAllowed" : "pointer" }}
        >
            {children}
        </button>
    );
}

export default Button;
