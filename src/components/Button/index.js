import React from 'react';
import './styles.css'

function Button({ handleDraw }) {
  return (
    <div className="Button">
      <button onClick={handleDraw}>
        SORTEAR
      </button>
    </div>
  );
}

export default Button;