import React from "react";

import Gallery from "./Gallery"

function Photo(props) {
    const { block, app } = props
    return <>
        <div className={`top-0 left-0 w-full min-h-full absolute`}>
            <Gallery photos={block.photos} app={app} />
        </div>
    </>;
}

export default Photo