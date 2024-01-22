import { Link } from "react-router-dom";
import Cover from "../Components/Shared/Cover/Cover";
import MenuItem from "../Components/Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverTitle, image }) => {
  return (
    <div>
      {coverTitle && <Cover image={image} coverTitle={coverTitle}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
        {items.map((menuItem) => ( <MenuItem
           key={menuItem._id}
            menuItem={menuItem}
            ></MenuItem>
        ))}
      </div>
      <Link to={`/order/${coverTitle}`}>
        <button className="px-3 py-2 border-b-2 border-slate-400 mx-auto block shadow-xl">
          Order your favourite food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
