import { useState } from "react";
import Product from "../Product/Product";

export default function Products({ products }) {
  console.log(products);
  const [storeData,setStoreData]=useState([])
const [deletedItem,setDeletedItem]=useState([])
// console.log(deletedItem);
  // show error message
   const handleData=(data)=>{
    const exist=storeData.find((presentId)=>presentId.id== data.id)
    if(!exist){
     const store=[...storeData,data]
     setStoreData(store)
 }  
 else{
    alert("already added")
 }
}
// delete data
// const removeData=(id)=>{
//    let addData= storeData.filter((data)=>data.id!=id)
//    setStoreData(addData)
//   setDeletedItem((pre)=>[...pre,addData]) 
     
// }

  return (
    <div>
      <main className="container mx-auto lg:px-20 px-6">
        <div className="">
          <div className="flex justify-between">
            <h1>product list</h1>
            <h1>bookmark </h1>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-12 ">
          <div className="lg:col-span-7 col-span-12 ">
            <section className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              {products.map((product, index) => (
                <Product handleData={handleData} product={product} key={index} />
              ))}
            </section>
          </div>
          <div className="lg:col-span-5 col-span-12 h-full bg-slate-700">
                    {/* <section>
                        {
                            storeData.map((data,ind)=>{
                           return <article key={ind}>
                          <div className="text-white p-3 mx-auto flex flex-col">
                          <img src={data.photo} alt="" />
                          <h1>{data.name} </h1>
                          <h1>{data.price} </h1>
                          <button onClick={()=>removeData(data.id)}  className="text-black bg-green-300 px-4 py-2 w-20  rounded-full my-2 ">Remove </button>
                          </div>

                           </article>
                            })
                        }
                    </section> */}
                    <section>
                        <h1 className="text-white text-center">show deleted data </h1>
                        {deletedItem.map((item,ind)=>{
                            return <div key={ind}>
                                <li className="text-white">
                                      
                                </li>
                            </div>
                        })}  
                    </section>
          </div>
        </div>
      </main>
    </div>
  );
}
