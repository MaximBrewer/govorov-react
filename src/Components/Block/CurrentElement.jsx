
import React, { useState, useEffect } from "react";

import BlockElement from "./BlockElement"

const CurrentElement = (props) => {
    const { app } = props;
    const [block, setBlock] = useState(null);
    const [reverse, setReverse] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (app.animationOut) {
            setAnimate(true);
            setReverse(true);
        }
    }, [app.animationOut])

    useEffect(() => {
        const current =
            app.branchIndex < 0
                || app.chapterIndex < 0
                || app.chapterBlockIndex < 0
                ? null
                : app.person.branches[app.branchIndex][app.chapterIndex].blocks[app.chapterBlockIndex];
        if (!app.animationIn) {
            setBlock(current)
            setReverse(false);
            setAnimate(false);
        }
    }, [app.animationIn])

    return <BlockElement current={true} block={block} reverse={reverse} animate={animate} {...props} />;
}
export default CurrentElement;