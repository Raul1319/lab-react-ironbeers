import { NavLink } from 'react-router-dom'
import beers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"

function HomePage() {

return(

    <div>
     
     <section>

    <img src={beers} alt={beers} />
    <NavLink to="./beers">All Beers</NavLink>
    <p>Ve todas las Maravillosas Cervezas</p>
    </section>


    <section>

     <img src={randomBeer} alt={randomBeer} />
     <NavLink to="./random-beer">Random Beer</NavLink>
     <p>Escoge una cerveza Aleatoria</p>

    </section>

    <section>
     
     <img src={newBeer} alt={newBeer} />
     <NavLink to="./new-beer">New Beer</NavLink>
     <p>Escoge tu nueva Cerveza</p>


    </section>

    </div>
)


}
export default HomePage;