import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import parse from "html-react-parser"
import { useCanvas } from "@/Contexts/canvas";
import { LineWave, Oval } from "react-loader-spinner";
import WaveSurfer from 'wavesurfer.js';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid'


function SampleNextArrow(props) {
    const { className, onClick, modal = false } = props;
    let { style } = props
    modal && (style.right = 0)
    return (
        <div
            className={`${className} items-center justify-center w-20`}
            style={{ ...style, display: `flex` }}
            onClick={onClick}
        >
            <svg
                className={`fixed top-[31rem] left-[95rem]`}
                width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" transform="translate(80 80) rotate(180)" fill="#1D2E35" fillOpacity="0.3" />
                <rect x="31.0002" y="15" width="33.9409" height="8.48523" transform="rotate(45 31.0002 15)" fill="#C5A277" />
                <rect x="25" y="57.0923" width="33.9409" height="8.48523" transform="rotate(-45 25 57.0923)" fill="#C5A277" />
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick, modal = false } = props;
    let { style } = props
    modal && (style.left = 0)
    return (
        <div
            className={`${className} items-center justify-center w-20`}
            style={{ ...style, display: `flex` }}
            onClick={onClick}
        >
            <svg
                className={`fixed top-[31rem] left-0`}
                width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" fill="#1D2E35" fillOpacity="0.3" />
                <rect x="48.9999" y="65" width="33.9409" height="8.48523" transform="rotate(-135 48.9999 65)" fill="#C5A277" />
                <rect x="55" y="22.9077" width="33.9409" height="8.48523" transform="rotate(135 55 22.9077)" fill="#C5A277" />
            </svg>
        </div >
    );
}

