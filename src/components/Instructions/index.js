import React, { useState } from "react";

import Button from "../Button";

import "./instructions.scss";

function Instructions(props) {
    const { nextStep, enableCam } = props;
    return (
        <div className="instructions-container">
            <h3 className="heading">Instructions</h3>
            <ul>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat praesentium similique omnis sunt.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, eligendi!
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, illo?
                </li>
            </ul>

            <div className="instructions-next-button">
                <Button onClick={() => nextStep()}>Next</Button>
            </div>
        </div>
    );
}

export default Instructions;
