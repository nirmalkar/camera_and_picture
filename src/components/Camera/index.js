import React, { useEffect } from "react";

import Button from "../Button";

function Camera() {
    const [showCam, setShowCam] = React.useState(true);
    const [isCamOn, setIsCamOn] = React.useState(false);

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
        setIsCamOn(true);
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
    }
    function retake() {
        setShowCam(true);
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
                <Button disabled={!isCamOn} onClick={() => clickPicture()}>
                    Click Photo
                </Button>
                <Button
                    style={{ display: showCam ? "none" : "" }}
                    onClick={retake}
                >
                    Re Take
                </Button>
            </div>
        </div>
    );
}

export default Camera;
