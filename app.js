import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Food ordering app
 * Header
 *  - logo
 *  - Navitem
 *  - Cart
 * Body
 *  - Search bar
 *  -  Restrurant container
 *  - Restrurant card
 *  - rating
 * Footer
 *  - Copyright
 *  - Links
 *  - Contact
 
 */
// const Title = () => (
//   <div>
//     <h1>This is the title</h1>
//     <button onClick={() => alert("button clicked")}>Click here</button>
//   </div>
// );

// // React components

// // functional comp
// const MyComp = () => (
//   <div>
//     <Title/>
//     <Title></Title>
//     {Title()}
//     <h1>Thsi is our 2nd component</h1>
//   </div>
// );

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://i.pinimg.com/736x/32/8a/f8/328af81f0de5165d52b721bebabb4cab.jpg"
        ></img>
      </div>
      <div className="naveItems">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg"
      ></img>
      <div>
        <h3>Meghana Foods</h3>
        <p className="rating">
          <span className="star">★</span> 4.4 • 40-45 mins
        </p>
        <p className="description">Bakery, Ice Cream, Snacks,...</p>
        <p className="location">Parasia Road</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div>
        <div className="search">
          <input className="search-input"
            type="search"
            placeholder="search here"
          ></input>
        </div>

        <div className="res-container">
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
        </div>
      </div>
      <div></div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
