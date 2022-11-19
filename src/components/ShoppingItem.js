import { Link } from 'react-router-dom';
import React from "react";



function ShoppingList(props) {
    const link = "/itemPage/" + props.id;
    return (
        <div>
            <div className="container" >
                <img src={props.url}
                    alt={props.title} className="item-img" />
                <div className="item-info" >
                    <h1 className="item-title" > {props.title} </h1>
                    <p className="item-price" >Price: ${props.price} </p>
                    <p className="item-quantity" >Quantity: {props.quantity}</p>
                    <Link to={link} className="item-link" > <button className='button'>View Item</button> </Link>

                </div>
            </div>
        </div>
    )
}

export default ShoppingList;