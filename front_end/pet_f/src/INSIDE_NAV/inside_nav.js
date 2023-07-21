import './inside_nav.css';


const In_Nav = ({ handleInputChange, query }) => {
  
  
  return (
    <nav className='in_nav'>
     
      <div className="nav-container">
        <input
          className="search-input-inside"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search product!!!"
        />
      </div>
      
    </nav>
  );
};

export default In_Nav;