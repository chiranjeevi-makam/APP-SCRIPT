import './index.css'  

const  ProductDetails=(props)=>{  
    const{products}=props 
    const{title,id,image}=products
    
    return(<div><li className='productStructure' key={id}>
    <img src={image} className='ProductImage' alt="productImage"/> 
    <h3 className='product_name'>{title}</h3> 
    <div class="productNameAndHeart">
     <p className='paraSignIn'>Sign in or Create an account to see pricing</p>    
    <img src="\assets\heart.png" className='productHeart' alt="heart"/>
    </div> 
    
    </li></div>)}
  

export default ProductDetails