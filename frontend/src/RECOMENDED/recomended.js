
import Button from "../COMPONENT/button";
import "./recomended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <br></br>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} className="b" value="" title="All Products" />
          <Button onClickHandler={handleClick} className="b" value="Nike" title="Dog" />
          <Button onClickHandler={handleClick} className="b" value="Adidas" title="Cat" />
          <Button onClickHandler={handleClick} className="b" value="Puma" title="Fish" />
          <Button onClickHandler={handleClick} className="b" value="Vans" title="Birds" />
        </div>
      </div>
    </>
  );
};

export default Recommended;