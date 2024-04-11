import React from 'react';
import "./Button.scss";

export default function Button({
    children,
    onClick,
    type
}) {
    return (
        <button className={type ? `btn ${type} flex pointer` : 'btn flex pointer'} onClick={onClick}>
            {children}
        </button>
    )
}
