const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item || {};

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
          <button className="btn btn-outline text-yellow-600 border-b-4">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
