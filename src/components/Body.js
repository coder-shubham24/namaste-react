import ResCard from "./ResCard";
import resList from "../utils.js/mockData";
import { useState } from "react";

const Body = () => {
  const [restraunantList, setRestraunantList] = useState(resList);
  return (
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
                (res) => res.info.avgRating > 4
              );
              setRestraunantList(filteredRes);
            }}
          >
            Top Restaurant
          </button>
        </div>

        <div className="res-container">
          {restraunantList.map((restraunant) => (
            <ResCard key={restraunant.info.id} resData={restraunant} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
