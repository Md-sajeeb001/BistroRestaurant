import featured from "../assets/assets/home/featured.jpg";
import Header from "../Shared/Header";

const Featured = () => {
  return (
    <div
      className="bg-fixed py-14 my-12 "
      style={{
        backgroundImage: `url(${featured})`,
        width: "100%",
        height: "600px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }}
    >
      <div className="text-white">
        <Header
          heading={"---Check it out---"}
          subHeading={"FROM OUR MENU"}
        ></Header>
      </div>
      <div className="flex items-center justify-center gap-14 pt-10 px-40 ">
        <div className="w-1/2">
          <img className="w-full h-full" src={featured} alt="" />
        </div>
        <div className="w-1/2">
          <div className="w-full text-white">
            <p>
              March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error voluptate facere, deserunt
              dolores maiores quod nobis quas quasi. Eaque repellat recusandae
              ad laudantium tempore consequatur consequuntur omnis ullam maxime
              tenetur.
            </p>
            <button className="btn btn-outline text-white border-0 border-b-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
