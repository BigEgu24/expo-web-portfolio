import React from 'react';
import "./Modal.scss";
import Icon from '@mdi/react';
import { 
    mdiGithub,
    mdiWeb,
    mdiMagnify
} from '@mdi/js';
import { useAppContext } from '../Context/app-context';
const Link = require("react-router-dom").Link;

export default function ProjectModal() {
    const {values, functions} = useAppContext();
    const {setModal} = functions;
    const {modal, project} = values;
    return (
        <div className={modal==="project" ? "modal active project-modal relative" : "modal project-modal relative"}>
        <div className="background full-width full-height absolute" onClick={() => setModal({ type: '' })}></div>
        <div className="modal-content margin-auto">
            <div className="modal-header">
                <span className="close" onClick={() => setModal({ type: '' })}>&times;</span>
            </div>
            <div className="modal-body flex">
                <div className="image" style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/images/${project.img}")` }}></div>
                <div className="content relative">
                    <h1 className="type">
                        {project.type}
                    </h1>
                    <h1 className="title">
                        {project.title}
                    </h1>
                    <p className="description">
                        {project.description}
                    </p>
                    <ul className="slugs flex">
                        {
                        project.slugs.map((slug, index) => {
                            return(
                                <li key={index} className="flex items-center">
                                    {slug}
                                </li>
                            )
                        }) 
                        }
                    </ul>
                    <ul className="links flex absolute">
                        <li>
                            <Link to={{ pathname: project.github }} target="__blank" title="View the Code" className="flex items-center">
                                <Icon 
                                path={mdiGithub}
                                size={0.9}
                                color="#000"/>
                                <p>View the Code</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: project.siteURL }} target="__blank" title="Go to the Website" className="flex items-center">
                                <Icon 
                                path={mdiWeb}
                                size={0.9}
                                color="#000"/>
                                <p>Lauch Site</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}
