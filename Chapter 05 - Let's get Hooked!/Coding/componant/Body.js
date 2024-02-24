import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {
    const [restaurantList, setRestaurantList] = useState(resList);
    const [showTopRated, setShowTopRated] = useState(false);


    const handleTopRatedClick = () => {
        console.log("Top Rated Clicked", showTopRated);
        if (!showTopRated) {
            let filterData = restaurantList.filter((restaurant) => {
                return restaurant.data.avgRating > 4;
            });
            setRestaurantList(filterData);
        } else {
            setRestaurantList(resList);
        }
        setShowTopRated(!showTopRated);
    };
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want...">
                </input>
                <button className="search-btn" onClick={() => { console.log('btn clicks') }}>
                    Search
                </button>
            </div>

            <div>
                <button onClick={handleTopRatedClick}>{showTopRated ? "Back to All List" : "Top Rated Restaurant"}</button>
            </div>

            <div className="restaurant-list">
                {restaurantList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
                })}
            </div>
        </>
    );
};


export default Body;