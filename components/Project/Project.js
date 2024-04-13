import React, {useState} from 'react';
import "./Project.scss";
import Icon from '@mdi/react';
import { 
    mdiGithub,
    mdiWeb,
    mdiMagnify
} from '@mdi/js';
import { useAppContext } from '../Context/app-context';
import { PUBLIC_URL } from "@env";

export default function Project({
    img,
    type,
    title,
    description,
    slugs,
    github,
    siteURL
}) {
    const {functions, values} = useAppContext();
    const {project} = values;
    const {setModal, setProject} = functions;

    const openModal = () => {
        setProject({
            ...project,
            img: img,
            type: type,
            title: title,
            description: description,
            slugs: slugs,
            github: github,
            siteURL: siteURL
        })
        setModal('project')
    }
    
    return (
        <div className="project flex pointer relative" style={{ backgroundImage: `url("${PUBLIC_URL==="/" ? "" : PUBLIC_URL}/images/${img}")`  }} onClick={() => openModal()}>
            {/* Site as background with search icon in center */}
            <Icon 
            path={mdiMagnify}
            size={1.7}
            color="#fff"
            className="icon absolute"/>
            <div className="overlay absolute"></div>
        </div>
    )
}
