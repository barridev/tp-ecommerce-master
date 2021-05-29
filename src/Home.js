import Product from './Product'
import './Home.css'

function Home(){
    return(
        <div className="home">
            <img className="home__image" src="https://www.mobilierdefrance.com/11653/meuble-tv-2-portes-eclipse.jpg" alt=""></img>
            <div className="home__row">
                 <Product 
                    id="12323" 
                    title="Meuble Jane" 
                    price={139.99} 
                    rating={4} 
                    image="https://www.mobilierdefrance.com/14479/buffet-2-portes-eclipse.jpg">
                 </Product>
                 <Product 
                    id="78963" 
                    title="Meuble Ella" 
                    price={149.99} 
                    rating={5} 
                    image="https://www.mobilierdefrance.com/14486/buffet-2-portes-eclipse.jpg">
                 </Product><Product 
                    id="98313" 
                    title="Meuble Lyse" 
                    price={120} 
                    rating={3} 
                    image="https://www.mobilierdefrance.com/14483/buffet-2-portes-eclipse.jpg">
                 </Product>
            </div>
            <div className="home__row">
                 
                 <Product 
                    id="78963" 
                    title="Canapé Vienne" 
                    price={329.99} 
                    rating={5} 
                    image="https://www.mobilierdefrance.com/13787/canape-level.jpg">
                 </Product><Product 
                    id="98313" 
                    title="Canapé Jenn" 
                    price={329.99} 
                    rating={5} 
                    image="https://www.mobilierdefrance.com/13788/canape-level.jpg">
                 </Product>
            </div>
            <div className="home__row">
                <Product 
                        id="12323" 
                        title="Chaise Claire" 
                        price={90.50} 
                        rating={4} 
                        image="https://www.mobilierdefrance.com/14993/vitrine-1-porte-eclipse.jpg">
                </Product>
            </div>
        </div>
    )
}

export default Home