import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring'
import parse from "html-react-parser"

const trans = (x, y) => `translate3d(${x}px,${y}px,0)`

function Gallery(props) {

    const { photos, app = {} } = props;
    let { onEmptyClick } = props;

    if (!onEmptyClick) {
        onEmptyClick = () => { }
    }

    const galleryRef = useRef(null);

    const calc = (x, y) => {
        return galleryRef && galleryRef.current ? [- (x / window.innerWidth * (galleryRef.current.offsetWidth - window.innerWidth)), - y / window.innerHeight * (galleryRef.current.offsetHeight / 3)] : [0, 0]
    }

    const [pros, set] = useSpring(() => ({ xy: [-window.innerWidth / 2, -24], config: { mass: 10, tension: 200, friction: 140 } }))

    useEffect(() => {
        if (document.addEventListener) {
            document.addEventListener("mousemove", mouseMove);
        }
        return () => {
            if (document.addEventListener) {
                document.removeEventListener("mousemove", mouseMove);
            }
        };
    }, []);

    useEffect(() => {
        if (document.addEventListener) {
            if (app.animation)
                document.removeEventListener("mousemove", mouseMove);
            else
                document.addEventListener("mousemove", mouseMove);
        }
        return () => {
            if (document.addEventListener) {
                document.removeEventListener("mousemove", mouseMove);
            }
        };
    }, [app.animation]);


    const mouseMove = ({ clientX: x, clientY: y }) => {
        set({ xy: calc(x, y) })
    }

    return <>
        <div onClick={() => onEmptyClick()}>
            <animated.div style={{ transform: pros.xy.to(trans) }}>
                <div style={{ minWidth: `99999px` }} className={`flex text-black`}>
                    <div className="space-x-10 whitespace-nowrap px-120 pb-120 flex" ref={galleryRef}>
                        {photos.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className={`relative whitespace-normal`}
                                    onClick={(e) => e.stopPropagation()}
                                    style={{
                                        top: (item.top ? item.top : 30) / 100 * window.innerHeight,
                                        width: (item.height ? item.height : 30) / 100 * window.innerHeight * item.width / 100
                                    }}>
                                    <div className={`bg-white border`}>
                                        <img src={item.photo} className={`w-auto`} style={{ height: (item.height ? item.height : 30) / 100 * window.innerHeight }} alt="" />
                                    </div>
                                    <div className={`py-6 px-4 overflow-hidden bg-white`}>
                                        {item.title ? <div className={`uppercase mb-4  font-md font-bold`}>{item.title}</div> : <></>}
                                        <div className={` font-md w-full`}>{parse(item.description ?? '')}</div>
                                        {item.sign ? <>
                                            <hr className={`border-bronze-600 my-3`} />
                                            <div className={`text-bronze-600  font-sm w-full`}>{item.sign}</div>
                                        </> : ``}
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </animated.div>
        </div>
    </>;
}

export default Gallery