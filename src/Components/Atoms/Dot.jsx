import React, { useState } from "react";
import parse from "html-react-parser"
import { CloseSwiper } from "../../Icons";
import { useCanvas } from "@/Contexts/canvas";

function Dot({ item, open, close, setModal }) {


    const { direction } = useCanvas()

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
        setModal(
            <div className={`flex items-center justify-center w-full h-full`}>
                {item.photo ? <div className={`bg-gray-100 w-[1155px] h-[750px] font-raleway text-navy-160 flex`}>
                    <div className={`shrink-0 h-[750px] w-[761px] bg-cover bg-center`} style={{ backgroundImage: `url('${item.photo}')` }}>
                        <div className={`shrink-0 h-[750px] w-[761px] bg-contain bg-center bg-no-repeat backdrop-blur-sm`} style={{ backgroundImage: `url('${item.photo}')` }}>

                        </div>
                    </div>
                    <div className={`grow px-5 py-10`}>
                        {item.title ? <div className={`text-[20px] font-extrabold tracking-[.6px]`}>{item.title}</div> : <></>}
                        <hr className={`border-bronze-100 my-5`} />
                        <div className={`text-[18px] font-medium tracking-[.5px] w-full markdown font-raleway`}>{parse(item.description ?? '')}</div>
                        {item.sign ? <>
                            <hr className={`border-bronze-600 my-5`} />
                            <div className={`text-bronze-600 text-sm w-full`}>{item.sign}</div>
                        </> : ``}
                    </div>
                </div> : <div className={`bg-gray-100 w-[500px] h-auto px-5 py-10 font-raleway text-navy-160`}>
                    {item.title ? <div className={`text-[20px] font-extrabold tracking-[.6px]`}>{item.title}</div> : <></>}
                    <hr className={`border-bronze-100 my-5`} />
                    <div className={`text-[18px] font-medium tracking-[.5px] w-full markdown font-raleway`}>{parse(item.description ?? '')}</div>
                    {item.sign ? <>
                        <hr className={`border-bronze-600 my-5`} />
                        <div className={`text-bronze-600 text-sm w-full`}>{item.sign}</div>
                    </> : ``}
                </div>}
            </div>)
    }
    return <>
        <div className={`${direction > 0 ? `opacity-100` : `opacity-0`} cursor-pointer flex items-center absolute bg-no-repeat bg-contain ${show ? `bg-close-dot w-[78px] h-[78px] -translate-x-[39px] -translate-y-[39px]` : `bg-dot w-[113px] h-[113px] -translate-x-[56px] -translate-y-[56px]`}`} href={`#`} style={{
            top: `${(item.top ? item.top : 50)}%`,
            left: `${(item.left ? item.left : 50)}%`
        }} onClick={() => handleClick()}>
            <div className={`absolute pointer-events-none font-raleway text-[20px] leading-[22px] font-extrabold left-full min-w-[20rem]`}>{item.title}</div>
        </div>
    </>;
}

export default Dot