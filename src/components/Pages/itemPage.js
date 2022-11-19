import React from "react";
import "../css/itemPage.css";
import { Data } from "../Data";
import { useParams } from 'react-router-dom';


function itemPage() {
    // Get the id from the url:
    const { id } = useParams();
    // Result:
    return (
        <div className="itemPage">
            <div className="container">
                <img src={Data[id].url
                } alt={Data[id].title} className="item-img" />
                <div className="">
                    <h1 className="">{Data[id].title}</h1>
                    <h3><p className="">Description: {Data[id].description}</p></h3>
                </div>
            </div>
        </div>
    )

}

export default itemPage;