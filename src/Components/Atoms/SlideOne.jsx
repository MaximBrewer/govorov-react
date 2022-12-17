import React, { useEffect, useState } from "react";
import parse from "html-react-parser"
import { Play } from "../../Icons";
import MediaModal from "./MediaModal";

function SlideOne(props) {
    const { item, setModal } = props

    const [play, setPlay] = useState(false)

    let width = window.innerHeight * .006666 * item.width;
    width = width > window.innerWidth * 3 / 4 ? window.innerWidth * 3 / 4 : width;
    let height = width * 100 / item.width

    useEffect(() => {
        if (item.media) {
            if (item.media.indexOf('.mp4')) {
                setPlay(true)
            }
            if (item.media.indexOf('.mp3')) {
                setPlay(true)
            }
        }
    }, [])


    const playMedia = (e) => {
        e.stopPropagation()
        setModal(<MediaModal {...props} item={item} />)
    }



    return <div className={`flex flex-col space-y-3 h-full`}>
        <div className={`w-full flex flex-col items-center justify-center`}>
            <div className={`pictureAndTexDiv`}>
                <div style={{ width: width }}>
                    <div className={`relative flex-center bg-no-repeat bg-cover bg-center`} style={{
                        width: width,
                        height: height,
                        backgroundImage: `url(${item.photo})`
                    }}>
                        {play ? <Play onClick={(e) => playMedia(e)} className={`cursor-pointer w-1/4 h-auto opacity-90 hover:opacity-100 fill-current text-grey-200 transform transition hover:scale-125 duration-500`} style={{
                            maxWidth: `8rem`
                        }} /> : ``}
                    </div>
                    <div className={`flex mt-2`}>
                        <div className={`border-b border-bronze-600 text-sm uppercase font-medium`}>{item.title}</div>
                    </div>
                    <div className={`text-sm font-Roboto`}>{parse(item.description ?? ``)}</div>
                </div>
            </div>
        </div>
    </div>
}
export default SlideOne