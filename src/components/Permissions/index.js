import React, { useEffect, useState } from "react";

import abc from "../../assets/PermissionsImg.svg";

import "./permissions.scss";

function Permissions(props) {
    const { enableCam } = props;
    const [isPermissionGranted, setIsPermissionGranted] = useState(false);
    navigator.permissions.query({ name: "camera" }).then((res) => {
        if (res.state === "granted") {
            setIsPermissionGranted(true);
        } else {
            setIsPermissionGranted(false);
        }
    });

    useEffect(() => {
        enableCam();
    }, []);

    return (
        <div className="permissions-container">
            <h3 className="heading">Need Your Permissions</h3>
            <p>
                You need to allow our site on your browser to acess your camera
                and mic for next steps.
            </p>
            <div className="permissions-img">
                <img src={abc} alt="sadsd" srcset="" />
            </div>
            <div
                className="permissions-error"
                style={{ display: isPermissionGranted ? "none" : "block" }}
            >
                Please give camera permission{" "}
                <div className="click-here" onClick={() => enableCam()}>
                    Click Here!
                </div>
            </div>
        </div>
    );
}

export default Permissions;
