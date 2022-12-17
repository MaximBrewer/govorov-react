import React, { useEffect, useRef, useState } from 'react';

import Question from './TestLocal/Question';
import Screensaver from './TestLocal/Screensaver';
import Result from './TestLocal/Result';

export default function (props) {

    const inClasses = {
        'bg': 'animate-fadeIn',
        'star': 'animate-starIn translate-x-full',
        'starR': 'animate-starRIn',
        'photo': 'animate-screensaverGovorovIn',
        'sky': 'animate-skyIn',
        'neva': 'animate-nevaIn',
        'city': 'animate-cityIn',
        'lp': 'animate-lpIn',
        'lp2': 'animate-lp2In',
        'post': 'animate-postIn',
        'io': 'animate-ioIn',
        'f': 'animate-fIn',
        'btn': 'animate-btnIn',
        'menu': 'animate-menuIn',
        'txtfl': 'animate-txtFLIn',
        'txtsl': 'animate-txtSLIn',
        'videobg': 'animate-videobgIn',
        'testnum': 'animate-testNumberIn',
        'width': 'animate-widthIn',
        'sectionGovorov': 'animate-sectionGovorovIn',
        'sectionSign': 'animate-sectionSignIn',
        'cannon': 'animate-cannonIn',
        'ship': 'animate-shipIn',
        'left': 'animate-leftIn',
        'city2': 'animate-city2In',
        'carouseltext': 'animate-carouseltextIn',
        'docicon': 'animate-dociconIn',
        'wikiicon': 'animate-wikiiconIn',
        // 'swiper': 'animate-swiperIn',
        'menuItem': 'animate-menuItemIn'
    }

    const outClasses = {
        'bg': 'animate-fadeOut',
        'star': 'animate-starOut',
        'starR': 'animate-starROut',
        'photo': 'animate-screensaverGovorovOut',
        'sky': 'animate-skyOut',
        'neva': 'animate-nevaOut',
        'city': 'animate-cityOut',
        'lp': 'animate-lpOut',
        'lp2': 'animate-lp2Out',
        'post': 'animate-postOut',
        'io': 'animate-ioOut',
        'f': 'animate-fOut',
        'btn': 'animate-btnOut',
        'menu': 'animate-menuOut',
        'txtfl': 'animate-txtFLOut',
        'txtsl': 'animate-txtSLOut',
        'videobg': 'animate-videobgOut',
        'testnum': 'animate-testNumberOut',
        'width': 'animate-widthOut',
        'sectionGovorov': 'animate-sectionGovorovOut',
        'sectionSign': 'animate-sectionSignOut',
        'cannon': 'animate-cannonOut',
        'ship': 'animate-shipOut',
        'left': 'animate-leftOut',
        'city2': 'animate-city2Out',
        'carouseltext': 'animate-carouseltextOut',
        'docicon': 'animate-dociconOut',
        'wikiicon': 'animate-wikiiconOut',
        // 'swiper': 'animate-swiperOut',
        'menuItem': 'animate-menuItemOut'
    }

    const [question, setQuestion] = useState(null)

    const quiz = props.results;

    const [results, setResults] = useState({})

    const [corrects, setCorrects] = useState({})

    useEffect(() => {
        resize();
        let corrects = {}
        props.questions.data.map((item, index) => {
            corrects[item.sort] = `${item.answers.correct}`
        })
        setCorrects(corrects)

        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    const resize = () => {
        window.scrollTo(0, 0)
        let xScale = 1;
        let yScale = 1;
        console.log(window.innerWidth, window.innerHeight);
        xScale = window.innerWidth / 1600
        yScale = window.innerHeight / 1080

        console.log(xScale, yScale);
        transformRef.current.style.width = `1600px`
        transformRef.current.style.height = `1080px`
        transformRef.current.style.transform = `scaleX(${xScale}) scaleY(${yScale})`
        transformRef.current.style.transformOrigin = `top left`
    }

    const transformRef = useRef(null)


    return <div ref={transformRef} className={`overflow-hidden relative`}>
        {results[30] !== undefined
            ? <Result
                {...props}
                question={question}
                setQuestion={setQuestion}
                results={results}
                setResults={setResults}
                corrects={corrects}
                quiz={quiz}
                inClasses={inClasses}
                outClasses={outClasses}
                started={true}
            />
            : (
                question
                    ? <Question
                        {...props}
                        question={question}
                        setQuestion={setQuestion}
                        results={results}
                        setResults={setResults}
                        corrects={corrects}
                        quiz={quiz}
                        inClasses={inClasses}
                        outClasses={outClasses}
                        started={true}
                    />
                    : <Screensaver
                        {...props}
                        question={question}
                        setQuestion={setQuestion}
                        results={results}
                        setResults={setResults}
                        corrects={corrects}
                        quiz={quiz}
                        inClasses={inClasses}
                        outClasses={outClasses}
                        started={true}
                    />
            )}
        <small

            style={{
                position: `absolute`,
                right: `32px`,
                bottom: `32px`,
                fontFamily: `Raleway`,
                fontSize: `16px`
            }}

        >СОЮЗ “ПРЕОБРАЖЕНИЕ” 2022 г. ©️</small>
    </div>
}
