import Header from "../Shared/Header";
import MenuCard from "./MenuCard";
import UseMenu from "../Hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const popularMenu = menu?.filter((item) => item?.category === "popular");
  return (
    <div className="py-10">
      <div className="pb-10">
        <Header
          heading={"---Check it out---"}
          subHeading={"FROM OUR MENU"}
        ></Header>
      </div>
      <div className="grid md:grid-cols-2 gap-5 pt-4 pb-12">
        {popularMenu?.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      <div className="text-center">
        <button className="btn-outline uppercase btn  border-b-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
