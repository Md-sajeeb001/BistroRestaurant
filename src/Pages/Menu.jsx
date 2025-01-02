import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImg from "../assets/assets/menu/banner3.jpg";
import menuImgDes from "../assets/assets/menu/dessert-bg.jpeg";
import menuImgPiz from "../assets/assets/menu//pizza-bg.jpg";
import menuImgSal from "../assets/assets/menu/salad-bg.jpg";
import menuImgSop from "../assets/assets/menu/soup-bg.jpg";
import Header from "../Shared/Header";
import UseMenu from "../Hooks/UseMenu";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();
  const offered = menu?.filter((item) => item?.category === "offered");
  const desserts = menu?.filter((item) => item?.category === "dessert");
  const pizza = menu?.filter((item) => item?.category === "pizza");
  const soup = menu?.filter((item) => item?.category === "soup");
  const salad = menu?.filter((item) => item?.category === "salad");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <div>
        <Cover
          img={menuImg}
          title={"OUR MENU"}
          des={"Would you like to try a dish?"}
        ></Cover>
      </div>
      <div className="py-12">
        <Header
          heading={`---Don't miss---`}
          subHeading={`TODAY'S OFFER`}
        ></Header>
      </div>
      {/* offered menu */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu */}
      <MenuCategory
        items={desserts}
        title={"DESSERTS"}
        coverImg={menuImgDes}
      ></MenuCategory>
      {/* pizza menu */}
      <MenuCategory
        items={pizza}
        title={"Pizza"}
        coverImg={menuImgPiz}
      ></MenuCategory>
      {/* soup menu */}
      <MenuCategory
        items={soup}
        title={"Soup"}
        coverImg={menuImgSop}
      ></MenuCategory>
      {/* salad menu */}
      <MenuCategory
        items={salad}
        title={"Salad"}
        coverImg={menuImgSal}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
