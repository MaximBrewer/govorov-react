import React, { useEffect, useState } from 'react';

import Button from '../Components/Button';
import { useCanvas } from "../Contexts/canvas";
import { Link } from 'react-router-dom';

export default function () {

    const { classes, direction, started } = useCanvas();

    return (
        <>
            <div className={`relative w-full h-full overflow-hidden`}>
                <div className={`w-full h-full relative`}>=
                    <div className={`bg-navy-60 absolute bottom-0 left-0 w-full h-full ${classes.sky}`}>
                        <div className={`bg-navy-100 translate-y-[38px] h-[293px] absolute bottom-0 left-0 w-full ${classes.neva}`}>
                            <img src={`./img/screensaver/neva.png`} alt={``} className={`absolute left-0 -top-[214px] w-[2014px] h-auto ${classes.city}`} />
                        </div>
                    </div>
                    <svg className={`text-red-500 absolute right-0 top-0 ${classes.star}`} width="1505" height="1080" viewBox="0 0 1505 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M854.742 -12H1610V530.076V1189.42H1244.93H854.742H420.5L626 621.416L0 273.416H734L854.742 -12Z" fill="currentColor" />
                    </svg>
                    <div className={`w-full h-full absolute top-0 left-0`}>
                        <div className={`vinetka w-[calc(100%-20rem)] h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
                        <div className={`flex pl-[108px] pt-[120px] leading-[180px] text-[180px] font-bold tracking-[.02em] relative`}>
                            <div className={classes.post}>Маршал</div>
                            <div className={`leading-[80px] text-[80px]`}>
                                <div className={`relative top-[4px] ${classes.lp}`}>Ленинградской</div>
                                <div className={`relative bottom-[4px] ${classes.lp2}`}>победы</div>
                            </div>
                        </div>
                        <div className={`pl-[108px] pt-[24px] tracking-[.03em] relative`}>
                            <div className={`leading-[80px] text-[80px] font-light ${classes.io}`}>Леонид Александрович</div>
                            <div className={`leading-[300px] text-[300px] font-bold ${classes.f}`}>Говоров</div>
                        </div>
                        <img src={`img/screensaver/govorov.png`} alt={``} className={`absolute right-[352px] bottom-0 w-[809px] h-[882px] ${classes.photo}`} />
                        <Link to={`/instruction`} className={`absolute bottom-[40px] left-[50px]`}>
                            <Button height={100} width={400} className={`rounded-full w-[400px] h-[100px] opacity-0 ${classes.btn}`} color={`outline-teal`} size={`md`}>Инструкция</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
