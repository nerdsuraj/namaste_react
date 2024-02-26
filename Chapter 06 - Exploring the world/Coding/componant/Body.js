import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [originalRestaurantList, setOriginalRestaurantList] = useState([]);
    const [showTopRated, setShowTopRated] = useState(false);

    useEffect(() => {
        fetchApiData();
    }, [])

    const fetchApiData = async () => {
        let apiListres = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
        })

        let json = await apiListres.json();
        let dataManipulate = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        let finalData = dataManipulate.map((info) => {
            return info.info;
        })
        console.log("🚀 ~ fetchApiData ~ finalData:", finalData)
        setRestaurantList(finalData);
        setOriginalRestaurantList(finalData);
    }

    const handleTopRatedClick = () => {
        console.log("Top Rated Clicked", showTopRated);
        if (!showTopRated) {
            let filterData = restaurantList.filter((restaurant) => {
                return restaurant.avgRating > 4;
            });
            setRestaurantList(filterData);
        } else {
            setRestaurantList(originalRestaurantList);
        }
        setShowTopRated(!showTopRated);
    };
    const searchList = () => {
        let searchInput = document.querySelector(".search-input").value;
        let filterData = originalRestaurantList.filter((restaurant) => {
            return restaurant.name.toLowerCase().includes(searchInput.toLowerCase());
        });
        setRestaurantList(filterData);
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want...">
                </input>
                <button className="search-btn" onClick={searchList}>
                    Search
                </button>
            </div>

            <div className="sort-button-container">
                <button className="sort-button" onClick={handleTopRatedClick}>
                    {showTopRated ? "Back to All List" : "Top Rated Restaurants"}
                </button>
            </div>

            <div className="restaurant-list">


                {restaurantList.length === 0 && (<div className="loader"></div>)}

                {restaurantList.length > 0 && (
                    <div className="restaurant-list">
                        {restaurantList.map((restaurant, index) => {
                            return <RestaurantCard key={index} {...restaurant} />;
                        })}
                    </div>
                )}
            </div>
        </>
    );
};


export default Body;