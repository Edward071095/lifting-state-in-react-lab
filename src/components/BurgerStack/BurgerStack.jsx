const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
      <ul style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {stack.map((ingredient, index) => (
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
            <button onClick={() => removeFromBurger(index)}>X</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;