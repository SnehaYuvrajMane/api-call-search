import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  const [data, setData] = useState([]); // 1
  const [search, setSearch] = useState('');
  const getData = async () => {
    try{

      const response = await axios.get('https://api.punkapi.com/v2/beers');
      console.log(response.data);
      setData(response.data);
    }
    catch(error){
      console.log(error);
    }
  }
    

  useEffect(() => {
    getData();
    
  }, [])


  return (
    <div className="App">
      <input type="text" onChange={(e)=>setSearch(e.target.value)} />
      <div className="data">

    
      {
        search === ""?(data.map((item) => {
          return (
            <div className='card' key={item.id}>
              <img src={item.image_url} alt="beer" width="200" height="200" />
              <h4>{item.name}</h4>
              <p>{item.tagline}</p>
            </div>
          )
        }
        )):
        data.filter(x=>x.name === search).map((item) => {
          return (
            <div className='card' key={item.id}>
              <img src={item.image_url} alt="beer" width="200" height="200" />
              <h4>{item.name}</h4>
              <p>{item.tagline}</p>
            </div>
          )
        }
        )
      }
        </div>
    </div>
  );
}

export default App;
