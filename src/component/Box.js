import React from 'react';
import { Link } from 'react-router-dom';

function Box(props) {
  return (
    <>
      <li className='box__item' onClick={props.onClick}>
        <Link className='box__item__link' to={props.path}>
          <figure className='box__item__pic-wrap' data-category={props.label}>
            <img
              className='box__item__img'
              alt='Travel Image'
              src={props.src}
              onClick={props.onClick}
            />
          </figure>
          <div className='box__item__info'>
            <h5 className='box__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Box;
