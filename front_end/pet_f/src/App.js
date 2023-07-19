import { useState } from "react";

import products from "./DATA/data";

import Card from "./COMPONENT/card";
import "./index.css";
import Sidebar from "./SIDEBAR/sidebar";

import Recommended from "./RECOMENDED/recomended";
import Products from "./PRODUCT/product";
import Nav from "./NAVBAR/navbar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Input Filter 
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
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

  function filteredData(products, selected, query) {
    let filteredProducts = products;

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

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
    <Sidebar handleChange={handleChange}/>
    <Nav query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleChange}/>
    <Products result={result}/>
      
    </>
  );
}

export default App;

// import { BrowserRouter, Route,  Routes } from 'react-router-dom';
// import './App.css';
// import Nav from './NAVBAR/navbar';
// import Login from './LOGIN/login';
// import Register from './REGISTER/register';
// import Home from './HOME/home';









// function App() {
  

 

//   return (
//     <>
      
//       <BrowserRouter>
//       <Nav/>
//       <Routes>
//          <Route path='/log_sign' element={<Login/>}/>
//          <Route path='/Reg' element={<Register/>}/>
//          <Route path='/home' element={<Home/>}/>
         
        
// </Routes>
      
  
      
      
      
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

