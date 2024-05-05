import React from 'react';
import { Link } from 'react-router-dom';

// props will be coming from Cards.js
function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link to={props.path} className='cards__item__link'>
          <figure data-category={props.label} className='cards__item__pic-wrap'>
            <img src={`images/${props.src}`} alt="Travel destination" className='cards__item__img'></img>
          </figure>
          <div className='cards__item__info'>
            <div className='justify-content-between d-flex'>
              <h6 className='cards-item-place fw-bold'>{props.place}</h6>
              <h6 className='cards__item__text'>₹ {props.price}</h6>
            </div>
            <div>
              <h6 className='cards__item__text'>Get on <span className='fw-semibold'>{props.getOnDate}</span></h6>
            </div>

          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem;
