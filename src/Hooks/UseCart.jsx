import { useQuery } from "@tanstack/react-query";
import UseAxiosInstance from "./UseAxiosInstance";
import UseAuth from "./UseAuth";

const UseCart = () => {
  const axiosInstance = UseAxiosInstance();
  const { user } = UseAuth();
  const { data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/foodcarts?email=${user.email}`);
      console.log(res)
      return res.data;
    },
  });
  return [cart];
};

export default UseCart;
