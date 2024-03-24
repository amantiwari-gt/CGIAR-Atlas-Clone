import {useState, useEffect} from'react';
import { CARDS_API } from '../utils/Links';
import AtlasCard from './AtlasCard';
import Shimmer from './Shimmer';

const Body = () => {

    const [cardsData, setCardsData] = useState([]);

    const [filteredCards, setFilteredCards] = useState([]);

    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(CARDS_API);
        const jsonData = await response.json();
        // console.log(jsonData);
        setCardsData(jsonData?.results);
        setFilteredCards(jsonData?.results);
        // console.log(cardsData);
    };

    // if(cardsData.length === 0) {
    //     return <Shimmer/>;
    // };

    return cardsData.length === 0 ? <Shimmer/> : (
        <div className='body'>
            <span className='body-text'>
                <h1>Browse Data Layers</h1>
                <p>You can find the layers and data underlying the Atlas here. Many layers can be downloaded today, with more available in future releases. Use the filters to search by keyword or topic.</p>
            </span>
            <div className='filter'>
                <div className='search'>
                    <input 
                        className='search-input'
                        type='text' 
                        placeholder='Search for layer'
                        value={searchText}
                        onChange = {
                            (e) => setSearchText(e.target.value)
                        }
                    ></input>

                    <button 
                        className='search-btn'
                        onClick={
                            (e) => {
                                const filteredData = cardsData.filter(
                                    (card) => card.topic.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredCards(filteredData);
                            }
                        }
                    >Search</button>
                </div>
            </div>
            <div className="cards-container">
            {filteredCards.map((card) => {
                return (
                <AtlasCard key={card.id} singleCardData={card}/>
            )})}
            </div>
        </div>
        
    );
}

export default Body;




