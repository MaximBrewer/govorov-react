import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring'
import parse from "html-react-parser"


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import { conditionalExpression } from "@babel/types";
import SlideOne from "../Atoms/SlideOne";
import SlideThree from "../Atoms/SlideThree";
SwiperCore.use([Pagination, Navigation]);

function Gallery(props) {

    const { items } = props

    const swiperIRef = useRef(null)
    const swiperIIRef = useRef(null)

    const [open, setOpen] = useState(false);
    const [sign, setSign] = useState(<div className={`fixed right-8 bottom-8 text-bronze-600 text-sm font-Roboto transition`}>{items.length ? items[0].sign : ``}</div>);

    return <>
        <div className={`z-50 bg-black bg-opacity-95 ${open ? `flex-full` : `hidden`}`}>
            <svg width="58" height="55" className={`cursor-pointer fixed right-8 top-8`} viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => { setOpen(false) }}>
                <line x1="43.142" y1="41.4263" x2="14.8577" y2="13.1421" stroke="#BA955E" strokeWidth="2" />
                <line x1="43.1422" y1="13.1422" x2="14.8579" y2="41.4264" stroke="#BA955E" strokeWidth="2" />
            </svg>
            <div className={`relative z-50 w-3/4 max-w-4xl 
            flex flex-col space-y-4 h-full justify-center`}>
                <Swiper speed={700} slidesPerView={1} spaceBetween={0} loop={false} loopFillGroupWithBlank={true} navigation={true} className={`w-full -mx-20 h-4/5 opened`}
                    onInit={swiper => {
                        swiperIRef.current = swiper
                    }}
                    onSlideChange={(swiper) => {
                        swiperIIRef.current.slideTo(swiper.realIndex)
                        setSign(<div className={`fixed right-8 bottom-8 text-bronze-600 text-sm font-Roboto transition`}>{items[swiper.realIndex].sign}</div>)
                    }}>
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SlideOne  {...props} item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        <div className={`relative z-50 mx-auto mt-8 w-full max-w-4xl ${open ? `hidden` : `flex`} flex-col space-y-4 h-full justify-center`}>
            <Swiper speed={700} slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={false} loopFillGroupWithBlank={true} pagination={{
                "clickable": true
            }} navigation={true} className={`mySwiper w-full three`}
                onInit={swiper => {
                    swiperIIRef.current = swiper
                }}
                onSlideChange={(swiper) => {
                    setSign(<div className={`fixed right-8 bottom-8 text-bronze-600 text-sm font-Roboto transition`}>{items[swiper.realIndex].sign}</div>)
                    swiperIRef.current.slideTo(swiper.realIndex)
                }}>
                {items.map((item, index) => (
                    <SwiperSlide key={index} onClick={() => {
                        setOpen(prev => !prev)
                        swiperIRef.current.slideTo(index, 0)
                    }}>
                        <SlideThree {...props} item={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>;
}

export default Gallery


