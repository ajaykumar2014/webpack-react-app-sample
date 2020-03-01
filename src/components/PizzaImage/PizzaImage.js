
import React from 'react'
import classes from './PizzaImage.css'
import PizzaImage from '../../assest/pizza.jpg'

const pizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImage} className={classes.PizzaImage} />
    </div>
);

export default pizzaImage;