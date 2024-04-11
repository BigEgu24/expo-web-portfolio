import React, {useState} from 'react';
import "./Header.scss";
import Wrapper from '../Wrapper/Wrapper';
import Icon from '@mdi/react';
import { 
    mdiMenu,
    mdiClose
} from '@mdi/js';
import { PUBLIC_URL } from "@env";
const Link = require("react-router-dom").Link;

export default function Header() {
    const [nav, toggleNav] = useState(false);
    return (
        <header className="flex">
            <Wrapper 
                flex={true}
                spaceBetween={true}
                itemsCenter
            >
                <div className="logo">
                    <Link to={"/"}>
                        <img src={`/images/logo.png`} alt="" className="img" height="45" width="47"/>
                    </Link>
                </div>
                <ul className={nav ? "nav flex relative active" : "nav flex relative"}>
                    <div className="mobile-header flex">
                        <Wrapper 
                            flex={true}
                            flexEnd={true}
                            itemsCenter
                        >
                            <Icon 
                            path={mdiClose}
                            size={1.1}
                            color="#fff"
                            className="mobile-header-icon pointer"
                            onClick={() => toggleNav(!nav)}/>
                        </Wrapper>
                    </div>
                    <li>
                        <Link to={"/#about-me"}>About</Link>
                    </li>
                    <li>
                        <Link target="__blank" to={`/resume.pdf`}>Resume</Link>
                    </li>
                    <li>
                        <Link to={"/#projects"}>Projects</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul>
                <div className="mobile-menu-bars pointer" onClick={() => toggleNav(!nav)}>
                    <Icon 
                    path={mdiMenu}
                    size={1.1}
                    color="var(--primary-dark)"/>
                </div>
            </Wrapper>
        </header>
    )
}
