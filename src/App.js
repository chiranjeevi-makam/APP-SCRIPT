import './App.css'; 

import Head from './components/Header'
const App=()=>  (
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
                  <p> <img src="\assets\arrow-left.png" alt="arrow"/> <span className="showItems">SHOW FILTER</span></p>
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
      </div> 
      
      
    
  );


export default App;
