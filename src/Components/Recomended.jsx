import { useEffect, useState } from "react";
import Header from "../Shared/Header";
import axios from "axios";
import RecomendedCard from "./RecomendedCard";

const Recomended = () => {
  const [recomended, setrecomended] = useState([]);

  useEffect(() => {
    const fetchAllrecomended = async () => {
      const { data } = await axios.get(`http://localhost:9000/FromMenu`);
      setrecomended(data);
    };
    fetchAllrecomended();
  }, []);

  return (
    <div>
      <div className="pb-10">
        <Header
          heading={"---Should Try---"}
          subHeading={"CHEF RECOMMENDS"}
        ></Header>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        {recomended.map((card) => (
          <RecomendedCard key={card._id} card={card}></RecomendedCard>
        ))}
      </div>
    </div>
  );
};

export default Recomended;
