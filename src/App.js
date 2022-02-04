import { useState } from "react";

import Camera from "./components/Camera";
import Card from "./components/Card";
import Instructions from "./components/Instructions";
import Permissions from "./components/Permissions";

import "./App.scss";

function App() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep((prev) => prev + 1);
    };

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

    const getStep = (currentStep) => {
        switch (currentStep) {
            case 0:
                return (
                    <Instructions nextStep={nextStep} enableCam={enableCam} />
                );
            case 1:
                return (
                    <Permissions nextStep={nextStep} enableCam={enableCam} />
                );
            case 2:
                return <Camera />;
            default:
                return;
        }
    };

    return (
        <div className="App">
            <Card>{getStep(currentStep)}</Card>
        </div>
    );
}

export default App;
