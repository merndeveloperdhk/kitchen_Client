import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImage from '../../assets/menu/banner3.jpg';
import desertImage from '../../assets/menu/dessert-bg.jpeg';
import saladImage from '../../assets/menu/salad-bg.jpg';
import soupImage from '../../assets/menu/soup-bg.jpg';
import offeredImage from '../../assets/menu/pizza-bg.jpg';
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
            <Cover image={menuImage} coverTitle={"menu"} ></Cover>
            {/* offered */}
           <div className="mt-16 mb-6">
           <SectionTitle  subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={ offered}  coverTitle={"offered"} image={offeredImage} ></MenuCategory>
           </div>
           {/* desert */}
           <div className="mb-8">
           {/* <Cover image={desertImage} coverTitle={"dessert"}></Cover> */}
            <MenuCategory image={desertImage}  items={desert} coverTitle={"dessert"} ></MenuCategory>
           </div>
           {/* Salad */}
           <div className="mb-8">
                {/* <Cover image={saladImage} coverTitle={"salad"}></Cover> */}
                <MenuCategory items={salad} image={saladImage} coverTitle={"salad"}></MenuCategory>
           </div>
           {/* Soup */}
           <div className="mb-8">
                {/* <Cover image={soupImage} coverTitle={"soup"}></Cover> */}
                <MenuCategory items={soup} image={soupImage} coverTitle={"soup"}></MenuCategory>
           </div>
           {/* Pizza */}
           <div className="mb-8">
                {/* <Cover image={pizzaImage} coverTitle={"pizza"}></Cover> */}
                <MenuCategory items={pizza} image={pizzaImage} coverTitle={"pizza"}></MenuCategory>
           </div>
           {/* drinks */}
           <div className="mb-8">
                {/* <Cover image={drinksImage} coverTitle={"drinks"}></Cover> */}
                <MenuCategory items={drinks} image={drinksImage} coverTitle={"drinks"}></MenuCategory>
           </div>
           
        </div>
    );
};

export default Menu;