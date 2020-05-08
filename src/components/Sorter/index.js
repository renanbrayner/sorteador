import React from 'react';
import './styles.css'

function List({handleChange, newItem, handleAddItem, itens, deleteAll}) {
  return(
    <div className="Sorter">
      <form className="flex" onSubmit={handleAddItem}>
        <input 
          placeholder='Novo Item'
          onChange={handleChange}
          value={newItem}
        />
        <button type='submit'>ADICIONAR ITEM</button>
      </form>

      <p onClick={deleteAll}>excluir todos</p>

      <ol >
        {itens}
      </ol>
    </div>
  );
}

export default List;