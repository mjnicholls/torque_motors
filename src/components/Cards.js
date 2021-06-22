import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these epic sports cars</h1>
            <div className="cards__container"></div>
            <div className="cards__wrapper"></div>
            <div className="cards__item"></div>
            <CardItem src="images/car-2.jpg" text="See the world in a blur along the world's fastest roads" label="Adventure" path='/services' />
            <CardItem src="images/car-3.jpg" text="Feel powerful and free in our exquisite sports cars" label="Luxury" path='/services' />
            <ul className='cards__items'>
            <CardItem
              src='images/car-1.jpg'
              text='Experience the torque, the power, the elegance, the speed'
              label='Speed'
              path='/services'
            />
            <CardItem
              src='images/car-4.jpg'
              text='Glide across the mountain roads with the smoothest ride imaginable'
              label='Power'
              path='/products'
            />
            <CardItem
              src='images/car-5.jpg'
              text='Cruise open-topped across the highways of America'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
    )
}

export default Cards
