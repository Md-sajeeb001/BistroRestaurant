/* eslint-disable react/prop-types */
const RecomendedCard = ({ card }) => {
  const { recipe, category, image } = card;
  return (
    <div className="card rounded-none bg-base-100 shadow-xl">
      <figure className="w-full h-[300px] ">
        <img className="w-full h-full" src={image} alt="food" />
      </figure>
      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title">{category}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline text-yellow-600 border-b-4">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecomendedCard;
