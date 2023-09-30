import { useEffect, useState } from "react";
import AllData from "../DATA/data";
import ActualCart from "./ActualCart";
import "./AddToCart.css";

const AddToCart = (item) => {
    let [data, setData] = useState();
    let [update,setUpdate] = useState(true);
    let [tot,setTot] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:4000/getCart/${localStorage.getItem("email")}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                let tempData = AllData.filter((ele) => {
                    ele.qty = 1;
                    return data.data.includes(ele.id);
                })
                setData(tempData);
            });
    }, []);

    useEffect(()=>{
        let t = 0;
        data &&  data.map((ele) => {
            t += ele.newPrice*ele.qty;
        })
        setTot(t);
    },[update,data])

    console.log(data);

    return (
        <div className="atc">
            <h1>Hello there</h1>
            <div className="cards">
                {
                    data && data.map((item,ind) => {
                        return (
                            <div className="cart-container">
                            <img src={item.img}></img>
                            <div>
                                <h1>{item.title}</h1>
                                <h1>₹{item.newPrice}</h1>
                            </div>
                            <h1>QTY : {item.qty}</h1>
                            <button onClick={()=>{
                                let temp = data;
                                temp[ind].qty = temp[ind].qty-1;
                                console.log(temp);
                                setData(temp); 
                                setUpdate(pre => !pre);
                            }}>-</button>
                            <button onClick={()=>{
                                let temp = data;
                                temp[ind].qty = temp[ind].qty+1;
                                console.log(temp);
                                setData(temp); 
                                setUpdate(pre => !pre);
                            }}>+</button>
                            <h1>₹{item.newPrice * item.qty}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className="foot">
            <h1>Total : ₹{tot}</h1>
            <button>BUY</button>
            </div>
        </div>
    );
};

export default AddToCart;
