import React, { useEffect, useRef } from 'react';

import { useCanvas } from "../Contexts/canvas";
import DocIcon from '../Components/Atoms/DocIcon';
import WikiIcon from '../Components/Atoms/WikiIcon';
import parse from "html-react-parser"
import { Link, useNavigate } from 'react-router-dom';


export default () => {

    const props = window.data.instruction;

    const { classes, direction, setEntity, setChapter, setDemo, setButton, started } = useCanvas();

    const navigate = useNavigate()

    const swipeDown = () => {
        navigate(`/biography/youth`);
    }

    const timeoutRef = useRef()

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            document.addEventListener('swipe-down', swipeDown)
        }, 1000)
        return () => {
            clearTimeout(timeoutRef.current)
            document.removeEventListener('swipe-down', swipeDown)
        }
    }, [])

    useEffect(() => {
        let chapter = props.chapter.data;
        chapter.title = `Битва<br/> за Ленинград`
        setDemo(true)
        setChapter(props.chapter.data)
        setEntity(props.entity.data)
        return () => {
            setChapter(null)
            setEntity(null)
        }
    }, [])

    return (
        <>
            <div className={`relative w-full h-full overflow-hidden text-white font-raleway font-medium tracking-[1.1px] text-[28px] leading-[36px]`}>
                <div className={`w-full h-full top-0 left-0 absolute pointer-events-none bg-[#22292C] ${classes.bg}`}>
                    <div className={`top-0 left-0 bottom-0 right-0 -mt-16 absolute bg-cover bg-top-left opacity-30`} style={{ backgroundImage: `url(${`./img/instruction/bg.jpeg`})` }}></div>
                </div>

                <div className={`vinetka w-[calc(100%-20rem)] h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>

                <Link to={`/biography/youth`} className={`absolute z-30 left-[38px] bottom-10 ${classes.swiper}`}>
                    <svg width="80" height="124" className={`cursor-pointer`} viewBox="0 0 80 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_2482_3625" style={{ maskType: `alpha` }} maskUnits="userSpaceOnUse" x="3" y="47" width="74" height="74">
                            <circle cx="40" cy="84" r="37" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_2482_3625)">
                            <circle cx="40" cy="83" r="12" fill="#C5A277" />
                        </g>
                        <rect width="29.5286" height="7.38216" transform="matrix(0.709807 -0.704396 0.709807 0.704396 19 30.7998)" fill="#C5A277" />
                        <rect width="29.5286" height="7.38216" transform="matrix(-0.709807 -0.704396 0.709807 -0.704396 55.7603 36)" fill="#C5A277" />
                        <circle cx="40" cy="84" r="38.5" stroke="#C5A277" strokeWidth="3" />
                    </svg>
                    <div className={`absolute translate-x-full right-0 pl-4 bottom-1`}>
                        <div className={`flex items-center`}>
                            <svg className={`shrink-0`} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="80" height="80" transform="translate(80 80) rotate(180)" fill="#1D2E35" fillOpacity="0.3" />
                                <rect x="48.9998" y="65.0002" width="33.9409" height="8.48523" transform="rotate(-135 48.9998 65.0002)" fill="#D9D9D9" />
                                <rect x="55" y="22.908" width="33.9409" height="8.48523" transform="rotate(135 55 22.908)" fill="#D9D9D9" />
                            </svg>
                            <span className={``}>{parse(props.begtext ?? ``)}</span>
                        </div>
                    </div>
                </Link>
                <div className={`flex flex-col space-y-10 absolute z-30 left-[25px] top-10 ${classes.docicon}`}>
                    <DocIcon className={`cursor-pointer w-[100px] h-[100px] text-white`} block={null} demo={true} />
                    <WikiIcon className={`cursor-pointer w-[100px] h-[100px] text-white`} block={null} demo={true} />
                    <div className={`absolute right-0 translate-x-full bottom-4`}>
                        <div className={`flex items-center pl-4`}>
                            <svg className={`shrink-0`} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="80" height="80" transform="translate(80 80) rotate(180)" fill="#1D2E35" fillOpacity="0.3" />
                                <rect x="48.9998" y="65.0002" width="33.9409" height="8.48523" transform="rotate(-135 48.9998 65.0002)" fill="#D9D9D9" />
                                <rect x="55" y="22.908" width="33.9409" height="8.48523" transform="rotate(135 55 22.908)" fill="#D9D9D9" />
                            </svg>
                            <span className={``}>{parse(props.doptext ?? ``)}</span>
                        </div>
                    </div>
                </div>

                <div className={`absolute right-[31rem] flex items-center pl-4 top-12 ${classes.io}`}>
                    <span className={`whitespace-nowrap`}>{parse(props.biotext ?? ``)}</span>
                    <svg className={`shrink-0`} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="80" height="80" fill="#1D2E35" fillOpacity="0.3" />
                        <rect x="31.0001" y="15" width="33.9409" height="8.48523" transform="rotate(45 31.0001 15)" fill="#D9D9D9" />
                        <rect x="25" y="57.0923" width="33.9409" height="8.48523" transform="rotate(-45 25 57.0923)" fill="#D9D9D9" />
                    </svg>
                </div>

                <div className={`h-full right-[20rem] top-0 left-0 absolute flex flex-col items-center justify-center ${classes.io}`}>
                    <svg width="160" height="204" viewBox="0 0 160 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_2321_9002" style={{ maskType: `alpha` }} maskUnits="userSpaceOnUse" x="43" y="87" width="74" height="74">
                            <circle cx="80" cy="124" r="37" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_2321_9002)">
                            <circle cx="80" cy="123" r="12" fill="#C5A277" />
                        </g>
                        <rect width="29.5286" height="7.38216" transform="matrix(0.709807 -0.704396 0.709807 0.704396 59 70.7998)" fill="#C5A277" />
                        <rect width="29.5286" height="7.38216" transform="matrix(-0.709807 -0.704396 0.709807 -0.704396 95.7601 76)" fill="#C5A277" />
                        <circle cx="80" cy="124" r="38.5" stroke="#C5A277" strokeWidth="3" />
                    </svg>
                    <div className={`max-w-4xl mx-auto text-center`}>{parse(props.text ?? ``)}</div>
                </div>
            </div>
        </>
    );
}
