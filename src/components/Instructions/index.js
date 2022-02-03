import React, { useState } from "react";

import Button from "../Button";

function Instructions(props) {
    const { nextStep } = props;
    const [isPermissionGranted, setIsPermissionGranted] = useState(false);
    navigator.permissions.query({ name: "camera" }).then((res) => {
        if (res.state === "granted") {
            setIsPermissionGranted(true);
        }
    });
    const enableCam = async () => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                window.localStream = stream; // A
                nextStep();
            })
            .catch((err) => {
                console.log("u got an error:" + err);
            });
    };
    return (
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            praesentium similique omnis sunt. Eum quo fugit dolorem velit porro.
            At exercitationem veritatis optio nemo ea dicta ut magni hic
            maiores.
            <Button
                onClick={() => (isPermissionGranted ? nextStep() : enableCam())}
            >
                Next
            </Button>
        </div>
    );
}

export default Instructions;
