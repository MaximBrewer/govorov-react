import React from "react";
import {
    Sound as SoundIcon,
} from "../../Icons";


export default (props) => {

    const { app, toggleMute, piece = false } = props;

    return <>
        <div className={`flex flex-col items-center`}>
            <a onClick={(e) => { e.preventDefault(); toggleMute() }}>
                <SoundIcon
                    className={`w-8 h-8 fill-current transition-all transform hover:scale-125 duration-500 ease-in-out ${app.mute ? `${piece ? `text-white` : `text-grey-600`}` : `text-bronze-600`}`}
                />
            </a>
        </div>
    </>
}