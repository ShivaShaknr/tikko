import { useContext, useState } from "react";

import data from "../DATA/data"
import Card from "../COMPONENT/card";
import "../index.css"
import Sidebar from "../SIDEBAR/sidebar"
import Recommended from "../RECOMENDED/recomended";
import Products from "../PRODUCT/product";
import In_Nav from "../INSIDE_NAV/inside_nav";

function Maincomp() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = data.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    // Radio Filter 
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Button Filter
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    function filteredData(data, selected, query) {
        let filteredProducts = data;

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems;
        }

        // Applying selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }
        // dispalying selected 
        return filteredProducts.map(
            ({ img, title, star, reviews, prevPrice, newPrice }) => (
                <Card
                    key={Math.random()}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                    
                />
            )
        );
    
    }
    function checkLogin(e) {
 
        var x = localStorage.getItem("loggedIn");
        console.log(x);
        if(x=="false"){
          window.alert("You need to login to access books");
          e.preventDefault();
        }
      }

    const result = filteredData(data, selectedCategory, query);

    return (
        <>
            <Sidebar handleChange={handleChange} />
            {/* <Nav query={query} handleInputChange={handleInputChange} /> */}
            <In_Nav query={query} handleInputChange={handleInputChange}/>
            <Recommended handleClick={handleChange} />
            <Products result={result} />
        </>
    )
}
export default Maincomp;