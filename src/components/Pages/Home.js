import React from "react";
import "../css/Home.css";
import { Data } from "../Data";

// ShoppingItem Component:
import ShoppingItem from "../ShoppingItem";

const items = Data.map((item) => {
    return (
        <ShoppingItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            url={item.url}
        />
    )
})


function Home() {
    // Result:
    return (
        <div className="heading">Shopping List:
            {items}
        </div >
    );
}

export default Home;