import { FaTrash } from "react-icons/fa6";
import UseCart from "../../../Hooks/UseCart";
import UseAxiosInstance from "../../../Hooks/UseAxiosInstance";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosInstance = UseAxiosInstance();

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/foodcarts/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex items-center justify-between py-4">
        <h2>Item: {cart?.length}</h2>
        <h2>Total Price: {totalPrice}</h2>
        <button className="btn btn-info">Pay</button>
      </div>
      {/* dashboard table */}
      <div className="overflow-x-auto border">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>SERIAL</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE </th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, inx) => (
              <tr key={item._id}>
                <th>{inx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    {/* <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div> */}
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handelDelete(item._id)}
                    className="btn btn-ghost text-lg  btn-md"
                  >
                    <FaTrash className="text-red-500"></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
