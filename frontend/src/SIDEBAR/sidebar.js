
import Category from "./CATEGORY/category";

import Price from "./PRICE/price";
import "./sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        
        
      </section>
    </>
  );
};

export default Sidebar;