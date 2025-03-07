const IngredientList = ({ ingredients, addToBurger }) => {
    return (
      <ul style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {ingredients.map((ingredient, index) => (
          <li
            key={index}
            style={{
              backgroundColor: ingredient.color,
              display: 'flex',
              alignItems: 'center',
              minWidth: '400px',
              maxWidth: '401px'
            }}
          >
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  export default IngredientList;