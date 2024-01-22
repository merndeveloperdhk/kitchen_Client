

const MenuItem = ({menuItem}) => {
    const{image, price, recipe, name} = menuItem;
    return (
        <div className="flex space-x-4">
            <img className="w-[120px] h-[90px] rounded-e-[150px] rounded-b-[200px]" src={image} alt="" />
            <div>
                <h1 className="uppercase">{name} ...........</h1>
                <p> {recipe}</p>
            </div>
                <p className="text-yellow-500"> ${price}</p>
        </div>
    );
};

export default MenuItem;