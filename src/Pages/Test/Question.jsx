import React, { useEffect, useRef, useState } from 'react';
import { useCanvas } from "../../Contexts/canvas";
import Stars from '../../Components/Stars';

export default (props) => {

    const { inClasses, outClasses, started } = useCanvas();

    const { question, setResults, setQuestion } = props;

    const [classes, setClasses] = useState(inClasses)
    const [innerClasses, setInnerClasses] = useState(inClasses)

    const requestRef = useRef(0)
    const timerRef = useRef(0)
    const timerElementRef = useRef(null)

    const animate = () => {
        timerRef.current += 1 / 60
        if (timerRef.current > 30) {
            handleAnswer(false)
            return false;
        }
        timerElementRef.current && (timerElementRef.current.style.width = `${timerRef.current * 100 / 30}%`)
        setTimeout(() => {
            requestRef.current = requestAnimationFrame(animate);
        }, 1 / 60)
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(requestRef.current)
        }
    }, [question])

    const handleAnswer = (index) => {
        timerRef.current = 0;
        setInnerClasses(outClasses)
        setTimeout(() => {
            setResults(prev => {
                let results = { ...prev }
                results[question.sort] = `${index}`
                return results
            })
            let next = props.questions.data.find(element => element.sort == question.sort + 1)
            setQuestion(next)
            setInnerClasses(inClasses)
        }, 500)
    }

    return (
        <>
            <div className={`relative w-full h-full overflow-hidden`}>
                <div className={`w-full h-full relative`}>
                    <svg className={`text-navy-95 absolute -right-[20rem] top-0 ${classes.starR}`} width="1505" height="1080" viewBox="0 0 1505 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M854.742 -12H1610V530.076V1189.42H1244.93H854.742H420.5L626 621.416L0 273.416H734L854.742 -12Z" fill="currentColor" />
                    </svg>
                    <div className={`vinetka w-[calc(100%-20rem)] h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
                    <div className={`pt-[32px] pr-[24rem] pl-[60px] pb-10 relative text-navy-40 h-full w-full flex flex-col justify-between`}>
                        <div className={``}>
                            <div className={`flex items-center justify-between`}>
                                <div className={`text-[80px] font-bold tracking-[.02em] ${classes.post} relative top-[8px]`}>Проверь себя!</div>
                                <Stars {...props} />
                            </div>
                        </div>
                        <div className={`flex items-center ${classes.menu}`}>
                            <div className={`flex items-center mr-8 font-raleway text-[120px] text-bronze-100 leading-[120px] tracking-[6px] font-bold`}>{question.sort}</div>
                            <div className={`flex items-center grow bg-navy-40 relative top-4`}>
                                <div className={`bg-bronze-100 h-[13px]`} ref={timerElementRef}></div>
                            </div>
                        </div>
                    </div>

                    <div className={`absolute text-navy-40 top-0 left-0 right-[20rem] bottom-0 flex flex-col justify-center transition duration-1000`}>
                        <div className={`text-white ${innerClasses.menu}`}>
                            <div className={`font-raleway text-[48px] leading-[56px] text-center px-16 tracking-[5%] font-bold`}>{question.title}</div>
                            {question.answers ? <ul className={`grid grid-cols-2 gap-[35px] w-[1083px] mx-auto mt-[62px]`}>
                                {question.answers.answers.map((item, index) => <li key={index} className={`cursor-pointer rounded-[10px] text-navy-80 flex flex-col justify-center transition ${1 ? `bg-navy-40` : `bg-navy-10`} px-[40px] py-[34px]`} onClick={() => handleAnswer(index)}>
                                    <div className={`font-raleway text-[36px] leading-[38px] text-center tracking-[3%] font-bold`}>
                                        {item.text}
                                    </div>
                                </li>)}
                            </ul> : ``}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
