import React, { useState } from 'react';
import './App.css';

import Buttom from './components/Button'
import List from './components/List'

function App() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState('');

  // PASSED TO LIST
  const handleChange = (e) => {
    setNewItem(e.target.value)
  }

  const handleAddItem = (e) => {
    e.preventDefault();
    setList([...list, newItem])
  }

  const handleDeleteItem = (index) => {
    clearClass()
    const copy = [...list]
    copy.splice(index, 1)
    setList(copy)
  }

  const itens = list.map(function(item, index){
    return <li key={index} id={index}> {index + 1}. {item}  <span onClick={() => handleDeleteItem(index)}>excluir</span> </li>
  })
  
  const deleteAll = () => {
    setList([]);
  }
//PASSED TO BUTTON
  const handleDraw = () => {
    const lenght = list.length
    if (lenght <= 0) return
    const result = randomInt(0, lenght)
    clearClass()
    addClass(result)
    console.log('ativei')
  }

  const randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
  }

  const clearClass = () => {
    const refreshClasses = document.querySelectorAll('li');
    [].forEach.call(refreshClasses, function(el) {
      el.className = '';
    })
  }

  const addClass = (result) => {
    const selected = document.getElementById(`${result}`)
    selected.className = "selected"
  }


  return (
    <div className='App'>
      <Buttom
        handleDraw={handleDraw}
      />
      <List 
        handleChange={handleChange}
        newItem={newItem}
        handleAddItem={handleAddItem}
        itens={itens}
        deleteAll={deleteAll}
      />
    </div>
  );
}

export default App;
