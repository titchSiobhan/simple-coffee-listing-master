// https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json

import { useState, useEffect, use, useDebugValue } from 'react';

function App() {
	const [drinks, setDrinks] = useState([]);

  useEffect(() => {
async function getDrinks() {
  const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json');
  const data = await response.json();
  const drinksData = data.map((drink) => ({
    id: drink.id,
    name: drink.name,
    price: drink.price,
    rating: drink.rating,
    image: drink.image
  }));
  setDrinks(drinksData);
}
getDrinks();
  }, []);
  

	return (
		<div className="content">
      <div className="hero">
			<h1>Our Collection</h1>
      <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>

      <div className="btn-block">
        <button className="btn primaryBtn">All Products</button>
       
        <button className="btn secondaryBtn">Available Now</button>
      </div>
      </div>

      <div className="card-area">
        {drinks.map((drink) => (
          <div className="drinkCard" key={drink.id}>
            <img src={drink.image} alt={drink.name} />
            <div className="drink-info">
              <div className="name-rating">
            <h2>{drink.name}</h2> 
            
            {drink.rating !== null && <h3> <img src="Star_fill.svg" alt="" />{drink.rating}</h3>}
            {drink.rating === null && <h3> <img src="Star.svg" alt="" /> No rating yet</h3>}
            </div>
            <div className="price-box">
            <p className='price'>{drink.price}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
      </div>
		
	);
}
export default App;
