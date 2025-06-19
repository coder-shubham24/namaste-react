import { CDN_URL } from "../utils.js/constants";

const ResCard = (props) => {
    const {resData} = props
    console.log(resData?.info)

    const {name, cloudinaryImageId, cuisines, avgRating, avgRatingString } = resData?.info
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div>
        <h3 className="res-name">{name}</h3>
        <p className="rating">
            {
                avgRating ? <span className="star">★ {avgRating}</span> : <span className="star">★ {avgRatingString}</span>
            }
          
        </p>
        <p className="description">{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default ResCard;