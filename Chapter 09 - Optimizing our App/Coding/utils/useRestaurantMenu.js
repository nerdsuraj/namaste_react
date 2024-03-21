import { useContext, useEffect, useState } from "react";

//custom hooks which is created it!
const useRestaurantMenu = (resId) => {
    console.log("🚀 ~ useRestaurantMenu ~ resId", resId)
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`, {});

        const json = await data.json();
        console.log("🚀 ~ fetchData,useRestaurantMenu ~ json:", json)
        setRestInfo(json.data);
    };
    return restInfo;
};

export default useRestaurantMenu;
