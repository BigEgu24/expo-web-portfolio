import React from 'react';
import { useAppContext } from '../Context/app-context';
import ProjectModal from './ProjectModal';

export default function ModalController() {
    const {values} = useAppContext();
    const {modal} = values;
    modal.type==="" ? window.document.body.style.overflowY = "scroll" : window.document.body.style.overflowY = "hidden"
    

    return (
        <>
            {
                modal==="project" ? <ProjectModal /> : ""
            }
        </>
    );
}
