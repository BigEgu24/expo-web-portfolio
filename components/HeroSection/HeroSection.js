import React from 'react';
import "./HeroSection.scss";
import { PUBLIC_URL } from "@env";

export default function HeroSection(props) {
    return (
        <>
            {
                props.homepage ? (
                    <div 
                    className={props.flex ? `hero-section homepage-banner flex ${props.className} ${props.alignItemsCenter ? "items-center" : null}` : "hero-section"}
                    style={{ ...props.style, backgroundImage: `url("${PUBLIC_URL==="/" ? "" : PUBLIC_URL}/images/code-computer.png")` }}
                    >
                        {props.children}
                    </div>
                ) : (
                    <div 
                    className={props.flex ? `hero-section flex ${props.alignItemsCenter ? "items-center" : null}` : "hero-section"}
                    style={props.style}
                    >
                        {props.children}
                    </div>
                )
            }
        </>
    )
}