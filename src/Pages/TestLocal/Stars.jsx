import React, { useEffect, useState } from 'react';

export default function (props) {

    const { results, questions, corrects, inClasses, outClasses, started } = props


    const [total, setTotal] = useState(0)

    useEffect(() => {
        console.log(results, corrects)
        let cc = 0;
        for (let c in results) if (results[c] && corrects[c] === results[c]) ++cc
        setTotal(cc)
    }, [results, corrects])

    return <div className={`flex items-center ${inClasses.post}`}>
        <ul className={`grid grid-cols-10 items-center gap-5 relative`}>
            {questions.data.map((item, index) => <li key={index} className={!results[item.sort] ? `text-navy-40` : (results[item.sort] === corrects[item.sort] ? `text-bronze-100` : `text-navy-80`)}>
                <svg width="58" height="55" viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 0.230469L35.7354 20.96H57.5317L39.8981 33.7715L46.6335 54.501L29 41.6894L11.3664 54.501L18.1018 33.7715L0.468262 20.96H22.2645L29 0.230469Z" fill="currentColor" />
                </svg>
            </li>)}
        </ul>
        <div className={`font-raleway ml-10 text-[60px] leading-[70px] tracking-[5%] font-bold`}>{total}/{questions.data.length}</div>
    </div>
}