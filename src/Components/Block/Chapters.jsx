import React, { useEffect, useState, useRef } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import TimeLine from "./TimeLine";
import TopLogo from "../TopLogo"
import RightNavbar from "../RightNavbar"
import RightBottomNavbarChapter from "../RightBottomNavbarChapter"
import BgBlock from "./BgBlock"
import VideoBG from "./VideoBG"
import Block from "./Block"
import PersonMenu from "../PersonMenu"
import parse from "html-react-parser"

import UniverIndex from "./univers/Index"
import FieldsIndex from "./fields/Index"
import VictoryIndex from "./victories/Index"
import WaveSurfer from '../../wavesurfer.js';
import { Pause, Play } from "../../Icons";

const loadSources = (app) => {
    let image, skip = 1;
    for (let chapter of app.person.branches[app.branchIndex]) {
        for (let item of chapter.blocks) {
            for (image of item.photos) {
                if (image.photo)
                    if (window.preloadedPathes.indexOf(image.photo) < 0) {
                        window.preloadedPathes.push(image.photo);
                        skip = 0;
                    }
            }
            for (image of item.dots) {
                if (image.photo)
                    if (window.preloadedPathes.indexOf(image.photo) < 0) {
                        window.preloadedPathes.push(image.photo);
                        skip = 0;
                    }
            }
        }
    }
}

function Chapters(props) {

    let { slug } = useParams();
    const location = useLocation();
    let history = useHistory();
    const { app, nextChapter, prevChapter, closeLeftMenu, setBranch, entity, setModal } = props;

    const { setPreloader, setPreloaderSpeed, setChapter, videoRef } = props;

    const canvas = useRef(null)

    const [playButton, setPlayButton] = useState(false);
    const videoBarRef = useRef(null);

    useEffect(() => {
        if (videoBarRef.current) {
            videoBarRef.current.destroy()
        }
        if (videoRef.current) {
            if (app.video) {
                videoBarRef.current = WaveSurfer.create({
                    backend: "MediaElement",
                    loopSelection: "false",
                    mediaType: 'video',
                    mediaRef: videoRef,
                    mediaControls: false,
                    interact: true,
                    container: '#waveform',
                    progressColor: '#ffffff',
                    waveColor: '#BA955E',
                });
                videoBarRef.current.load(videoRef.current);
                videoBarRef.current.on('ready', function () {
                    videoBarRef.current.play();
                });
            }
        }
    }, [app.video, videoRef.current])

    const onWheel = (e) => {
        if (e.deltaY > 100) {
            nextChapter()
        } else if (e.deltaY < -100) {
            prevChapter()
        }
    };

    useEffect(() => {
        closeLeftMenu();
        switch (entity) {
            case `univers`:
                setBranch(0);
                break;
            case `fields`:
                setBranch(1);
                break;
            case `victories`:
                setBranch(2);
                break;
        }
        if (document.addEventListener) {
            if ("onwheel" in document) {
                document.addEventListener("wheel", onWheel);
            } else if ("onmousewheel" in document) {
                document.addEventListener("mousewheel", onWheel);
            } else {
                document.addEventListener("MozMousePixelScroll", onWheel);
            }
        }
        return () => {
            if (document.addEventListener) {
                if ("onwheel" in document) {
                    document.removeEventListener("wheel", onWheel);
                } else if ("onmousewheel" in document) {
                    document.removeEventListener("mousewheel", onWheel);
                } else {
                    document.removeEventListener(
                        "MozMousePixelScroll",
                        onWheel
                    );
                }
            }
        };
    }, []);

    useEffect(() => {
        setChapter(-1)
        switch (app.branchIndex) {
            case 0:
                window.history.pushState({}, '', `/${slug}/univers`)
                break;
            case 1:
                window.history.pushState({}, '', `/${slug}/war`)
                break;
            case 2:
                window.history.pushState({}, '', `/${slug}/victory`)
                break;
            case 3:
                history.push(`/${slug}/piece`)
        }
        if (app.branchIndex < 3) {
            setPreloaderSpeed(3000)
            setPreloader(9)
            loadSources(app)
        }
    }, [app.branchIndex])



    useEffect(() => {
        return () => {
            setModal(null)
        }
    }, [app.chapterBlockIndex, app.branchIndex, app.chapterIndex])


    const current =
        app.branchIndex < 0
            || app.chapterIndex < 0
            || app.chapterBlockIndex < 0
            ? null
            : app.person.branches[app.branchIndex][app.chapterIndex].blocks[app.chapterBlockIndex];


    return <>
        {!app.preloader && app.person && app.branchIndex < 3 ? (
            <div
                className={`relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden text-white`}>
                <TopLogo  {...props} />
                <RightNavbar {...props} />
                <div className={`relative w-full h-full`}>
                    <TimeLine {...props} entity={entity} />
                    {app.chapterIndex == 0 && app.prevChapterIndex == -1 || app.chapterIndex == -1 ? <div className={`flex-full`}>
                        {app.branchIndex == 2 ? <VictoryIndex {...props} /> : app.branchIndex == 1 ? <FieldsIndex {...props} /> : <UniverIndex {...props} />}
                    </div> : ``}
                    <canvas ref={canvas} className={`flex-full`} />
                    <div className={`top-0 left-0 w-full h-full`}>
                        {app.video && current ? <>
                            <div className={`group flex-full cursor-pointer z-30 ${playButton ? ` bg-black bg-opacity-10` : ``}`} >
                                <div className={`container h-screen mx-auto relative flex flex-col mx-auto justify-end space-y-2`}>
                                    <div onClick={() => {
                                        if (!videoBarRef.current.isPlaying()) {
                                            videoBarRef.current.play()
                                            setPlayButton(false)
                                        } else {
                                            videoBarRef.current.pause();
                                            setPlayButton(true)
                                        }
                                    }} className={`cursor-pointer flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-y-1/2  -translate-x-1/2 fill-current text-bronze-600 w-16 h-16`}>

                                        {playButton ? <Play className={`fill-current text-bronze-600 w-12 h-12 opacity-50 transition-opacity group-hover:opacity-100 `} /> : <Pause className={`fill-current opacity-0 transition-opacity group-hover:opacity-30 text-bronze-600 w-16 h-16`} />}
                                    </div>
                                    {app.animation ? `` : <>
                                        <div className={`opacity-30 transition-opacity group-hover:opacity-100 text-xl`}>{current.title}</div>
                                        <div className={`opacity-30 transition-opacity group-hover:opacity-100 text-sm font-Roboto text-bronze-600`}>{parse(current.text ?? ``)}</div>
                                    </>}
                                    <div id="waveform" className={`w-full opacity-30 transition-opacity group-hover:opacity-100 `} />
                                </div>
                            </div>
                        </> : ``}
                    </div>
                    <BgBlock {...props} />
                    <Block {...props} canvas={canvas} />

                </div>
                <RightBottomNavbarChapter {...props} />
                <div className={`w-1/3 max-w-sm p-6 h-screen bg-grey-300 absolute left-0 z-40 transition-translate duration-1000`} style={{ transform: app.leftmenu ? `translateX(0)` : `translateX(-100%)` }}>
                    <PersonMenu {...props} />
                </div>
            </div>
        ) : ``
        }
    </>;
}

export default Chapters