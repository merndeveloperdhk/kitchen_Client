import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Shared/Cover/Cover";
import orderImage from "../../assets/reservation/category-pizza.jpg";
import UseMenu from "../../Components/UseMenu/UseMenu";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['pizza', 'salad', 'soup', 'desert', 'drinks']
    const{category} = useParams();
    const[tabIndex, setTabIndex] = useState(0)
    const [menus] = UseMenu();
    
    console.log(category);
    // const {image,name, recipe } = card;
    const desert = menus.filter(item => item.category === 'dessert');
    const salad = menus.filter(item => item.category === 'salad');
    const soup = menus.filter(item => item.category === 'soup');
    const pizza = menus.filter(item => item.category === 'pizza');
    const drinks = menus.filter(item => item.category === 'drinks');

  return (
    <div>
      <Helmet>
        <title>Misam's Kitchen | Order</title>
      </Helmet>
      <Cover image={orderImage} coverTitle={"Order"}></Cover>
      <Tabs className="mt-8 text-center" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Pizza</Tab>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                pizza.map(card => <SingleCard
                key={card._id}
                card={card}
                ></SingleCard>)
            }
            </div> */}
            <OrderTab menuItem={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab menuItem={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
         <OrderTab menuItem={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab menuItem={desert}></OrderTab>
        </TabPanel>
        <TabPanel>
       <OrderTab menuItem={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
