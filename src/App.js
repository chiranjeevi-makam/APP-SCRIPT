import './App.css';  
import  { useState, useEffect } from 'react';
import Head from './components/Header'
import Sidebar from './components/Sidebar'; 
import ProductDetails from './components/CardDetails/ProductDetails';
import Footer from './components/Footer';
const App=()=>{  
  
  const [products, setProducts] = useState([]); 
  const[status, setStatus]=useState(false)   
  const change=()=>{
    setStatus(prev=>(!prev))
  }

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []); 
  
  
  
  return(
    <div className='background'>
        <Head/> 
        <div className='Describe'> 
              <h2 className="subheading">DISCOVER OUR PRODUCTS</h2> 
              <h3 className="secondSub">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h3>
        </div> 
        <div className="filterRow">   
                <p className="filter">FITER</p>
                <div className="itemsAndHide"> 
                  <p className="items">3425 Items</p> 
                  <p onClick={change}> <img src="\assets\arrow-left.png" alt="arrow"/> <span className="showItems">{status?"SHOW FILTER":"HIDE FILTER"}</span></p>
                </div> 
                <hr className="horizinatalLone"/> 
                <select className="literSelecter">
                  <option value="Recommend">RECOMMENDED</option> 
                  <option value="newest first">NEWEST FIRST</option> 
                  <option value="popular">POPULAR</option> 
                  <option value="hight to low">PRICE: HIGH TO LOW</option>
                  <option value="low to high">PRICE: LOW TO HIGH</option>
                </select>

        </div>   

        <div className='fiterAndProducts'> 
        {status?<Sidebar/>:null }
        <ul className='productDispaly'>
          {products.map((each)=> (<ProductDetails key={each.id} products={each}/>))}
        </ul>

        </div> 

        <div className='onlyProducts'>
        <ul className='productDispaly'>
          {products.map((each)=> (<ProductDetails key={each.id} products={each}/>))}
        </ul>
        </div>  

        <Footer/>
        



        
    </div> 
      
      
    
  )};


export default App;
