import axios from "axios";
import { useEffect, useState } from "react";

const UseMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllMenu = async () => {
      const { data } = await axios.get(`http://localhost:9000/FromMenu`);
      setMenu(data);
      setLoading(false);
    };
    fetchAllMenu();
  }, []);
  // console.log(menu);

  return [menu, loading];
};

export default UseMenu;
