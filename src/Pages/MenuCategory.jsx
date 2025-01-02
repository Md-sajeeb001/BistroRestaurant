import { Link } from "react-router-dom";
import MenuCard from "../Components/MenuCard";
import Cover from "../Shared/Cover";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      <div>
        {title && (
          <div className="">
            <Cover
              img={coverImg}
              title={title}
              des={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            ></Cover>
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-5 py-16 pb-12">
        {items?.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mb-12">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
