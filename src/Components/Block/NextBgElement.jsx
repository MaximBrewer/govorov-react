
import React, { useState, useEffect } from "react";

import BgElement from "./BgElement"

const NextBgElement = (props) => {
    const { app } = props;
    const [block, setBlock] = useState(null);
    const [reverse, setReverse] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (!app.bgAnimationIn && !app.bgAnimationOut) {
            setBlock(null)
        }
    }, [app.bgAnimationOut])

    useEffect(() => {
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

        if (app.bgAnimationIn) {
            setBlock(current)
            setReverse(false);
            setAnimate(true);
        }
        if (!app.bgAnimationIn && !app.bgAnimationOut) {
            setBlock(null)
            setAnimate(false);
        }

    }, [app.bgAnimationIn])

    return <BgElement {...props} current={false} block={block} reverse={reverse} animate={animate}/>;
}
export default NextBgElement;