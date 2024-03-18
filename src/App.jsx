import { useEffect } from "react";
import { useState } from "react";
import Products from "./Products/Products";
export default function App(){
  const[fetchData,setFetchData]=useState([])
// console.log(fetchData)
  useEffect(()=>{
    fetch('courses.json')
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      setFetchData(data)
    })
  })
    return (
        <div>
    <Products products={fetchData} />
        </div>
    );
}

