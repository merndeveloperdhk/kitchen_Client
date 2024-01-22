import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImage from '../../assets/menu/banner3.jpg';
import desertImage from '../../assets/menu/dessert-bg.jpeg';
import saladImage from '../../assets/menu/salad-bg.jpg';
import soupImage from '../../assets/menu/soup-bg.jpg';
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import drinksImage from '../../assets/menu/dessert-bg.jpeg'
import UseMenu from "../hooks/UseMenu";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuCategory from "../../MenuCategory/MenuCategory";


const Menu = () => {
    const[menus] = UseMenu();
    const offered = menus.filter(item => item.category === 'offered');
    const desert = menus.filter(item => item.category === 'dessert');
    const salad = menus.filter(item => item.category === 'salad');
    const soup = menus.filter(item => item.category === 'soup');
    const pizza = menus.filter(item => item.category === 'pizza');
    const drinks = menus.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>MIsam's Kitchen | Menu</title>
            </Helmet>
            <Cover image={menuImage} coverTitle={"Menu"} ></Cover>
            {/* offered */}
           <div className="mt-16 mb-6">
           <SectionTitle  subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={ offered}></MenuCategory>
           </div>
           {/* desert */}
           <div className="mb-8">
           <Cover image={desertImage} coverTitle={"Dessert"}></Cover>
            <MenuCategory  items={desert} ></MenuCategory>
           </div>
           {/* Salad */}
           <div className="mb-8">
                <Cover image={saladImage} coverTitle={"Salad"}></Cover>
                <MenuCategory items={salad}></MenuCategory>
           </div>
           {/* Soup */}
           <div className="mb-8">
                <Cover image={soupImage} coverTitle={"Soup"}></Cover>
                <MenuCategory items={soup}></MenuCategory>
           </div>
           {/* Pizza */}
           <div className="mb-8">
                <Cover image={pizzaImage} coverTitle={"Pizza"}></Cover>
                <MenuCategory items={pizza}></MenuCategory>
           </div>
           {/* drinks */}
           <div className="mb-8">
                <Cover image={drinksImage} coverTitle={"Drinks"}></Cover>
                <MenuCategory items={drinks}></MenuCategory>
           </div>
           
        </div>
    );
};

export default Menu;