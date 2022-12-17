import React, { useEffect, useState } from 'react';
import { useCanvas } from "@/Contexts/canvas";
import parse from "html-react-parser"
import Stars from '@/Components/Stars';

export default (props) => {

    const { inClasses, outClasses, started } = useCanvas();
    const [classes, setClasses] = useState(inClasses)
    const [innerClasses, setInnerClasses] = useState(inClasses)

    const { results, questions, corrects, setResults, quiz } = props

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let cc = 0;
        for (let c in results) if (results[c] && corrects[c] === results[c]) ++cc
        setTotal(cc)
    }, [results, corrects])

    return (
        <>
            <div className={`relative w-full h-full overflow-hidden`}>
                <div className={`w-full h-full relative`}>
                    <div className={`w-full h-full flex flex-col`}>
                        <svg className={`text-navy-95 absolute -right-[20rem] top-0 ${classes.starR}`} width="1505" height="1080" viewBox="0 0 1505 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M854.742 -12H1610V530.076V1189.42H1244.93H854.742H420.5L626 621.416L0 273.416H734L854.742 -12Z" fill="currentColor" />
                        </svg>
                        <div className={`vinetka w-[calc(100%-20rem)] h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
                        <div className={`pr-[20rem] relative text-navy-40 w-full h-full flex flex-col ${classes.menu}`}>
                            <div className={`pt-[32px] pr-8 pl-[60px]`}>
                                <div className={`flex items-center justify-between`}>
                                    <div className={`text-[80px] font-bold tracking-[.02em] ${classes.post} relative top-[8px]`}>Проверь себя!</div>
                                    <Stars {...props} />
                                </div>
                            </div>
                            <div className={`text-white flex flex-col items-center grow justify-center`}>
                                <div className={`font-raleway text-[48px] leading-[56px] text-center px-16 tracking-[5%] font-bold mb-[67px]`}>{parse(quiz[total])}</div>
                                <a href="#" onClick={e => {
                                    e.preventDefault()
                                    setResults({})
                                }} className={`mb-40 block cursor-pointer rounded-[10px] text-navy-80 transition bg-navy-10 hover:bg-navy-40 px-[40px] py-[34px]`}>
                                    <div className={`font-raleway text-[36px] leading-[38px] text-center tracking-[3%] font-bold`}>
                                        Пройти еще раз
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