const settings = {
    className: "slider variable-width",
    dots: true,
    arrows: true,
    infinite: false,
    centerMode: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

const settingsModal = {
    // className: "slider variable-width",
    dots: true,
    arrows: true,
    infinite: false,
    centerMode: false,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // variableWidth: true,
    nextArrow: <SampleNextArrow modal={true} />,
    prevArrow: <SamplePrevArrow modal={true} />
};

const Slide = ({ item, index, modal = true, photos }) => {
    const { setModal, classes } = useCanvas()

    const handleClick = (index) => {

        setModal(item.media ? <MediaModal item={item} setModal={setModal} /> : <div className={`relative flex flex-col space-y-4 h-full justify-center`}>
            <Slider {...settingsModal} initialSlide={index} className={`w-full`}
            >
                {photos.map((item, index) => <Slide key={index} item={item} index={index} photos={photos}></Slide>)}
            </Slider>
        </div>)
    }

    return <div className={`${modal ? `` : `px-[10px]`}`} onClick={() => !modal && handleClick(index)}>
        <div className={`${modal ? `mx-auto bg-gray-100 flex flex-col` : `bg-gray-100 flex flex-col ${classes.post}`}`} style={modal ? { width: 750 * item.width / 100, height: `auto` } : { width: 392 * item.width / 100, animationDuration: `${(index + 1) * .5}s` }} >
            <div className={`relative`}>
                <img src={item.photo} alt={``} className={modal ? `h-[750px] w-auto` : `h-[392px] w-auto`} />
                <div className={`absolute top-0 left-0 w-full h-full border-gray-100 border-[5px]`}></div>
            </div>
            <div className={modal ? `grow text-navy-160 font-raleway py-[20px] px-[10px]` : `grow text-navy-160 font-raleway py-[20px] px-[20px]`}>
                <div className={modal ? `font-extrabold text-[20px] leading-[22px] tracking-[.6px]` : `font-extrabold text-[20px] leading-[22px] tracking-[.6px] line-clamp-2`}>
                    {item.title}
                </div>
                <hr className={`border-bronze-100 my-[10px]`} />
                <div className={modal ? `font-semibold text-[18px] leading-[22px] tracking-[.575px]` : `font-medium text-[18px] leading-[22px] tracking-[.575px] line-clamp-3`}>
                    {parse(item.description ?? '&nbsp;')}
                </div>
            </div>
        </div>
    </div>
}


const MediaModal = (props) => {
    const { item, setModal } = props

    const [playButton, setPlayButton] = useState(false)
    const [loader, setLoader] = useState(true)
    const [video, setVideo] = useState(true)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const videoRef = useRef(null)
    const audioRef = useRef(null)
    const barRef = useRef(null)

    useEffect(() => {

        setHeight(800);
        setWidth(window.innerHeight * .625 / .5625);
        if (item.media) {
            if (item.media.indexOf('.mp4')) {
                setVideo(true)
                videoRef.current.src = item.media;
                barRef.current = WaveSurfer.create({
                    backend: "MediaElement",
                    loopSelection: "false",
                    mediaType: 'video',
                    mediaControls: false,
                    interact: true,
                    container: '#waveform',
                    height: 40,
                    progressColor: '#9E825F',
                    waveColor: '#131F23',
                });
                barRef.current.load(videoRef.current);
                barRef.current.on('waveform-ready', function () {
                    setLoader(false)
                    try {
                        barRef.current.play();
                    } catch (e) { }
                });
            } else if (item.media.indexOf('.mp3')) {
                audioRef.current.src = item.media;
                barRef.current = WaveSurfer.create({
                    loopSelection: "false",
                    mediaRef: audioRef,
                    mediaControls: false,
                    interact: true,
                    container: '#waveform',
                    height: 40,
                    progressColor: '#131F23',
                    waveColor: '#C5A277',
                });
                barRef.current.load(audioRef.current);
                barRef.current.on('waveform-ready', function () {
                    setLoader(false)
                    try {
                        barRef.current.play();
                    } catch (e) { }
                });
            }
        }
        return () => {
            barRef.current.destroy()
        }
    }, [])

    return <div className={`w-full h-full flex justify-center items-center`} onClick={(e) => setModal(null)}>
        <div className={`relative bg-gray-100`} onClick={(e) => { e.stopPropagation() }} >
            <div className={`relative`}
                onClick={() => {
                    if (!barRef.current.isPlaying()) {
                        try {
                            barRef.current.play()
                        } catch (e) { }
                        setPlayButton(false)
                    } else {
                        barRef.current.pause();
                        setPlayButton(true)
                    }
                }}>
                {video ? <video ref={videoRef} className={`w-full`}></video> : ``}
                <div className={`group absolute flex items-center justify-center top-0 left-0 w-full h-full`}>
                    {loader ?
                        <Oval
                            height={128}
                            width={128}
                            color="#BA955E"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#BA955E"
                            strokeWidth={3}
                            strokeWidthSecondary={3}

                        //3 secs
                        /> : playButton ? <PlayIcon className={`fill-current text-bronze-500 w-32 h-auto opacity-50 transition-opacity group-hover:opacity-100 `} /> : <PauseIcon className={`fill-current text-bronze-500 w-32 h-auto opacity-0 transition-opacity group-hover:opacity-100 `} />}
                </div>
            </div>
            <div className={`text-navy-160 font-raleway py-[20px] px-[20px]`}>
                {item.title ?
                    <div className={`font-raleway font-extrabold text-[28px]`}>
                        {item.title}
                    </div> : ``}
                {item.description ?
                    <div className={`font-raleway font-medium text-[22px]`}>
                        {parse(item.description ?? ``)}
                    </div> : ``}
                {item.sign ? <>
                    <div className={`text-bronze-100 w-full mb-6 font-semibold`}>{item.sign}</div>
                </> : ``}
                <div onMouseDown={(e) => e.stopPropagation()} onMouseUp={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()} className={`h-10`}>
                    <div id="waveform" className={`pointer-events-auto w-full opacity-30 transition-opacity group-hover:opacity-100 `} />
                </div>
            </div>
        </div>
        <div className={`hidden`}>
            <audio ref={audioRef}></audio>
        </div>
    </div>
}




export default (props) => {

    const { photos } = props

    const { setModal, classes } = useCanvas()

    const swiperIIRef = useRef(null)
    const [sign, setSign] = useState(``);

    const [useSlider, setUseSlider] = useState(false)

    useEffect(() => {
        let w = 0;
        for (let p of photos) w += 392 * p.width / 100
        setUseSlider(w > 1360)
    }, [photos])


    return useSlider ? <Slider {...settings} centerMode={false}>
        {photos.map((item, index) => <Slide key={index} item={item} index={index} modal={false} photos={photos}></Slide>)}
    </Slider> : <div className={`slick-slider slider slick-initialized`}>
        <div className={`slick-list`}>
            <div className={`slick-track justify-center`}>
                {photos.map((item, index) => <div className={`slick-slide`} key={index}>
                    <Slide item={item} index={index} modal={false} photos={photos}></Slide>
                </div>)}
            </div>
        </div>
    </div>
}


