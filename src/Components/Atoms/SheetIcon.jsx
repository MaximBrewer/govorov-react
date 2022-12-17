import React from "react";
import {
    Sheet as SheetIcon,
} from "../../Icons";


export default (props) => {

    const { doc, handleDocClick } = props;

    return <>
        {doc ? <div className={`flex flex-col items-center mr-8 transition-all transform hover:scale-110 hover:text-bronze-600`} onClick={handleDocClick}>
            <SheetIcon
                className={`cursor-pointer w-6 h-6 fill-current text-white transition-all transform hover:scale-125 duration-500 ease-in-out hover:text-bronze-600`}
            />
        </div> : ``}
    </>
}