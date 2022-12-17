
import React, { useRef, useEffect, useState } from "react";

const ImageBG = ({ app }) => {
    if(app.branchIndex < 0 || app.chapterIndex < 0 || app.chapterBlockIndex < 0){} else {

    }
    return (app.branchIndex >= 0 && app.chapterIndex >= 0 && app.chapterBlockIndex >= 0 && app.person.branches[app.branchIndex][app.chapterIndex].blocks[app.chapterBlockIndex].bg ? 
        <div className={`flex-full bg-cover bg-no-repeat bg-center transition transition-opacity duration-500 opacity-100`} style={{ backgroundImage: `url(${app.person.branches[app.branchIndex][app.chapterIndex].blocks[app.chapterBlockIndex].bg})` }}>
        </div> : ``
    )
}

export default ImageBG;