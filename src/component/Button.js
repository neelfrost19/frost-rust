import './Button.css';
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const styles = ['btnPrimary', 'btnOutlne']
const sizes = ['btnMedium', 'btnLarge']


export const Button = ({
    children,
    type,
    onClick,
    style,
    size,
    to
    })=>{

    const checkStyle = styles.includes(style) ? style : styles[0];

    const checkSize = sizes.includes(size) ? size : sizes[0];
    return(
    <Link to={to} className='btn-mobile'>
        <button
        type={type}
        className={'btn ${checkStyle} ${checkSize}'}
        onClick={onClick}
        >
            {children}
        </button>
        </Link>
    )

};