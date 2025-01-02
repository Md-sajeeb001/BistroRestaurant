import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import ChefService from "../Components/ChefService";
import Featured from "../Components/Featured";
import Number from "../Components/Number";
import FromMenu from "../Components/PopularMenu";
import Recomended from "../Components/Recomended";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <FromMenu></FromMenu>
      <Number></Number>
      <Recomended></Recomended>
      <Featured></Featured>
    </div>
  );
};

export default Home;
