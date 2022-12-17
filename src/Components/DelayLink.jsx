import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCanvas } from "../Contexts/canvas";

// Functional link component which delays page navigation
export default (props) => {

    const { to, ...rest } = props;
    const { setDirection, outClasses, inClasses, offClasses, setClasses } = useCanvas()

    let timeout = null;
    let timeout2 = null;

    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {

        clearTimeout(timeout2)

        // timeout2 = setTimeout(() => {
        //     setDirection(5)
        // }, 300)

        return () => {
            clearTimeout(timeout);
        }
    }, [timeout]);

    useEffect(() => {
        return () => {
            clearTimeout(timeout2);
        }
    }, []);

    const handleClick = e => {
        // if trying to navigate to current page stop everything
        if (location?.pathname === to) return;
        if (e.defaultPrevented) return;
        e.preventDefault();

        document.dispatchEvent(new CustomEvent('inertia-before', {
            detail: {
                visit: {
                    url: to
                }
            }
        }))
    };

    return <Link {...rest} to={to} onClick={handleClick} />;
};