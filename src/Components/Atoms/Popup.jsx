import React from "react";
import parse from "html-react-parser"
import { CloseSwiper } from "../../Icons";

function Popup(props) {
    const { item, close } = props
    return <div className={`bg-grey-900 text-white bg-opacity-90 flex-full  z-200`}>
        <CloseSwiper className={`cursor-pointer fixed right-8 top-8 w-14 h-14 text-bronze-600 fill-current stroke-current`} onClick={() => close()} />
        <div className={`flex`}>
            <div className={``}>
                <img src={item.photo} className={``} alt="" style={{ height: `66.66vh` }} />
            </div>
            <div className={`w-84`} style={{ height: `66.66vh` }} >
                <div className={`bg-white px-2 pt-2 pb-3 h-full text-black`}>
                    <div className={`border-2 p-2 h-full`}>
                        {item.title ? <div className={`uppercase mb-4  font-md font-bold text-center border-b-1 text-xl`}>{item.title}</div> : <></>}
                        <div className={` font-md w-full text-lgs`}>{parse(item.description ?? '')}</div>
                        {item.sign ? <>
                            <hr className={`border-bronze-600 my-3`} />
                            <div className={`text-bronze-600  font-sm w-full`}>{item.sign}</div>
                        </> : ``}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Popup