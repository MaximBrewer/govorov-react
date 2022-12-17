import React from 'react';

export default (props) => {
    const { className = ``, onClick = () => { }, children = ``, color = `primary`} = props

    let attr = {}

    attr.className = `w-full flex justify-center items-center transition no-underline text-center px-[16px] space-x-3 h-[80px] font-bold text-[24px] tracking-[.05em] border-2 leading-none rounded-[10px]`

    switch (color) {
        case `bronze`:
            attr.className = `${attr.className} bg-bronze-120 text-white hover:bg-bronze-500 text-shadow`
            break;
        default:
            attr.className = `${attr.className} bg-navy-60 text-white hover:bg-bronze-500 focus:bg-bronze-120 text-shadow`
            break;
    }

    attr.className = `${attr.className} ${className}`;
    !!onClick && (attr.onClick = onClick);

    return <button {...attr}><div className={`relative top-1`}>{children}</div></button>
}