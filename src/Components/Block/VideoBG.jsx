
import React, { useRef, useEffect, useState } from "react";

const VideoBG = (props) => {

    const canvas = useRef(null);
    const imagesRef = useRef([]);
    const requestRef = useRef();
    const previousImageIndex = useRef(0);
    const startTimeRef = useRef(0);
    const completeRef = useRef(0);
    const imgDeltaWidthRef = useRef(0);
    const imgDeltaHeightRef = useRef(0);

    const clearCanvas = () => {
        canvas.current.getContext('2d').clearRect(0, 0, canvas.current.width, canvas.current.height);
    }

    const animate = time => {
        if (!startTimeRef.current) startTimeRef.current = time
        let index = Math.ceil((time - startTimeRef.current) * 0.02);
        if (previousImageIndex.current != index) {
            previousImageIndex.current = index;
            if (!!imagesRef.current[index]) {
                canvas.current.getContext('2d').drawImage(imagesRef.current[index], -imgDeltaWidthRef.current, -imgDeltaHeightRef.current, canvas.current.width + 2 * imgDeltaWidthRef.current, canvas.current.height + 2 * imgDeltaHeightRef.current);
            }
        }
        if (!!imagesRef.current[index]) requestRef.current = requestAnimationFrame(animate);
    }

    const startAnimate = () => {
        cancelAnimationFrame(requestRef.current)
        if (canvas.current) {
            canvas.current.width = canvas.current.clientWidth;
            canvas.current.height = canvas.current.clientHeight;
            requestRef.current = requestAnimationFrame(animate);
        }
    }

    useEffect(() => {
        if (app.chapterIndex > -1) {

            if (app.prevChapterBlockIndex > app.chapterBlockIndex) {
                if (app.person.branches[app.prevBranchIndex][app.prevChapterIndex].blocks[app.prevChapterBlockIndex]) {
                    imagesRef.current = app.person.branches[app.prevBranchIndex][app.prevChapterIndex].blocks[app.prevChapterBlockIndex].images.slice().reverse().map((item, index) => { const img = new Image(); img.src = item; return img; })
                }
            } else {
                imagesRef.current = app.person.branches[app.branchIndex][app.chapterIndex].blocks[app.chapterBlockIndex].images.map((item, index) => { const img = new Image(); img.src = item; return img; })
            }

            previousImageIndex.current = 0;
            startTimeRef.current = 0;
            completeRef.current = 0;
            imagesRef.current.map(item => {
                if (!item.complete) {
                    completeRef.current++;
                    item.onload = () => {
                        if (--completeRef.current <= 0) startAnimate();
                    }
                }
            })
            if (canvas && imagesRef.current.length && completeRef.current <= 0) {
                let wi = imagesRef.current[0].width,
                    hi = imagesRef.current[0].height,
                    wc = canvas.current.clientWidth,
                    hc = canvas.current.clientHeight,
                    width, height
                if (wi / hi > wc / hc) {
                    height = Math.max(hi, hc)
                    width = height * wi / hi
                } else {
                    width = Math.max(wi, wc)
                    height = width * hi / wi
                }

                imgDeltaWidthRef.current = (width - wc) / 2
                imgDeltaHeightRef.current = (height - hc) / 2;
                startAnimate();
            } else {
                clearCanvas()
            }
        } else {
            clearCanvas()
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [app.chapterBlockIndex, app.chapterIndex, app.branchIndex]);

    return (
        <div className={`top-0 left-0 w-full h-full`}>
            <canvas ref={canvas} className={`bg-cover bg-center w-full h-full bg-no-repeat`} />
        </div>
    )
}

export default VideoBG;