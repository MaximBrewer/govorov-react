
import React, { useEffect, useState } from "react";
import Photo from "./bg/Photo"
import Secvence from "./bg/Secvence"


const effects = [
    '',
    'fade-in',
    'slide-up',
    'slide-down',
    'slide-left',
    'slide-right',
]

const effectsOut = [
    '',
    'fade-in',
    'slide-down',
    'slide-up',
    'slide-right',
    'slide-left',
]

const BgElement = (props) => {
    const { reverse, block, animate, current, app } = props;

    const [className, setClassName] = useState(``);
    const [style, setStyle] = useState({});

    useEffect(() => {
        if (block) {
            setClassName(prev => {
                if (!animate)
                    return ``
                if (current) {
                    if (app.direction)
                        setClassName(`${effects[block.bg_effect_out]}-reverse`)
                    else
                        setClassName(`${effectsOut[block.bg_effect_in]}-reverse`)
                } else {
                    if (app.direction)
                        setClassName(`${effects[block.bg_effect_in]}`)
                    else
                        setClassName(`${effectsOut[block.bg_effect_out]}`)
                }
            })
            setStyle(prev => {
                if (!animate) return {
                    animationDuration: `0s`
                };
                if (reverse) {
                    return { animationDuration: `${block.bg_duration_out / 1000}s` }
                } else {
                    return { animationDuration: `${block.bg_duration_in / 1000}s` }
                }
            })
        }
    }, [reverse, block, animate, app.direction])

    return block && block.bg_type == 2 ?
        <div className={`flex-full ${className}`}
            style={style}>
            <Photo {...props} />
        </div>
        : ``
}
export default BgElement;