
import React, { useState, useEffect } from "react";

import BlockElement from "./BlockElement"

const NextElement = (props) => {
    const { app } = props;
    const [block, setBlock] = useState(null);
    const [reverse, setReverse] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (!app.animation) {
            setAnimate(false);
            setTimeout(() => {
                setBlock(null)
            }, 50)
        }
    }, [app.animation])

    useEffect(() => {
        const current =
            app.branchIndex < 0
                || app.chapterIndex < 0
                || app.chapterBlockIndex < 0
                ? null
                : app.person.branches[app.branchIndex][app.chapterIndex].blocks[app.chapterBlockIndex];

        if (app.animationIn) {
            setBlock(current)
            setReverse(false);
            setAnimate(true);
        }

    }, [app.animationIn])

    return <BlockElement current={false} block={block} reverse={reverse} animate={animate} {...props} />;
}
export default NextElement;