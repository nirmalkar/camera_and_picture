import Camera from "./components/Camera";
import "./App.scss";
import Card from "./components/Card";
import { useState } from "react";
import Instructions from "./components/Instructions";

function App() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const getStep = (currentStep) => {
        switch (currentStep) {
            case 0:
                return <Instructions nextStep={nextStep} />;
            case 1:
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
