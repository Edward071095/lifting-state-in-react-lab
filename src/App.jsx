import './App.css';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';
import { useState } from 'react';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'red' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: 'orange' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];
  
  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);

  };

  const removeFromBurger = (index) => {
    setStack([...stack.slice(0, index), ...stack.slice(index + 1)]);
  };
  

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <div className="ingredient-list">
          <h2>Ingredients</h2>
          <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        </div>
        <div className="burger-stack">
          <h2>Your Burger</h2>
          <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
        </div>
      </section>
    </main>
  );
};

export default App;