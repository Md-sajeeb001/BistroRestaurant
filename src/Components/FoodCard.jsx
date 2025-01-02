import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosInstance from "../Hooks/UseAxiosInstance";
import toast from "react-hot-toast";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item || {};
  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const AxiosInstance = UseAxiosInstance();

  const handelAddToCart = async () => {
    const cartItem = {
      menuId: _id,
      user: user.email,
      name,
      image,
      price,
      recipe,
    };

    if (user && user?.email) {
      const { data } = await AxiosInstance.post(`/foodcarts`, cartItem);
      if (data.insertedId) {
        toast.success(`${name} added in cart successful`);
      }
    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: "Please Login To Add To Cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card rounded-none bg-base-100 shadow-xl">
      <figure className="w-full h-[300px] ">
        <img className="w-full h-full" src={image} alt="food" />
      </figure>
      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p>${price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handelAddToCart}
            className="btn btn-outline text-yellow-600 border-b-4"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
