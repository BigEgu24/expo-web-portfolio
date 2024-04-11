import React from 'react';
import "./Footer.scss";
import Wrapper from '../Wrapper/Wrapper';
import Icon from '@mdi/react';
import { 
    mdiLinkedin, 
    mdiGithub, 
    mdiGooglePlus,
    mdiGit,
    mdiReact,
    mdiSass,
    mdiBabel,
    mdiNodejs,
    mdiDatabase
} from '@mdi/js';
const Link = require("react-router-dom").Link;

export default function Footer() {
    return (
        <footer>
            <Wrapper
                flex
                spaceBetween
                itemsCenter
            >
                <p className="copyright flex items-center">
                © Portfolio {new Date().getFullYear()}
                </p>
                <ul className="links flex items-center">
                    <li>
                        <Link to="/#about-me">About</Link>
                    </li>
                    <li>
                        <Link target="__blank" to="/resume.pdf">Resume</Link>
                    </li>
                    <li>
                        <Link to="/#projects">Projects</Link>
                    </li>
                </ul>
                <ul className="socials flex items-center">
                    <li>
                        <Link target="__blank" to={{ pathname: "http://www.github.com/bigegu24" }}>
                            <Icon 
                            path={mdiLinkedin}
                            size={0.9}
                            color="white"/>
                        </Link>
                    </li>
                    <li>
                        <Link target="__blank" to={{ pathname: "http://www.github.com/bigegu24" }}>
                            <Icon 
                            path={mdiGithub}
                            size={0.9}
                            color="white"/>
                        </Link>
                    </li>
                    <li>
                        <Link target="__blank" to={{ pathname: "http://www.github.com/bigegu24" }}>
                            <Icon 
                            path={mdiGooglePlus}
                            size={0.9}
                            color="white"/>
                        </Link>
                    </li>
                </ul>
            </Wrapper>
        </footer>
    )
}
