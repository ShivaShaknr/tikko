
import Category from "./CATEGORY/category";

import Price from "./PRICE/price";
import "./sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
         <h1>T I K K O</h1> 
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        
        
      </section>
    </>
  );
};

export default Sidebar;