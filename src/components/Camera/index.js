import React, { useEffect } from "react";

import Button from "../Button";

function Camera() {
    const [showCam, setShowCam] = React.useState(true);
    const [picture, setPicture] = React.useState([]);

    useEffect(() => {
        startCam();
    }, []);

    async function startCam() {
        let video = document.querySelector("#video");
        let stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
        });
        video.srcObject = stream;
    }
    function clickPicture() {
        let canvas = document.querySelector("#canvas");
        setShowCam(false);
        let video = document.querySelector("#video");
        canvas
            ?.getContext("2d")
            ?.drawImage(video, 0, 0, canvas.width, canvas.height);
        let image_data_url = canvas?.toDataURL("image/jpeg");
        // data url of the image
        console.log(image_data_url);
        setPicture([{ img: image_data_url }]);
    }
    function retake() {
        setShowCam(true);
        setPicture([]);
    }
    return (
        <div>
            <video
                style={{ display: showCam ? "" : "none" }}
                id="video"
                width="580px"
                height="400px"
                autoPlay
            ></video>
            <canvas
                style={{ display: showCam ? "none" : "" }}
                id="canvas"
                width="600px"
                height="400px"
            ></canvas>
            <div>
                <Button
                    disabled={picture.length}
                    onClick={() => clickPicture()}
                >
                    Click Photo
                </Button>
                <Button disabled={!picture.length} onClick={retake}>
                    Re Take
                </Button>
            </div>
        </div>
    );
}

export default Camera;
