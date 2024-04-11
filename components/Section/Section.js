import React from 'react';
import "./Section.scss";

export default function Section(props) {
    let xl;
    if(props.xl){
        xl = "xl";
    }else{
        xl = "";
    }
    return (
        <div className={props.className ? `section flex items-center ${props.className} ${xl}` : `section flex items-center ${xl}`}>
            {props.children}
        </div>
    )
}
