import React from 'react';

export default (props) => {
    const { className = ``, onClick = () => { }, style = {}, height = 90, width = false, type = `button`, children = ``, color = `primary`, size = false, disabled = false } = props

    const attr = {
        type: type,
        style: style,
        disabled: disabled
    }

    attr.className = `w-full flex justify-center items-center transition no-underline text-center`

    switch (size) {
        case `xs`:
        case `sm`:
        case `md`:
            attr.className = `${attr.className} px-[16px] space-x-3 h-[${height}px] ${width ? `w-[${width}px]` : ``} font-bold text-[24px] tracking-[.05em] border-2 leading-none`
            break;
        default:
            attr.className = `${attr.className} px-[16px] space-x-3 h-[${height}px] ${width ? `w-[${width}px]` : ``} font-bold text-[30px] tracking-[.05em] border-2 leading-none`
            break;
    }

    switch (color) {
        case `outline`:
            attr.className = `${attr.className} bg-transparent text-teal-100 border-teal-100 disabled:bg-teal-75 hover:bg-teal-75 hover:text-teal-300 hover:border-teal-300`
            break;
        case `outline-teal`:
            attr.className = `${attr.className} bg-teal-75 text-teal-500 border-white disabled:bg-teal-100 hover:bg-teal-100 hover:text-teal-500 hover:border-teal-50`
            break;
        case `bronze`:
            attr.className = `${attr.className} bg-bronze-120 text-white hover:bg-bronze-500 text-shadow`
            break;
        default:
            attr.className = `${attr.className} bg-teal-300 text-white hover:bg-bronze-500 focus:bg-bronze-120 hover:text-teal-50 text-shadow`
            break;
    }

    attr.className = `${attr.className} ${className}`;
    !!onClick && (attr.onClick = onClick);

    return <button {...attr}><div className={`relative top-1`}>{children}</div></button>
}