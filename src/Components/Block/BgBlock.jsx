
import React, { useRef, useState, useEffect } from "react";
import CurrentBgElement from "./CurrentBgElement"
import NextBgElement from "./NextBgElement"

const BgBlock = (props) => {

    const { app, setBgAnimationIn, setBgAnimationOut, setBgDelay, setBgAnimation } = props;

    useEffect(() => {
        setBgAnimation(true)

        const prev =
            app.prevBranchIndex < 0
                || app.prevChapterIndex < 0
                || app.prevChapterBlockIndex < 0
                ? null
                : app.person.branches[app.prevBranchIndex][app.prevChapterIndex].blocks[app.prevChapterBlockIndex];

        const current =
            app.branchIndex < 0
                || app.chapterIndex < 0
                || app.chapterBlockIndex < 0
                ? null
                : app.person.branches[app.branchIndex][app.chapterIndex].blocks[app.chapterBlockIndex];



        let prevDuration = app.prevChapterIndex == -1 ? (prev ? prev.bg_duration_out : 0) : 1000;
        let nextDuration = app.chapterIndex == -1 ? (current ? current.bg_duration_in : 0) : 1000;

        let nextStart = current ? current.bg_delay_in : 0
        nextStart += (app.prevChapterIndex == -1 ? 500 : 0)
        nextStart += (app.chapterIndex == -1 ? 500 : 0)
        nextStart += (prev ? prev.bg_delay_out : 0)

        setTimeout(() => {
            setBgAnimationOut(false);
        }, prevDuration)

        setTimeout(() => {
            setBgAnimationIn(true);
        }, nextStart)

        setTimeout(() => {
            setBgAnimation(false)
            setBgAnimationIn(false);
        }, nextStart + nextDuration)

        // setBgAnimation(true)
        setBgAnimationOut(true);
        setBgDelay(Math.max(nextStart + nextDuration, prevDuration))

    }, [app.chapterBlockIndex, app.chapterIndex, app.branchIndex])


    return <>
        <div className={`currentBgElement`}><CurrentBgElement {...props}/></div>
        <div className={`nextBgElement`}><NextBgElement {...props} /></div>
    </>
}

export default BgBlock;