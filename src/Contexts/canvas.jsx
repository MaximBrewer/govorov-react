import React, { useState, useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import Sidebar from "../Components/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

const CanvasContext = React.createContext();

CanvasProvider.propTypes = {
    children: PropTypes.element.isRequired
};


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

const offClasses = {
    'bg': 'opacity-0',
    'star': 'opacity-0',
    'starR': 'opacity-0',
    'photo': 'opacity-0',
    'sky': 'opacity-0',
    'neva': 'opacity-0',
    'city': 'opacity-0',
    'lp': 'opacity-0',
    'lp2': 'opacity-0',
    'post': 'opacity-0',
    'io': 'opacity-0',
    'f': 'opacity-0',
    'btn': 'opacity-0',
    'menu': 'opacity-0',
    'txtfl': 'opacity-0',
    'txtsl': 'opacity-0',
    'testnum': 'opacity-0',
    'videobg': 'opacity-100',
    'sectionGovorov': 'opacity-0',
    'sectionSign': 'opacity-0',
    'cannon': 'opacity-0',
    'ship': 'opacity-0',
    'left': 'opacity-0',
    'city2': 'opacity-0',
    'carouseltext': 'opacity-0',
    'docicon': 'opacity-0',
    'wikiicon': 'opacity-0',
    // 'swiper': 'opacity-0',
    'menuItem': 'opacity-0'
}

function CanvasProvider({ children }) {

    const navigate = useNavigate()

    const canvasElementRef = useRef(null)
    const canvasBgRef = useRef(null)
    const canvasTimeoutRef = useRef(null)
    const canvasRequestRef = useRef(null)

    const animationRef = useRef(0)
    const oRef = useRef({ value: 0 })
    const oRefBg = useRef({ value: 1 })

    const imsRef = useRef(null)

    const stepRef = useRef(0)
    const fillRef = useRef(null)
    const fillBgRef = useRef(null)

    const useVideoRef = useRef(null)
    const videoBarRef = useRef(null)
    const loadedVideoRef = useRef(false)

    const pageRef = useRef(null)
    const imagesRef = useRef([])
    const framesRef = useRef({ callback: () => { }, frames: [] })
    const isSecvenceRef = useRef(false)

    const indexRef = useRef(0)

    const timeRef = useRef(0)
    const blockRef = useRef(null)

    const cursorRef = useRef({ x: 0, y: 0 })
    const deltaIRef = useRef({ x: 0, y: 0 })
    const vectorIRef = useRef({ x: 0, y: 0 })
    const offsetIRef = useRef({ x: 0, y: 0 })
    const deltaIIRef = useRef({ x: 0, y: 0 })
    const vectorIIRef = useRef({ x: 0, y: 0 })
    const offsetIIRef = useRef({ x: 0, y: 0 })
    const dotsIRef = useRef(null)
    const dotsIIRef = useRef(null)


    const nextRef = useRef(null)
    const prevRef = useRef(null)

    const [images, setImages] = useState([]);
    const canvas = useRef(null)
    const audioRef = useRef(null);
    const videoRef = useRef(null);
    const useVideoRefBG = useRef(false);
    const [started, setStarted] = useState(window.document.location != '/')

    const [direction, setDirection] = useState(10)
    const [video, setVideo] = useState(null)
    const [modal, setModal] = useState(null)
    const [sound, setSound] = useState(null)

    const screenXRef = useRef(0)
    const screenYRef = useRef(0)

    const [deltaX, setDeltaX] = useState(0)
    const [deltaY, setDeltaY] = useState(0)

    const [demo, setDemo] = useState(null)
    const [entity, setEntity] = useState(null)
    const [chapter, setChapter] = useState(null)
    const [block, setBlock] = useState(null)
    const [timeline, setTimeline] = useState(false)

    const [path, setPath] = useState(window.document.location.pathname)

    const [classes, setClasses] = useState(inClasses)

    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)
    const [button, setButton] = useState(null)

    const styles = {
        link: `bg-white text-teal-300 w-[475px] h-[200px] flex items-center justify-end relative`,
        imgwrapper: `overflow-hidden w-2/5 h-full`,
        img: `w-auto h-full relative`,
        text: `w-3/5 p-[40px] pl-0 text-right`,
        textinner: `block pt-2`
    }

    const delta = 60;

    useEffect(() => {
        indexRef.current = 0
    }, [blockRef.current])

    const animationBgFunction = (time) => {
        let w, h, x, y;

        if (!canvasBgRef.current || !canvasElementRef.current) {
            return canvasRequestRef.current = requestAnimationFrame(animationBgFunction);
        }


        canvasBgRef.current.width = canvasBgRef.current.clientWidth;
        canvasBgRef.current.height = canvasBgRef.current.clientHeight;
        let ctx2 = canvasBgRef.current.getContext('2d');

        ctx2.globalAlpha = oRefBg.current.value;
        ctx2.clearRect(0, 0, canvasBgRef.current.width, canvasBgRef.current.height);
        if (fillBgRef.current) {
            ctx2.rect(0, 0, canvasBgRef.current.width, canvasBgRef.current.height);
            ctx2.fillStyle = fillBgRef.current;
            ctx2.fill();
        }

        if (typeof oRefBg.current.end !== 'undefined' && typeof oRefBg.current.start !== 'undefined') {
            let step = (oRefBg.current.end - oRefBg.current.start) * 1000 / (delta * stepRef.current);
            oRefBg.current = { ...oRefBg.current, value: oRefBg.current.value + step }
            if (oRefBg.current.value > 1) {
                oRefBg.current = { value: 1 }
            }
            if (oRefBg.current.value < 0) {
                oRefBg.current = { value: 0 }
            }
            if (oRefBg.current.end - oRefBg.current.start > 0) {
                if (oRefBg.current.value > oRefBg.current.end) {
                    oRefBg.current = { value: oRefBg.current.end }
                }
            } else {
                if (oRefBg.current.value < oRefBg.current.end) {
                    oRefBg.current = { value: oRefBg.current.end }
                }
            }
        }


        if (!framesRef.current) framesRef.current = { callback: () => { }, frames: [] }


        if (typeof oRef.current.end !== 'undefined' && typeof oRef.current.start !== 'undefined') {
            let step = (oRef.current.end - oRef.current.start) * 1000 / (delta * stepRef.current);
            oRef.current = { ...oRef.current, value: oRef.current.value + step }
            if (oRef.current.value > 1) {
                oRef.current = { value: 1 }
            }
            if (oRef.current.value < 0) {
                oRef.current = { value: 0 }
            }
            if (oRef.current.end - oRef.current.start > 0) {
                if (oRef.current.value > oRef.current.end) {
                    oRef.current = { value: oRef.current.end }
                }
            } else {
                if (oRef.current.value < oRef.current.end) {
                    oRef.current = { value: oRef.current.end }
                }
            }
        }

        canvasElementRef.current.width = canvasElementRef.current.clientWidth;
        canvasElementRef.current.height = canvasElementRef.current.clientHeight;
        let ctx = canvasElementRef.current.getContext('2d');

        ctx.globalAlpha = oRef.current.value;
        ctx.clearRect(0, 0, canvasElementRef.current.width, canvasElementRef.current.height);

        if (useVideoRef.current && videoRef.current) {
            if (videoRef.current.videoHeight / videoRef.current.videoWidth < canvasElementRef.current.height / canvasElementRef.current.width) {
                h = canvasElementRef.current.height
                w = h * videoRef.current.videoWidth / videoRef.current.videoHeight
            } else {
                w = canvasElementRef.current.width
                h = w * videoRef.current.videoHeight / videoRef.current.videoWidth
            }
            x = (canvasElementRef.current.width - w) / 2;
            y = (canvasElementRef.current.height - h) / 2;
            ctx.drawImage(videoRef.current, x, y, w, h);
        }

        let frames = framesRef.current.frames;

        if (frames.length) {
            let interval = 150;
            if (isSecvenceRef.current) {
                interval = 50;
                if (frames.length - indexRef.current < 4 || indexRef.current < 4) {
                    interval = 200;
                }
            }
            if (time - timeRef.current > interval) {
                ++indexRef.current;
                timeRef.current = time
            }
            if (indexRef.current >= frames.length) {
                indexRef.current = isSecvenceRef.current ? frames.length - 1 : 0;
            }
            let frame = frames[indexRef.current];
            if (frame.image && frame.image.complete) {
                if (frame.image.height / frame.image.width < canvasElementRef.current.height / canvasElementRef.current.width) {
                    h = canvasElementRef.current.height
                    w = h * frame.image.width / frame.image.height
                } else {
                    w = canvasElementRef.current.width
                    h = w * frame.image.height / frame.image.width
                }
                x = (canvasElementRef.current.width - w) / 2;
                y = (canvasElementRef.current.height - h) / 2;
                if (!!frame.delta) {
                    x += frame.delta.x
                    y += frame.delta.y
                }
                ctx.drawImage(frame.image, x, y, w, h);
            }
        }


        canvasRequestRef.current = requestAnimationFrame(animationBgFunction);
        return canvasRequestRef.current
    }



    useEffect(() => {
        clearTimeout(canvasTimeoutRef.current)
        cancelAnimationFrame(canvasRequestRef.current)
        canvasRequestRef.current = requestAnimationFrame(animationBgFunction);
        return () => {
            clearTimeout(canvasTimeoutRef.current)
            cancelAnimationFrame(canvasRequestRef.current)
        }
    }, [])


    useEffect(() => {
        document.removeEventListener('wheel', wheel)
        setTimeout(() => {
            document.addEventListener('wheel', wheel)
        }, 10);
        document.removeEventListener('inertia-before', before)
        document.addEventListener('inertia-before', before)
        document.removeEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchstart', handleTouchStart, false);
        document.removeEventListener('touchend', handleTouchEnd, false);
        document.addEventListener('touchend', handleTouchEnd, false);
        return () => {
            document.removeEventListener('wheel', wheel)
            document.removeEventListener('inertia-before', before)
            document.removeEventListener('touchstart', handleTouchStart, false);
            document.removeEventListener('touchend', handleTouchEnd, false);
        }
    }, [])

    const wheel = (event) => {
        if (event.deltaY > 10 || event.deltaY < -10) {
            document.removeEventListener('wheel', wheel);
            document.dispatchEvent(new Event(`swipe-${event.deltaY < 0 ? `up` : `down`}`))
            setTimeout(() => {
                document.removeEventListener('wheel', wheel);
                setTimeout(() => {
                    document.addEventListener('wheel', wheel)
                }, 10);
            }, 5000);
        }
    }

    const checkLinks = (prev, next) => {
        return 1;
        return (prev.pathname.indexOf(`/biography`) > -1 && next.pathname.indexOf(`/biography`) > -1)
            || (prev.pathname.indexOf(`/exhibits`) > -1 && next.pathname.indexOf(`/exhibits`) > -1)
            || (prev.pathname.indexOf(`/gallery`) > -1 && next.pathname.indexOf(`/gallery`) > -1)
    }

    const finish = (location) => {
        document.removeEventListener('wheel', wheel);
        setTimeout(() => {
            document.addEventListener('wheel', wheel)
        }, 10);
        if (prev && checkLinks(prev.url, event.detail.visit.url)) {
            setDirection(5)
        } else {
            setDirection(10)
        }
    }

    const before = (event) => {
        if (checkLinks(location, event.detail.visit.url)) {
            setDirection(-5)
        } else {
            setDirection(-10)
        }
        setPrev(next)
        setNext(event.detail.visit)
    }

    useEffect(() => {
        prevRef.current = prev
    }, [prev]);

    useEffect(() => {
        nextRef.current = next
        next && setTimeout(() => {
            setDirection(0)
            navigate(next.url);
        }, 1000)
    }, [next]);

    const location = useLocation();

    useEffect(() => {
        finish(location)
    }, [location])


    useEffect(() => {
        setModal(null)
        setTimeline(false)
        switch (direction) {
            case -10:
            case -5:
                setClasses(outClasses)
                break;
            case 10:
            case 5:
                setClasses(inClasses)
                break;
            default:
            case 0:
                setClasses(offClasses)
                break;
        }
    }, [direction])

    const handleTouchStart = (event) => {
        screenYRef.current = event.changedTouches[0].screenY
        screenXRef.current = event.changedTouches[0].screenX
    }

    const handleTouchEnd = (event) => {
        setDeltaY(event.changedTouches[0].screenY - screenYRef.current)
        setDeltaX(event.changedTouches[0].screenX - screenXRef.current)
    }

    useEffect(() => {
        if (deltaY > -150 && deltaY < 150) return;
        document.dispatchEvent(new Event(`swipe-${deltaY > 0 ? `up` : `down`}`))
    }, [deltaX, deltaY])

    const [heading, setHeading] = useState(``)

    return <CanvasContext.Provider
        value={{
            direction,
            setDirection,
            canvas,
            inClasses,
            outClasses,
            offClasses,
            classes,
            setClasses,
            demo,
            setDemo,
            images,
            styles,
            setImages,
            video,
            setVideo,
            started, setStarted,
            setSound,
            setModal,
            useVideoRef,
            useVideoRefBG,
            imagesRef,
            path,
            setPath,
            chapter,
            setChapter,
            block,
            setBlock,
            timeline,
            setTimeline,
            setButton,
            entity,
            setEntity,
            indexRef,
            imsRef,
            isSecvenceRef,
            framesRef,
            oRef,
            stepRef,
            setHeading,
            cursorRef,
            fillRef,
            pageRef,
            loadedVideoRef,
            animationRef,
            dotsIRef,
            dotsIIRef,
            deltaIRef,
            vectorIRef,
            offsetIRef,
            deltaIIRef,
            vectorIIRef,
            offsetIIRef,
            videoRef,
            videoBarRef
        }}
    >
        <div className="body relative text-white h-[1080px] w-[1920px] mx-auto overflow-hidden">
            <canvas ref={canvasBgRef} className={`w-[calc(100%-20rem)] h-full absolute top-0 left-0`}></canvas>
            <canvas ref={canvasElementRef} className={`w-[calc(100%-20rem)] h-full absolute top-0 left-0`}></canvas>
            {children}
            {modal ? <div className={`z-40 w-full h-full top-0 left-0 absolute bg-navy-85% animate-fadeIn pr-[20rem] flex`}>
                <div className={`w-full h-full relative`}>
                    {modal}
                    <svg className={`absolute z-50 right-0 top-0 cursor-pointer`} onClick={() => setModal(null)} width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="102.946" height="8.57882" transform="matrix(0.707105 0.707108 -0.707105 0.707108 48.2461 41.1396)" fill="#E24C4C" />
                        <rect width="102.946" height="8.57882" transform="matrix(0.707105 -0.707108 0.707105 0.707108 41.3833 113.202)" fill="#E24C4C" />
                    </svg>
                </div>
            </div> : ``}

            <Sidebar />
        </div>
        <div style={{ display: "none" }}>
            <audio ref={audioRef}
                src={sound}
            />
        </div>
        <div className={`absolute bottom-0 left-0`} style={{ transform: `translateX(-100%)` }} >
            <video ref={videoRef} preload="auto" src={video} id="videoSource" type="video/mp4" muted={true} />
        </div>
    </CanvasContext.Provider>
}

function useCanvas() {
    const context = React.useContext(CanvasContext);

    if (context === undefined) {
        throw new Error(`useCanvas must be used within a CanvasProvider`);
    }

    return context;
}

export { CanvasProvider, useCanvas };
