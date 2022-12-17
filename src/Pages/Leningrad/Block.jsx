import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Block from "../../Components/Block";

export default () => {

    const params = useParams();
    let props = window.data.leningrad.data[params.chapter][params.block];
    props.url = '/leningrad'

    const [block, setBlock] = useState(null)

    useEffect(() => {
        setBlock(null)
        setTimeout(() => {
            setBlock(<Block {...props} url={`/leningrad`} ch={params.chapter} bl={params.block} />)
        }, 100)
    }, [params.chapter, params.block])

    return block
}