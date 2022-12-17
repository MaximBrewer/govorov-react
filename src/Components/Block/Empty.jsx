import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from 'react-spring'
import parse from "html-react-parser"

function Empty({ block }) {

    return <>
        <div className={`top-0 left-0 w-full h-full`}>
        </div>
    </>;
}

export default Empty