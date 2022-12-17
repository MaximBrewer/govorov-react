import React from "react";
import parse from "html-react-parser"
import { useCanvas } from "@/Contexts/canvas";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default (props) => {
    const { block } = props
    const { classes } = useCanvas();

    const textRef = useRef(null)
    const titleRef = useRef(null)

    const [fh, setFh] = useState(0);
    const [sh, setSh] = useState(0);

    useEffect(() => {
        setFh(0);
        setSh(0);
        if (block.title) {
            if (titleRef.current) {
                setSh(1080 - titleRef.current.offsetTop - titleRef.current.offsetHeight - 30);
                setFh(titleRef.current.offsetTop - 48);
            }
        } else {
            if (textRef.current) {
                setSh(1080 - textRef.current.offsetTop + 4);
            }
        }
    }, [textRef.current, titleRef.current])

    return <div className={`w-full h-full flex flex-col justify-center bg-navy-160 bg-opacity-50`}>
        {fh ? <div className={`w-[5px] opacity-0 absolute left-[262px] top-0 bg-bronze-100 ${classes.txtfl}`} style={{ height: fh }}></div> : ``}
        {sh ? <div className={`w-[5px] opacity-0 absolute left-[262px] bottom-0 bg-bronze-100 ${classes.txtsl}`} style={{ height: sh }}></div> : ``}
        {block.title ? <>
            <div ref={titleRef} className={`max-w-[1080px] text-[120px] leading-[110px] tracking-[2%] font-bold ml-[238px] mb-6`}>
                <div className={`opacity-0 ${classes.io}`}>{block.title ?? ""}</div>
            </div>
        </> : <></>}
        {/* <hr className={`w-24 m-4 border-t-3`} />
        {block.photo ? <>
            <div className={`py-2 px-3`}>
                <img src={block.photo} style={{ height: window.innerHeight * 0.4, maxWidth: `fit-content` }} alt="" />
            </div>
            <hr className={`w-24 m-4 border-t-3`} />
        </> : ``} */}
        <div ref={textRef} className={`font-raleway opacity-0 max-w-[1080px] text-[30px] leading-[36px] tracking-[1px] font-medium ml-[262px] pl-[44px] ${classes.f}`}>{parse(block.text ?? "")}</div>
        {/* <hr className={`w-24 m-4 border-t-3 mb-8`} /> */}
    </div>
}