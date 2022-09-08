import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [character, setCharacter] = useState('');

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${character}`)
      .then((res) => { setData(res.data.results)})
      .catch(err => console.log(err))
  }, [character])

  return (
    <div className='App'>
      <h1>Rick and Morty API</h1>
      <Form character={character} setCharacter={setCharacter} />
      <div>
      <div className='card-deck row row-cols-2'>
        {data.map((item) => {
          return (
              <div className='col card p-3' style={{ color: '#0fd850', width: '20rem', margin: '20px auto', backgroundColor: 'rgba(245, 245, 245, 0.4)' }}>
                <h3 key={item.id}>{item.name}</h3>
                <a href={`https://rickandmorty.fandom.com/wiki/${item.name}`}><img style={{borderRadius: '9px', width: '250px'}} src={item.image} alt="" /></a>
              </div>
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
