export default function Product({product,handleData}){
    const{photo,name,description,price}=product
    return (
        <div className=" bg-slate-600 text-white p-2">
            <img src={photo} alt="" />
            <h1>{name} </h1>
            <h1 className="my-2">{description} </h1>
            <button onClick={()=>handleData(product)} className="text-black bg-green-300 px-4 py-2 rounded-full my-2 "> add card</button>
        </div>
    );
}