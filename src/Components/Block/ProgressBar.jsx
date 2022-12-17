
import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from 'react-player'

const InputRange = () => {
    const inputRangeRef = useRef(null)
    const onChangeListener = (event) => {
        document.trigger("inputRange.changed", {
            value: inputRangeRef.current.value
        });
    }
    return (
        <div className="input-range">
            <input type="range" ref={inputRangeRef} onChange={onChangeListener} className="input-range__slider" min="0" max="100" step=".1" defaultValue="0" />
        </div>
    );
}

const ProgressBar = () => {
    const [value, setValue] = useState("0%")
    const onInputRangeChanged = function (event, data) {
        setValue(data.value + "%")
    }
    useEffect(() => {
        document.addEventListener("inputRange.changed", onInputRangeChanged)
        return () => {
            document.removeEventListener("inputRange.changed", onInputRangeChanged)
        }
    }, [])

    return (
        <div className="progress">
            <div className="progress__bar" style={{
                width: value
            }}></div>
            <span className="progress__value">{value}</span>
        </div>
    );
}

const ProgressBarComponent = () => {
    return (
        <>
            <ProgressBar />
            <InputRange />
        </>
    )
}

export default ProgressBarComponent;
