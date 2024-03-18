import { list } from "postcss";
import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoTimeOutline } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
console.log(PropTypes);
//  option 1

export default function Product({
  product,
  onHandleData,
  cardCount,
}) {
  // console.log(onHandleData);
  const {recipe_name,recipe_image,
    short_description,ingredients,preparing_time ,calories} = product;
  // console.log("hi");
  const cardAddedNotification = () => {
    toast("your card has been added 😄"); 
  };

  const [clicked, setClicked] = useState(false);

  const [color, setColor] = useState(false);

  const handleColor = () => {
    if (!color) {
      setColor(true);
    }
  };

  const handleData = () => {
    onHandleData(product);
    if (!clicked) {
      cardCount();
      handleColor();
      cardAddedNotification();
      setClicked(true);
    }
  };
  return (
    <div>
      <div className=" w-full   font-sans border-2 border-gray-500 border-opacity-55  card h-full   shadow-md shadow-slate-500 hover:border-2 hover:border-sky-300">
        <figure className="w-full h-full ">
          <img  className="w-full h-full" src={recipe_image} alt="Shoes" />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{recipe_name} </h2>
          <p className="border-b pb-3 border-b-gray-600">{short_description }</p>

          <div>
            <h1 className="">Ingredients: {ingredients.length} </h1>
             <span className=" border-b pb-3 border-b-gray-600">
              {
                ingredients.map((gredient,ind)=>{
                  return <li key={ind}>
                     {gredient}
                  </li>
                })
              }
             </span>
          </div>
      <div className="flex justify-between w-full items-center mt-1  border-t pt-3 border-t-gray-600">
    <span className="flex items-center gap-3">  <IoTimeOutline /> {preparing_time}</span>
          <span className="flex items-center gap-3"> <FaFireAlt />  {calories} </span>
      </div>
          <div className={`card-actions justify-start`}>
            <button
              className={`${
                clicked ? "bg-red-500" : "alert('error')"
              } btn bg-green-300 text-black lg:text-xl border-none`}
              onClick={handleData}
            >
              {color ? "want to cook" : "want to cook"}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired, // Change the prop type to object
  onHandleData: PropTypes.func.isRequired,
  cardCount: PropTypes.func.isRequired,
};
