import React, { useEffect, useRef, useState } from "react";
import Dot from "@/Components/Atoms/Dot"
import { useCanvas } from "@/Contexts/canvas";

function Dots(props) {

    const { block } = props

    const { setModal, classes } = useCanvas()
    const [show, setShow] = useState(-1);

    return <>
        <div className={`top-0 left-0 w-full h-full overflow-auto`}>
            <div className={`flex p-4`}>
                <div className={`bg-no-repeat bg-full bg-left-top w-full h-full`}
                    onClick={() => { setShow(-1) }}
                    style={{
                        backgroundImage: `url(${block.bg})`
                    }}>
                    {block.dots.map((item, index) => (
                        <Dot setModal={setModal} key={index} item={item} show={show == index} open={() => setShow(index)} close={() => setShow(-1)} />
                    ))}
                </div>
            </div>
        </div>
    </>;
}

export default Dots