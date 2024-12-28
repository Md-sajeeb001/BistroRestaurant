import chefservice from "../assets/assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div className="pb-10">
      <div
        className="pt-9"
        style={{
          backgroundImage: `url(${chefservice})`,
          width: "100%",
          height: "300px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {" "}
        <div className="max-w-3xl mx-auto space-y-3 border bg-white  text-black text-center p-12">
          <h2 className="text-4xl font-light">Bistro Boss</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
