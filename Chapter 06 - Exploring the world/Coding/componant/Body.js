import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";


const Body = () => {
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want...">
                </input>
                <button className="search-btn" onClick={()=>{console.log('btn clicks')}}>
                    Search
                </button>
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