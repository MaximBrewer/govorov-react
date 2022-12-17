import React, { useRef, useState, useEffect } from "react";
import parse from "html-react-parser"

import Carousel from "../Carousel";
import { useCanvas } from "@/Contexts/canvas";


export default (props) => {

    const { block } = props
    const { classes } = useCanvas();

    return <div className="flex flex-col justify-center w-full h-full px-32 bg-navy-160 bg-opacity-50">
        <Carousel photos={block.photos} />
        {block.text ? <div className={`font-raleway font-medium text-[28px] tracking-[1px] leading-[36px] w-[1080px] mx-auto pl-10 border-l-[5px] border-bronze-100 mt-14 ${classes.carouseltext}`}>{parse(block.text)}</div> : ``}
    </div>
}


