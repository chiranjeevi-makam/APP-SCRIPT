import './index.css' 


const Head=()=><div className="HeadLayout"> 
<div className="logoAndIcons">
    <div className="logoAndMenu">
        <img src="\assets\solar_hamburger-menu-linear.png" className="menu" alt="menu"/> 
        <img src="\assets\Logo.png" className="lowerLogo" alt="flowerImage"/>
    </div> 
    <h1 className="logoName">LOGO</h1> 
    <div className="rightSideLogos"> 
        <div className="leftSideThreeLogos"> 
            <img src="\assets\search-normal.png" className="logoMargin" alt="searchIcon"/>
            <img src="\assets\heart.png" className="logoMargin" alt="HeartImage"/> 
            <img src="\assets\shopping-bag.png" className="logoMargin" alt="ShoppingImage"/>
        </div> 

        <div className="profileAndLanguage hideProfile">
            <img src="\assets\profile.png" className="logoMargin" alt="PersonImage"/> 
            <select>
                <option value="ENG">ENG</option>
            </select>
        </div>
        
    </div>
</div> 
<div className="propertiesNamesLayout">  
    <div className="namesRow">
        <p className="nameDecaration">SHOP</p> 
        <p className="nameDecaration">SKILLS</p>
        <p className="nameDecaration">STORIES</p>
        <p className="nameDecaration">ABOUT</p>
        <p className="nameDecaration">CONTACT US</p>
    </div>
    
</div>

</div> 

export default Head