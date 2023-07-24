import { useEffect, useState } from "react";
import data from "../DATA/data";
import ActualCart from "./ActualCart";

const AddToCart = (item) => {
    let [mongoData, setData] = useState();
    useEffect(() => {
        fetch("http://localhost:4000/getAllItems", {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData")
                setData(data.data);
            })
    }, []);
    console.log("hello there");
    console.log(mongoData);
    {
        // const [jsonData, setJsonData]  = useState(data);
        // console.log("hello bro ")
        // let [mappedData, setMappedData] = useState([]);
        // const [matchedData, setMatchedData] = useState([]);
        // console.log(mongoData)
    }

    return (
        <>
        <h1>Hello there</h1>
            {
                mongoData && mongoData.map((item) => {

                    return (
                        <>
                        <h1>{item.title}</h1>
                        <img src={item.img}></img>
                        </>
                    )
                })
            }
        </>
    )
}


export default AddToCart;