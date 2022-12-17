
import React, { useRef, useEffect, useState } from "react";

import WaveSurfer from 'wavesurfer.js';
import parse from "html-react-parser"
import { useCanvas } from "@/Contexts/canvas";
import { Pause, Play } from "@/Icons";

const Video = (props) => {

    const [playButton, setPlayButton] = useState(0);

    const vIntervalRef = useRef(null)

    const {
        oRef,
        videoRef,
        block,
        useVideoRef,
        direction,
        loadedVideoRef,
        videoBarRef,
        fillRef,
        isSecvenceRef,
        framesRef,
        imagesRef,
        stepRef,
        setVideo,
        video,
        classes
    } = useCanvas();

    useEffect(() => {
        videoBarRef.current && videoBarRef.current.destroy()

        if (video && direction > 0) {
            imagesRef.current = null;
            fillRef.current = null
            useVideoRef.current = true
            isSecvenceRef.current = false;
            framesRef.current = {
                callback: () => { },
                frames: []
            }
            oRef.current = { value: 0, start: 0, end: 1 }
            stepRef.current = 2000
            videoBarRef.current = WaveSurfer.create({
                backend: "MediaElement",
                loopSelection: "false",
                mediaType: 'video',
                mediaControls: false,
                interact: true,
                container: '#waveform',
                progressColor: '#ffffff',
                waveColor: '#BA955E',
            });
            videoBarRef.current.load(videoRef.current);
            videoBarRef.current.on('ready', function () {
                loadedVideoRef.current = true;
                try {
                    videoRef.current.muted = false;
                    videoBarRef.current.play();
                } catch (e) {
                    console.log(e)
                }
                videoBarRef.current.setVolume(0);
                vIntervalRef.current = setInterval(() => {
                    let nVolume = videoBarRef.current.getVolume() + 0.1;
                    if (nVolume >= 1) {
                        videoBarRef.current.setVolume(1);
                        clearInterval(vIntervalRef.current)
                    } else videoBarRef.current.setVolume(nVolume)
                }, 30)
                setPlayButton(videoBarRef.current.isPlaying() ? 2 : 1)
            });
        }
        if (video && videoBarRef.current && direction < 0) {
            vIntervalRef.current = setInterval(() => {
                try {
                    let nVolume = videoBarRef.current.getVolume() - 0.1;
                    if (nVolume < 0) {
                        videoBarRef.current.setVolume(0);
                        clearInterval(vIntervalRef.current)
                    } else videoBarRef.current.setVolume(nVolume)
                } catch (e) {

                }
            }, 30)
            oRef.current = { value: 1, start: 1, end: 0 }
            stepRef.current = 500
        }
        return () => {
            clearInterval(vIntervalRef.current)
            videoBarRef.current && videoBarRef.current.destroy()
        }
    }, [video, direction])

    useEffect(() => {
        block && setVideo(block.video)
        return () => {
            setVideo(null)
        }
    }, [block])

    return <div className={`top-0 left-0 w-full h-full`}>
        <div className={`group duration-500 h-full transition-opacity flex-full cursor-pointer z-30 ${playButton ? ` bg-black bg-opacity-10` : ``}`} >
            <div className={`container h-full mx-auto relative mx-auto`}>
                <div className="h-full relative flex flex-col">
                    <div className="mx-24 flex flex-col mx-auto items-center justify-between h-full pt-12">
                        <div className={`w-full ${classes.io}`}>
                            <div className={`opacity-80 transition-opacity group-hover:opacity-100 uppercase text-white text-[24px] font-bold my-2 text-white`}>{block.title}</div>
                            <div className={`opacity-80 transition-opacity group-hover:opacity-100 font-raleway text-[18px] text-white markdown font-medium`}>{parse(block.text ?? ``)}</div>
                        </div>
                        <div className="flex-center w-full">
                            <div id="waveform" className={`mx-8 w-full`} />
                        </div>
                    </div>
                    <div onClick={() => {
                        if (!videoBarRef.current.isPlaying()) {
                            try {
                                videoBarRef.current.play();
                            } catch (e) { }
                            setPlayButton(2)
                        } else {
                            videoBarRef.current.pause();
                            setPlayButton(1)
                        }
                    }} className={`cursor-pointer flex items-center justify-center absolute top-0 left-0 h-full w-full fill-current text-bronze-600`}>
                        {playButton == 1 ? <Play className={`fill-current text-bronze-100 w-24 h-auto transition-opacity opacity-100`} /> : ``}
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Video;