import SingleCard from "../../Components/SingleCard/SingleCard";


const OrderTab = ({menuItem}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                menuItem.map(card => <SingleCard
                key={card._id}
                card={card}
                ></SingleCard>)
            }
            </div>
    );
};

export default OrderTab;