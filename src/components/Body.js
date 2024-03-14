import {useState, useEffect} from'react';
import { CARDS_API } from '../utils/Links';
import AtlasCard from './AtlasCard';

const Body = () => {

    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(CARDS_API);
        const jsonData = await response.json();
        // console.log(jsonData);
        setCardsData(jsonData?.results);
        // console.log(cardsData);
    };

    return (
        <div className="cards-container">
            {cardsData.map((card) => {
                return (
                <AtlasCard key={card.id} singleCardData={card}/>
            )})};
        </div>
    );
}

export default Body;




