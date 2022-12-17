import React, { useEffect, useRef, useState } from 'react';

import Button from './Button';
import SubButton from './SubButton';
import { useCanvas } from '../Contexts/canvas';
import parse from 'html-react-parser';
import DelayLink from './DelayLink';
import { useLocation } from 'react-router-dom';

export default () => {

    const ref = useRef(null)
    const {
        classes,
        direction,
        entity,
        chapter,
        timeline,
        demo,
        setDemo,
        setTimeline,
        path,
        setPath,
        started,
        setStarted
    } = useCanvas();


    const [sidebarclasses, setSidebarclasses] = useState(``)

    useEffect(() => {
        if (direction < -5) {
            setSidebarclasses(`animate-slideUp`)
        }
        if (direction > 5) {
            setSidebarclasses(`animate-slideDown`)
        }
    }, [direction])

    useEffect(() => {
        if (ref.current) {
            setTimeout(() => {
                setStarted(true)
            }, 3000)
        }
    }, [ref.current])

    const location = useLocation();

    useEffect(() => {
        // Inertia.on('success', (event) => {
        //     setPath(event.detail.page.url)
        // })
    }, [])

    const getUrl = (entity, chapterIndex) => {
        let url = ``;
        switch (entity.id) {
            case 1:
                url += `/biography/youth`
                break;
            case 2:
                url += `/biography/before-war`
                break;
            case 3:
                url += `/biography/war`
                break;
            case 4:
                url += `/biography/victory`
                break;
            case 5:
                url += `/leningrad`
                break;
        }
        url += `/${chapterIndex * 1 + 1}/1`
        return url
    }

    return <>
        {entity ? <div className={`absolute z-10 right-0 top-0 h-full w-[320px] ${started ? `` : `animate-sidebarIn translate-x-full`}`}>
            <div className={`absolute text-[20px] w-[350px] leading-none pt-[50px] pr-[46px] pb-[50px] pl-[13px] text-navy-40 font-bold h-full bg-navy-100 top-0 ${timeline ? `-translate-x-full` : `translate-x-0`} transition duration-500`}>
                <div className={`top-[55px] absolute left-0 -translate-x-full `}>
                    <div className={`mb-[10px] cursor-pointer flex items-center space-x-2 p-5 bg-navy-100 rounded-l-[5px]`} onClick={() => setTimeline(prev => !demo && !prev)}>
                        <span className={`text-white word-break`}>{parse(chapter.title)}</span>
                        <svg className={`relative -top-[2px]`} width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1.5L14 13.5L2 25.5" stroke="#92A3A8" strokeWidth="3" />
                        </svg>
                    </div>
                    <ul className={`flex flex-col poiner-events-none space-y-[5px]`}>
                        {entity.chapters.map((item, index) => <li key={index} className={`flex justify-end items-center space-x-[5px] pr-[15px]`}>
                            {item.id == chapter.id ? <>
                                <span className={`text-red-500 font-manrope text-[16px]`}>{item.years}</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="#E24C4C" />
                                </svg>
                            </> : <>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="19" height="19" fill="#131F23" fillOpacity="0.75" stroke="#92A3A8" />
                                </svg>
                            </>}
                        </li>)}
                    </ul>
                </div>
                <div className={`border-b-2 border-navy-80 py-[15px] font-raleway font-extrabold`}>Выберите период:</div>
                <ul className={``}>
                    {entity.chapters.map((item, index) => <li key={index}>
                        <DelayLink to={getUrl(entity, index)} className={`border-b-2 border-navy-80 block py-[15px] px-[20px] flex flex-col space-y-[5px] hover:bg-navy-80 transition`}>
                            {item.id == chapter.id ? <>
                                <span className={`text-red-500 font-raleway text-[16px]`}>{item.years}</span>
                                <span className={`text-white`}>{item.title}</span>
                            </> : <>
                                <span className={`text-navy-60 font-raleway text-[16px]`}>{item.years}</span>
                                <span>{item.title}</span>
                            </>}
                        </DelayLink>
                    </li>)}
                </ul>
            </div>
        </div> : ``}

        <div className={`absolute z-50 right-0 top-0 h-full w-[320px] ${started ? `` : `animate-sidebarIn translate-x-full`}`}>


            <div className={`relative z-10 h-full bg-teal-50 w-full px-[36px] pt-[100px] pb-[40px] flex flex-col justify-between`} ref={ref}>
                <ul className={`w-full space-y-[10px]`}>
                    <li>
                        {location.pathname.indexOf('/biography') > -1 ? <Button className={`uppercase`} color={`bronze`}>Биография</Button> : <DelayLink to={`/biography/youth`} className={`block`}>
                            <Button className={`uppercase`}>Биография</Button>
                        </DelayLink>}
                        {location.pathname.indexOf('/biography') > -1 ? <div className={`w-full overflow-hidden ${sidebarclasses}`}>
                            <ul className={`w-full space-y-[10px] my-[10px]`}>
                                {location.pathname.indexOf('/biography/youth') > -1 ? <SubButton className={`uppercase`} color={`bronze`}>Детство и юность</SubButton> : <DelayLink to={`/biography/youth`} className={`block`}>
                                    <SubButton className={`uppercase`}>Детство и юность</SubButton>
                                </DelayLink>}
                                {location.pathname.indexOf('/biography/before-war') > -1 ? <SubButton className={`uppercase`} color={`bronze`}>Служба до ВОВ</SubButton> : <DelayLink to={`/biography/before-war`} className={`block`}>
                                    <SubButton className={`uppercase`}>Служба до ВОВ</SubButton>
                                </DelayLink>}
                                {location.pathname.indexOf('/biography/war') > -1 ? <SubButton className={`uppercase`} color={`bronze`}>Война</SubButton> : <DelayLink to={`/biography/war`} className={`block`}>
                                    <SubButton className={`uppercase`}>Война</SubButton>
                                </DelayLink>}
                                {location.pathname.indexOf('/biography/victory') > -1 ? <SubButton className={`uppercase`} color={`bronze`}>После победы</SubButton> : <DelayLink to={`/biography/victory`} className={`block`}>
                                    <SubButton className={`uppercase`}>После победы</SubButton>
                                </DelayLink>}
                            </ul>
                        </div> : ``}

                    </li>
                    <li>
                        {path === '/leningrad' ? <Button className={`uppercase`} color={`bronze`}>Битва за&nbsp;ленинград</Button> : <DelayLink to={`/leningrad`} className={`block`}>
                            <Button className={`uppercase`}>Битва за&nbsp;ленинград</Button>
                        </DelayLink>}
                    </li>
                    <li>
                        {path === '/exhibits' ? <Button className={`uppercase`} color={`bronze`}>Экспонаты</Button> : <DelayLink to={`/exhibits`} className={`block`}>
                            <Button className={`uppercase`}>Экспонаты</Button>
                        </DelayLink>}
                        {location.pathname.indexOf('/exhibits') > -1 ? <div className={`w-full overflow-hidden ${sidebarclasses}`}>
                            <ul className={`w-full space-y-[10px] my-[10px]`}>
                                {path === '/exhibits/album' ? <SubButton className={`uppercase`} color={`bronze`}>Семейный альбом</SubButton> : <DelayLink to={`/exhibits/album`} className={`block`}>
                                    <SubButton className={`uppercase`}>Семейный альбом</SubButton>
                                </DelayLink>}
                                {path === '/exhibits/favorites' ? <SubButton className={`uppercase`} color={`bronze`}>Личное</SubButton> : <DelayLink to={`/exhibits/favorites`} className={`block`}>
                                    <SubButton className={`uppercase`}>Личное</SubButton>
                                </DelayLink>}
                                {path === '/exhibits/books' ? <SubButton className={`uppercase`} color={`bronze`}>Документы</SubButton> : <DelayLink to={`/exhibits/books`} className={`block`}>
                                    <SubButton className={`uppercase`}>Документы</SubButton>
                                </DelayLink>}
                                {path === '/exhibits/video' ? <SubButton className={`uppercase`} color={`bronze`}>Видеоархив</SubButton> : <DelayLink to={`/exhibits/video`} className={`block`}>
                                    <SubButton className={`uppercase`}>Видеоархив</SubButton>
                                </DelayLink>}
                            </ul>
                        </div> : ``}
                    </li>
                    <li>
                        {path === '/gallery' ? <Button className={`uppercase`} color={`bronze`}>Галерея</Button> : <DelayLink to={`/gallery`} className={`block`}>
                            <Button className={`uppercase`}>Галерея</Button>
                        </DelayLink>}
                        {location.pathname.indexOf('/gallery') > -1 ? <div className={`w-full overflow-hidden ${sidebarclasses}`}>
                            <ul className={`w-full space-y-[10px] my-[10px]`}>
                                {path === '/gallery/monuments' ? <SubButton className={`uppercase`} color={`bronze`}>Памятники</SubButton> : <DelayLink to={`/gallery/monuments`} className={`block`}>
                                    <SubButton className={`uppercase`}>Памятники</SubButton>
                                </DelayLink>}
                                {path === '/gallery/pictures' ? <SubButton className={`uppercase`} color={`bronze`}>Картины</SubButton> : <DelayLink to={`/gallery/pictures`} className={`block`}>
                                    <SubButton className={`uppercase`}>Картины</SubButton>
                                </DelayLink>}
                                {path === '/gallery/books' ? <SubButton className={`uppercase`} color={`bronze`}>Книги</SubButton> : <DelayLink to={`/gallery/books`} className={`block`}>
                                    <SubButton className={`uppercase`}>Книги</SubButton>
                                </DelayLink>}
                                {path === '/gallery/movies' ? <SubButton className={`uppercase`} color={`bronze`}>Фильмы</SubButton> : <DelayLink to={`/gallery/movies`} className={`block`}>
                                    <SubButton className={`uppercase`}>Фильмы</SubButton>
                                </DelayLink>}
                            </ul>
                        </div> : ``}
                    </li>
                    <li>
                        {path === '/test' ? <Button className={`uppercase`} color={`bronze`}>Проверь себя!</Button> : <DelayLink to={`/test`} className={`block`}>
                            <Button className={`uppercase`}>Проверь себя!</Button>
                        </DelayLink>}
                    </li>
                </ul>
                {/* <div>
                    {path === '/' ? <Button color={`outline`} size={`md`}>Назад в медиатеку</Button> : <DelayLink to={`/`} className={`block`}>
                        <Button color={`outline`} size={`md`}>Назад в медиатеку</Button>
                    </DelayLink>}
                </div> */}
            </div>
        </div>
    </>;
}
