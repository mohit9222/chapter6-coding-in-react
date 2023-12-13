import React from "react";
import { CDN_URL } from "../utils/constants"; // Named exports

const ResturantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwoString, deliveryTime, cloudinaryImageId } = resData?.data;
    return(
        <div className='resto-card'>
                <img className='rest-logo' alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(" , ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwoString}</h5>
            <h5>{deliveryTime} mins</h5>
        </div>
    )
}

export default ResturantCard; // default exports