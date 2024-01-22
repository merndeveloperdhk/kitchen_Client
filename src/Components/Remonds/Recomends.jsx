import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect } from "react";
import SingleCard from "../SingleCard/SingleCard";


const Recomends = () => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('/public/menu.json')
        .then(res=> res.json())
        .then(data => {
            setCards(data)
        })
    },[])
    return (
        <div className="my-8 px-4 md:px-0 mt-1 md:mt-16">
            <SectionTitle
            subHeading={'Should Try'}
            heading={'chef Recomends'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {
                cards.slice(2,6).map((card, idx) => <SingleCard
                key={idx}
                card={card}
                ></SingleCard>)
            }
            </div>
        </div>
    );
};

export default Recomends;