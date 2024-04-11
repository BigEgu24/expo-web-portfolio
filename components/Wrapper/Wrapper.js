import React from 'react';
import "./Wrapper.scss";

export default function Wrapper(props) {
    return (
        <div style={props.style} className={props.flex ? `wrapper-md margin-auto flex ${props.flexEnd ? "flex-end" : ""} ${props.spaceBetween ? "space-between" : ""} ${props.contentCenter ? "content-center" : ""} ${props.column ? "column" : ""} ${props.itemsCenter ? "items-center" : ""}` : "wrapper-md margin-auto"}>
            {props.children}
        </div>
    )
}
