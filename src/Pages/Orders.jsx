import { useEffect, useMemo, useState } from "react";
import Cover from "../Shared/Cover";
import orderImg from "../assets/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../Hooks/UseMenu";
import OrderTab from "../Components/OrderTab";
import { useParams } from "react-router-dom";

const Orders = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const [menu] = UseMenu();
  const [tabIndex, setTabIndex] = useState(0);

  const drinks = menu?.filter((item) => item?.category === "drinks");
  const desserts = menu?.filter((item) => item?.category === "dessert");
  const pizza = menu?.filter((item) => item?.category === "pizza");
  const soup = menu?.filter((item) => item?.category === "soup");
  const salad = menu?.filter((item) => item?.category === "salad");

  useEffect(() => {
    const categoryIndex = categories.indexOf(category.toLowerCase());
    setTabIndex(categoryIndex);
  }, [categories, category]);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Order</title>
      </Helmet>
      <Cover
        img={orderImg}
        title={"ORDER YOUR FOOD"}
        des={"Would you like to try a dish?"}
      ></Cover>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab item={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Orders;
