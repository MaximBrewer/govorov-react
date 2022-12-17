
import React, { useRef, useEffect, useState } from "react";

const Video = (props) => {

    const { block, app, setVideo, videoRef, current } = props
    const canvasRef = useRef(null);

    const videoDeltaWidthRef = useRef(null);
    const videoDeltaHeightRef = useRef(null);
    const idAnimationFrame = useRef(null);

    const [time, setTime] = useState(0)

    const animate = time => {
        if (canvasRef.current && videoRef.current) {
            if (videoRef.current.duration) {
                setTime(videoRef.current.currentTime / videoRef.current.duration)
            }
            canvasRef.current.width = canvasRef.current.clientWidth;
            canvasRef.current.height = canvasRef.current.clientHeight;
            canvasRef.current.getContext('2d').drawImage(videoRef.current, -videoDeltaWidthRef.current, -videoDeltaHeightRef.current, canvasRef.current.width + 2 * videoDeltaWidthRef.current, canvasRef.current.height + 2 * videoDeltaHeightRef.current);
        }
        idAnimationFrame.current = requestAnimationFrame(animate);
    }

    const loadedData = () => {
        let wi = videoRef.current.videoWidth,
            hi = videoRef.current.videoHeight,
            wc = canvasRef.current.clientWidth,
            hc = canvasRef.current.clientHeight,
            width, height
        if (wi / hi > wc / hc) {
            height = Math.max(hi, hc)
            height = hc
            width = height * wi / hi
        } else {
            width = Math.max(wi, wc)
            width = wc
            height = width * hi / wi
        }
        videoDeltaWidthRef.current = (width - wc) / 2
        videoDeltaHeightRef.current = (height - hc) / 2;
        cancelAnimationFrame(idAnimationFrame.current);
        idAnimationFrame.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('loadeddata', loadedData);
            setVideo(block.video);
        }

        return () => {
            cancelAnimationFrame(idAnimationFrame.current);
            if (videoRef.current) {
                videoRef.current.removeEventListener('loadeddata', loadedData);
                if (current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                }
            }
        }

    }, [])

    useEffect(() => {
        if (videoRef.current && app.video) {
            videoRef.current.play()
        }
    }, [app.video, videoRef.current])


    useEffect(() => {
        if (canvasRef.current && videoRef.current && app.video) {
            cancelAnimationFrame(idAnimationFrame.current);
            idAnimationFrame.current = requestAnimationFrame(animate);
        }
    }, [canvasRef.current])


    return (
        <div className={`top-0 left-0 w-full h-full`}>
            <canvas ref={canvasRef} className={`bg-cover bg-center w-full h-full bg-no-repeat`}></canvas>
            <div className={`max-w-4xl w-full fixed bottom-12`} style={{ left: `50%`, transform: `translateX(-50%)` }}>
                <input type="range" className={`w-full`} min={0} max={100} value={time * 100} step={.01} />
            </div>
        </div>
    )
}

export default Video;