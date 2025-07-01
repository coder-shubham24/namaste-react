import ResCard from "./ResCard";
// import resList from "../utils.js/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restraunantList, setRestraunantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let json = await data.json();
    console.log("json:", json);

    setRestraunantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restraunantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <div className="search">
          <input
            className="search-input"
            type="search"
            placeholder="search here"
          ></input>
          <button
            className="filter-button"
            onClick={() => {
              const filteredRes = restraunantList.filter(
                (res) => res.info.avgRating > 4.5
              );
              setRestraunantList(filteredRes);
            }}
          >
            Top Restaurant
          </button>
        </div>

        <div className="res-container">
          {restraunantList?.map((restraunant) => (
            <ResCard key={restraunant.info.id} resData={restraunant} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
