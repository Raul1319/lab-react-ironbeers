import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';


function BeersList() {
    const [beers, setBeers] = useState([])

  useEffect(() =>{
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) =>{
      setBeers(response.data)
    }).catch((err) =>{
      
    })

  },[])
  return (
    <div>
        
        
        <p>BeersList</p>
        <Link to="/">Home</Link>

        {beers.map((beer, index) =>{
            return(
                 <div key={index}>
                    <img src={beer.image_url} alt={beer.name} />
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                    <p>Credo Por: {beer.contributed_by}</p>
                    <br />
                    <Link to={`/beers/${beer._id}`}>Detalles</Link>
                     </div>
                )
        })}



    </div>
  )
}

export default BeersList