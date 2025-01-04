import { useQuery } from "@tanstack/react-query";
import UseAxiosInstance from "../../Hooks/UseAxiosInstance";
import { FaTrash } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosInstance = UseAxiosInstance();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosInstance.get("/users");
      console.log(res.data);
      return res.data;
    },
  });

  //   make admin handelar
  const handelMakeAdmin = (user) => {
    axiosInstance.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is admim now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      console.log(res.data);
    });
  };

  //   delete handelar
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
        axiosInstance.delete(`/users/${id}`).then((res) => {
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
    <div>
      <h2 className="text-4xl font-bold">Total Users: {users?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover">
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handelMakeAdmin(user)}
                      className="btn bg-orange-500 text-lg btn-md"
                    >
                      <FaUsers className="text-white"></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handelDelete(user._id)}
                    className="btn bg-red-500 text-lg btn-md"
                  >
                    <FaTrash className="text-white"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
