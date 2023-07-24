import { BsFillBagFill } from "react-icons/bs";
import './card.css';
import { toast } from "react-hot-toast";
import { useContext , useState} from "react";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const [arr,setArr] = useState([]);
  const handleButtonClick = (e) =>{
    console.log(arr);
    e.preventDefault();
    fetch("http://localhost:4000/items", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",

            },
            body: JSON.stringify({
                title,
                img

            }),

        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "item sent");
                if(data.status == "ok"){
                 toast.success("Added successfully") 
                }
                else{
                  toast.error("Product already added to cart")
                }
            }
            )
  }
  
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
             <button className="bag_button" onClick={handleButtonClick}><BsFillBagFill className="bag-icon" /></button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;