/* eslint-disable react/prop-types */
const MenuCard = ({ item }) => {
  const { name, image, recipe, price } = item || {};
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="w-[120px] h-[80px]">
        <img
          className="w-full h-full object-cover rounded-tr-full rounded-br-full rounded-bl-full"
          src={image}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-lg font-medium">{name}--------------</h3>
        <h4 className="text-sm ">{recipe}</h4>
      </div>
      <div>
        <span className="text-yellow-400">${price}</span>
      </div>
    </div>
  );
};

export default MenuCard;
