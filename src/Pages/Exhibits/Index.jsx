import React from 'react';
import Carousel from '@/Components/Carousel';
import { useCanvas } from "@/Contexts/canvas";
import DelayLink from '../../Components/DelayLink';

export default (props) => {

    const { classes, started } = useCanvas();

    const setModal = () => { }

    return (

        <>
            <div className={`relative w-full h-full overflow-hidden`}>
                <div className={`h-full w-full top-0 left-0 absolute pr-[20rem]`}>
                    <svg className={`text-navy-80 absolute right-0 top-0 pointer-events-none ${classes.starR}`} width="1505" height="1080" viewBox="0 0 1505 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M854.742 -12H1610V530.076V1189.42H1244.93H854.742H420.5L626 621.416L0 273.416H734L854.742 -12Z" fill="currentColor" />
                    </svg>
                </div>
                <div className={`w-full h-full relative pr-[20rem]`}>
                    <div className={``}>
                        <div className={`relative z-10 pt-[100px] pb-[81px] flex flex-col justify-between h-full`}>
                            <div className={`pl-[60px] pr-[40px] flex items-center mb-[40px] justify-between`}>
                                <div className={`text-navy-40 text-[80px] uppercase leading-none font-bold ${classes.post}`}>{props.title}</div>
                                <DelayLink to={`/exhibits`} className={`relative -top-px text-navy-20 border-2 border-navy-60 rounded-full py-6 px-8 flex items-center space-x-3 text-[1.5rem] leading-none opacity-0 ${classes.btn}`}>
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.42902 12.4602L1.36836 13.5208L3.48968 15.6421L4.55034 14.5815L2.42902 12.4602ZM14.4498 0.43934L2.42902 12.4602L4.55034 14.5815L16.5712 2.56066L14.4498 0.43934Z" fill="#D6DBDE" />
                                        <path d="M6 12.0098H4.5V15.0098H6V12.0098ZM27 12.0098L6 12.0098V15.0098L27 15.0098V12.0098Z" fill="#D6DBDE" />
                                        <path d="M4.0606 12.4498L2.99994 11.3891L0.878616 13.5104L1.93928 14.5711L4.0606 12.4498ZM16.0814 24.4706L4.0606 12.4498L1.93928 14.5711L13.9601 26.5919L16.0814 24.4706Z" fill="#D6DBDE" />
                                    </svg>
                                    <span className={`relative top-px`}>Назад в раздел</span>
                                </DelayLink>
                            </div>
                            <div className={`z-10 justify-center flex items-center space-x-3 w-full text-bronze-100 font-semibold font-raleway text-[18px] leading-[22px]`}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.2431 8.55225H14.9669V14.9666H8.55249V19.2429H14.9669V25.6572H19.2431V19.2429H25.6575V14.9666H19.2431V8.55225Z" fill="#9E825F" />
                                    <path d="M17.105 0C7.67372 0 0 7.67372 0 17.105C0 26.5362 7.67372 34.21 17.105 34.21C20.9001 34.2092 24.5859 32.9387 27.5754 30.6008L36.9746 40L39.9979 36.9767L30.5987 27.5775C32.9378 24.5877 34.209 20.9011 34.21 17.105C34.21 7.67372 26.5362 0 17.105 0ZM17.105 29.9337C10.0299 29.9337 4.27625 24.18 4.27625 17.105C4.27625 10.0299 10.0299 4.27625 17.105 4.27625C24.18 4.27625 29.9337 10.0299 29.9337 17.105C29.9337 24.18 24.18 29.9337 17.105 29.9337Z" fill="#9E825F" />
                                </svg>
                                <span>Для увеличения нажмите на изображение</span>
                            </div>
                        </div>
                        <div className={`vinetka w-[calc(100%-20rem)] h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
                    </div>
                </div>
                <div className={`z-10 h-full w-full top-0 left-0 absolute flex flex-col justify-center pr-[20rem] pointer-events-none`}>
                    <div className={`px-[120px] pointer-events-auto`}>
                        <Carousel setModal={setModal} photos={props.photos.data} />
                    </div>
                </div>
            </div>
        </>
    );
}
