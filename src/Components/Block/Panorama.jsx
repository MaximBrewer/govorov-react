
import React, { useRef, useEffect, useState } from "react";
import ReactPannellum, { getConfig } from "@/Components/Pannellum/index.js";

export default (props) => {
    const { block } = props
    const click = () => {
        console.info(getConfig());
    }
    const config = {
        autoLoad: !0
    };
    return (<>
        <ReactPannellum
            id="panoramaWrapper"
            sceneId="firstScene"
            imageSource={block.bg}
            config={config}
            style={{
                width: `100%`,
                height: `100%`
            }}
        />
        <div onClick={click}>Click me</div>
    </>
    );
}