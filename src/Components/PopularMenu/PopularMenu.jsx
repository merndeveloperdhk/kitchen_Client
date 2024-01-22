import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import UseMenu from "../UseMenu/UseMenu";


const PopularMenu = () => {
   /*  const[menus, setMenus] = useState([]);
    useEffect(()=>{
        fetch('/public/menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(popularItem => popularItem.category === 'popular');
            setMenus(popularItems)
        })
    },[]) */
    const [menus] = UseMenu();
    const popular = menus.filter(item => item.category === 'popular')
    return (
        <div className="my-4 md:my-8 px-4 md:px-0 ">
            <SectionTitle
            subHeading={"Popular Items"}
            heading={"From Our Menu"}>
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
                {
                    popular.map(menuItem => <MenuItem
                         key={menuItem._id}
                         menuItem={menuItem}
                         ></MenuItem>)
                }
            </div>

            <button className=" block mx-auto mt-4 text-yellow-500 font-bold shadow-lg border-b-4  px-4 py-2 rounded ">View full menu</button>
        </div>
    );
};

export default PopularMenu;