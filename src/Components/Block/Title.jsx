import React from "react";

function Title(props) {
    const { reverse, block, animate } = props;
    return block ? <div className={`${animate && !reverse ? `` : `scaling-intro`} flex-full`}>
        <div className={`max-w-4xl bg-cover heading text-transparent leading-none text-center`}>
            <div className={`overflow-hidden flex flex-col item`}>
                <div className={`text-10xl ${reverse ? `first-up-reverse` : `first-up`} ash-text-bg`}
                    style={animate ? reverse ? {
                        animationDuration: `${block.duration_out / 1000}s`
                    } : {
                        animationDuration: `${block.duration_in / 1000}s`
                    } : {}}>{block.title}</div>
            </div>
            {block.title2 ? <div className={`overflow-hidden flex flex-col item`}>
                <div className={`text-10xl ${reverse ? `second-up-reverse` : `second-up`} ash-text-bg`}
                    style={animate ? reverse ? {
                        animationDuration: `${block.duration_out / 1000}s`
                    } : {
                        animationDuration: `${block.duration_in / 1000}s`
                    } : {}}>{block.title2}</div>
            </div> : ``}
            {block.title3 ? <div className={`overflow-hidden flex flex-col item`}>
                <div className={`text-10xl ${reverse ? `third-up-reverse` : `third-up`} ash-text-bg`}
                    style={animate ? reverse ? {
                        animationDuration: `${block.duration_out / 1000}s`
                    } : {
                        animationDuration: `${block.duration_in / 1000}s`
                    } : {}}>{block.title3}</div>
            </div> : ``}
        </div>
        <div className={`max-w-4xl my-8`}>
            <div className={`overflow-hidden`}>
                <div className={`flex space-x-4 items-center justify-center text-bronze-600 ${reverse ? `second-up-reverse` : `second-up`}`}
                    style={animate ? reverse ? {
                        animationDuration: `${block.duration_out / 1000}s`
                    } : {
                        animationDuration: `${block.duration_in / 1000}s`
                    } : {}}>
                    {block.since >= block.until ? <>
                        <span>{block.since}</span>
                    </> : <>
                        <span>{block.since}</span>
                        <svg className={`fill-current w-12 h-4`} viewBox="0 0 61 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60.7071 8.20711C61.0976 7.81658 61.0976 7.18342 60.7071 6.79289L54.3431 0.428932C53.9526 0.0384078 53.3195 0.0384078 52.9289 0.428932C52.5384 0.819457 52.5384 1.45262 52.9289 1.84315L58.5858 7.5L52.9289 13.1569C52.5384 13.5474 52.5384 14.1805 52.9289 14.5711C53.3195 14.9616 53.9526 14.9616 54.3431 14.5711L60.7071 8.20711ZM0 8.5H60V6.5H0V8.5Z" />
                        </svg>
                        <span>{block.until}</span>
                    </>}
                </div>
            </div>
        </div>
    </div> : ``
}

export default Title