import ResCard from "./ResCard";
import resList from "../utils.js/mockData";

const Body = () => {
  return (
    <div>
      <div>
        <div className="search">
          <input
            className="search-input"
            type="search"
            placeholder="search here"
          ></input>
        </div>

        <div className="res-container">
          {resList.map(restraunant =>  <ResCard key = {restraunant.info.id} resData = {restraunant}/>)}
        </div>
      </div>
    </div>
  );
};
export default Body;