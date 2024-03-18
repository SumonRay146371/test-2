import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";
import banner from "../assets/banner.png";
import Product from "./Product/Product";

export default function Products(props) {
  const { products } = props;
  const [onLoadData, setOnLoadData] = useState([]);
  const [count, setCount] = useState(0);
  const [currentCardCount, setCurrentCardCount] = useState(0);
  const [deletedRecipes, setDeletedRecipes] = useState([]);
  const cardCount = () => {
    setCount(count + 1);
  };
  const minusCardCount = () => {
    setCount(count - 1);
  };

  const currentCard = () => {
    setCurrentCardCount(currentCardCount + 1);
  };
  const onHandleData = (data) => {
    const existingData = onLoadData.find(
      (presentId) => presentId.id == data.id
    );
    if (!existingData) {
      setOnLoadData([...onLoadData, data]);
    } else {
      toast("this recipee has already added ⚔️");
    }
  };

  const onLoadId = (ele) => {
    const removeEle = onLoadData.filter((item) => item.id != ele);
    setOnLoadData(removeEle);
    // Add the deleted recipe to deletedRecipes state
    const deletedRecipe = onLoadData.find((item) => item.id == ele);
    setDeletedRecipes((prevDeletedRecipes) => [
      ...prevDeletedRecipes,
      deletedRecipe,
    ]);
  };

  return (
    <div>
      <header>
        <div className="text-2xl mt-5 font-serif font-extrabold container mx-auto flex justify-between lg:px-24 px-8">
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex="0"
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex="0"
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="my-5 container mx-auto lg:px-24 px-4">
          {/* Background image section */}
          <div
            className=" h-[70vh] flex flex-col items-center justify-center bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="text-center flex flex-col  text-white">
              <h1 className="text-3xl font-extrabold lg:text-6xl ">
                Discover an exceptional cooking <br /> class tailored for you!
              </h1>
              <p className=" my-10">
                A specialty food is a food that is typically considered as
                unique and high-value food item made in small quantities from
                high-quality ingredients". Consumers typically pay higher prices
                for specialty foods, and may perceive them as having various
                benefits compared to non-specialty foods.....
              </p>
              <div className="flex text-center items-center justify-center gap-4">
                <button className="bg-green-400  font-bold text-black hover:bg-red-300 duration-150 rounded-full px-7 py-3">
                  Enroll Now
                </button>
                <button className="rounded-full font-bold hover:text-black hover:bg-green-400 duration-150 px-4 py-3 border">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className=" mx-auto  font-serif">
        <div className="container mx-auto lg:px-24 px-4 ">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 mt-8">
            <div className="lg:col-span-8 col-span-12">
              <div className="grid grid-cols-1 w-full mx-auto lg:grid-cols-2 gap-4">
                {products.map((data, id) => (
                  <Product
                    cardCount={cardCount}
                    onHandleData={onHandleData}
                    product={data}
                    key={id}
                  />
                ))}
              </div>
            </div>
            {/* cooking section  */}
            <div className="border-2 lg:col-span-4 col-span-12 flex flex-col items-center font-sans  ">
              <h1 className="text-center font-extrabold">
                Want to Cook: ({count}){" "}
              </h1>
              <h1 className="mb-4 text-center  border-b pb-3 border-b-gray-600  font-extrabold text-2xl"></h1>
              <table className="w-full">
                <thead className="flex items-center justify-center  ">
                  <tr className=" flex w-[90%] mx-auto mr-6 items-center justify-around   border-4" align='center'>
                    <th width=""  className="">Name</th>
                    <th width="" className="-translate-x-4">Time</th>
                    <th width="" className="-translate-x-10">Calories</th>
                  </tr>
                </thead>
                {onLoadData.map((course, ind) => {
                  const { id, recipe_name, preparing_time, calories } = course;

                  const handleBtn = () => {
                    minusCardCount();
                    currentCard();
                    onLoadId(course.id); // Change handleId to onLoadId
                    toast("Your card has been removed 👎");
                  };

                  return (
                    <tbody key={ind} className="border-4  mx-auto">
                      <tr className="flex w-72 mx-auto   gap-4 lg:gap-10 lg:translate-x- items-center justify-center ">
                        <td className=" ">{ind} </td>
                        <td width="" className="border"> {recipe_name} </td>
                        <td width=""> {preparing_time} </td>
                        <td width=""> {calories} </td>

                        <td>
                          {" "}
                          <button
                            className=" bg-green-300 px-2 py-2 rounded-full"
                            onClick={handleBtn}
                          >
                            preparing
                          </button>{" "}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
              <div className="flex flex-col  w-full items-center justify-center ">
                {/* <section className="border-4 rounded-lg "></section> */}

               
                  <h1 className="text-center font-sans  border-b pb-3 border-b-gray-600  font-extrabold">
                    Currently cooking: ({currentCardCount}){" "}
                  </h1>

                  <table width='full' className="flex justify-center flex-col">
                  <thead className="flex items-center justify-center  ">
                  <tr className=" flex  w-full -translate-x-12 gap-20 lg:gap-11  ml-20 items-center justify-center  border-4" align='center'>
                    <th width=""  className="">Name</th>
                    <th width="" className="">Time</th>
                    <th width="" className="">Calories</th>
                  </tr>
                </thead>
                </table>

                  {deletedRecipes.map((recipe, index) => (
                
             <div key={index}>

            <div className="flex  justify-start  -translate-x-4 lg:gap-4 gap-2">
            <h1>{index} </h1>
               <h1>{recipe.recipe_name} </h1>
               <h1>{recipe.preparing_time} </h1>
               <h1>{recipe.calories} </h1>
            </div>
             </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

{/* div */}