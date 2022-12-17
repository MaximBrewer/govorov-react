
import { useCanvas } from "../Contexts/canvas";
import React, { useEffect, useRef, useState } from "react";
import Photo from "./Block/Carousel"
import Dots from "./Block/Dots"
import Title from "./Block/Text"
import Text from "./Block/Text"
import Video from "./Block/Video"
import Panorama from "./Block/Panorama"
import Carousel from "./Block/Carousel"
import WikiIcon from "./Atoms/WikiIcon";
import DocIcon from "./Atoms/DocIcon";
import { useNavigate, useParams } from "react-router-dom";

export default (props) => {

    const navigate = useNavigate()

    const {
        inClasses,
        outClasses,
        offClasses,
        chapter,
        setChapter,
        entity,
        started,
        setEntity,
        block,
        setBlock,
        classes,
        useVideoRef,
        oRef,
        stepRef,
        cursorRef,
        framesRef,
        fillRef,
        pageRef,
        setClasses,
        loadedVideoRef,
        animationRef,
        indexRef,
        isSecvenceRef,
        dotsIRef,
        dotsIIRef,
        deltaIRef,
        vectorIRef,
        offsetIRef,
        direction,
        deltaIIRef,
        vectorIIRef,
        offsetIIRef,
        imagesRef,
        setSound,
        setVideo
    } = useCanvas();

    const imsRef = useRef([])
    const blockRef = useRef(null)

    const blockIdRef = useRef(null);

    const timeOutAnimationRef = useRef(null)


    useEffect(() => {
        return () => {
            setSound(``);
            setVideo(``);
        }
    }, [])

    useEffect(() => {

        if (block) {
            dotsIRef.current = null
            dotsIIRef.current = null

            if (block && block.type == 4 || block.type == 7) {
                dotsIRef.current = dotsIRef.current ?? true
                dotsIIRef.current = dotsIIRef.current ?? true
            }

            useVideoRef.current = false;
            loadedVideoRef.current = false;
            blockIdRef.current = null
            pageRef.current = 'block'
            // oRef.current = { value: oRef.current.value, start: 0.1, end: 1 }
            framesRef.current = { callback: () => { }, frames: [] };
            imagesRef.current = [];
            imsRef.current = [];
            stepRef.current = 1000
            fillRef.current = null
            setBlock(block);

            if (block) {
                if (block.type == 3) {
                    setVideo(block.video);
                } else {
                    if (block.images && block.images.length) {
                        setImages(block, direction)
                    }
                }
                setVideo(block.video);
                setSound(block.sound)
            } else {
                setSound(``);
                setVideo(``);
            }

            blockRef.current = block;
            // animationRef.current = app.animation;
        }
        return () => {
            framesRef.current.frames = []
            oRef.current = { value: 0, start: 0, end: 0 }
            clearTimeout(timeOutAnimationRef.current)
        }

    }, [block, direction])

    // "0": "Заголовок",
    // "1": "Текст",
    // "3": "Блок работы с видео/видео",
    // "4": "Блок интерактивные карты",
    // "5": "Фото карусель",
    // "6": "Блок Панорама 360o",
    // "7": "Блок интерактивные экспонаты"

    const setImages = (block, direction) => {

        let imArr = [];
        imArr = block.images.map((item, index) => { const img = new Image(); img.src = item; return img; })
        let complete = 0;
        const imgReplace = new Image();
        imgReplace.src = `./images/bgmain.jpg`;
        imArr.map((item, index) => {
            if (!item.complete) {
                complete++;
                item.onload = () => {
                    if (--complete <= 0) loadedImages(imArr, direction)
                }
                item.onerror = () => {
                    imArr[index] = imgReplace;
                    if (--complete <= 0) loadedImages(imArr, direction)
                }
            }
        })
        if (!complete) loadedImages(imArr, direction)
    }

    const loadedImages = (imArr, direction) => {

        if (direction === 0) return false;
        indexRef.current = 0;
        imsRef.current = imArr;
        if (imsRef.current.length) {
            isSecvenceRef.current = true;
            framesRef.current.frames = direction > 0 ?
                imsRef.current.slice(0, Math.ceil(imsRef.current.length / 2)).map((item) => ({ image: item })) :
                imsRef.current.slice(Math.ceil(imsRef.current.length / 2)).map((item) => ({ image: item }));
            oRef.current = direction > 0 ? { value: 0, start: 0, end: 1 } : { value: 1, start: 1, end: 0 }
            indexRef.current = 0;
        }
    }

    useEffect(() => {
        return () => {
            isSecvenceRef.current = false;
            imagesRef.current = null;
            fillRef.current = null
            framesRef.current = null
            setSound(``)
            setVideo(``)
        }
    }, []);


    useEffect(() => {
        setClasses(inClasses)
        setEntity(props.entity)
        setChapter(props.chapter)
        setBlock(props.block)
        return () => {
            setChapter(null)
            setEntity(null)
            setBlock(null)
        }
    }, [])

    const timeoutRefI = useRef(null);

    const swipeDown = () => {

        let block = props.blockIndex, chapter = props.chapterIndex, url = props.url;
        
        if (!!props.nextblock) {
            ++block;
        } else {
            if (!!props.nextchapter) {
                block = 1;
                ++chapter
            } else {
                block = 0;
                chapter = 0;
                switch (props.entity.id) {
                    case 1:
                        url = `/biography/before-war`;
                        break;
                    case 2:
                        url = `/biography/war`;
                        break;
                    case 3:
                        url = `/biography/victory`;
                        break;
                    case 4:
                        url = `/leningrad`;
                        break;
                    case 5:
                        return false;
                }
            }
        }
        chapter && (url += `/${chapter}`)
        block && (url += `/${block}`)

        document.dispatchEvent(new CustomEvent('inertia-before', {
            detail: {
                visit: {
                    url: url
                }
            }
        }))
    }

    const swipeUp = () => {
        let block = props.blockIndex, chapter = props.chapterIndex, url = props.url;
        if (!!props.prevblock) {
            --block;
        } else {
            if (!!props.prevchapter) {
                block = props.prevchapter.blocks.length;
                --chapter
            } else {
                block = 0;
                chapter = 0;
            }
        }
        chapter && (url += `/${chapter}`)
        block && (url += `/${block}`)


        document.dispatchEvent(new CustomEvent('inertia-before', {
            detail: {
                visit: {
                    url: url
                }
            }
        }))
    }

    const timeoutRef = useRef()

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            document.addEventListener('swipe-up', swipeUp)
            document.addEventListener('swipe-down', swipeDown)
        }, 1000)
        return () => {
            clearTimeout(timeoutRef.current)
            document.removeEventListener('swipe-up', swipeUp)
            document.removeEventListener('swipe-down', swipeDown)
        }
    }, [])

    return block ? <div className={`relative w-full h-full overflow-hidden`}>
        <div className={`absolute z-30 left-[38px] bottom-10`} onClick={() => swipeDown()}>
            <svg width="80" height="124" className={`cursor-pointer ${classes.swiper}`} viewBox="0 0 80 124" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        <div className={`flex flex-col space-y-10 absolute z-30 left-[25px] top-10`}>
            {block.doc_title || block.doc_text ? <DocIcon className={`cursor-pointer w-[100px] h-[100px] text-white ${classes.docicon}`} block={block} /> : ``}
            {block.wiki_title || block.wiki_text ? <WikiIcon className={`cursor-pointer w-[100px] h-[100px] text-white ${classes.wikiicon}`} block={block} /> : ``}
        </div>

        <div className={`w-full h-full relative`}>
            <div className={``}>
                {block.bg ? <div className={`absolute bottom-0 left-0 w-[calc(100%-20rem)] h-full bg-cover bg-center ${classes.sky}  pointer-events-none`} >
                    <div className={`absolute -top-12 -left-12 -bottom-12 -right-12 bg-cover bg-center`} style={{ backgroundImage: `url('${block.bg}')` }}>
                        <div className={`animate-soar absolute -top-12 -left-12 -bottom-12 -right-12 bg-cover bg-center`} style={{ backgroundImage: `url('${block.bg2}')` }}></div>
                    </div>
                </div> : ``}

                <div className={`vinetka w-[calc(100%-20rem)] h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
                <div className={`absolute bottom-0 left-0 right-[20rem] h-full`}>
                    {block.type == 0 ? <Title {...props} block={block} />
                        : block.type == 1 ? <Text {...props} block={block} />
                            : block.type == 2 ? <Photo {...props} block={block} />
                                : block.type == 3 ? <Video {...props} block={block} />
                                    : block.type == 4 ? <Dots {...props} block={block} />
                                        : block.type == 5 ? <Carousel {...props} block={block} />
                                            : block.type == 6 ? <Panorama {...props} block={block} />
                                                : ``}
                </div>
            </div>
        </div>
    </div> : ``
}