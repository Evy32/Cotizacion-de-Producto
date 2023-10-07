import { useEffect, useState } from "react";
import useFetch from "../src/assets/useFetch";
import '../public/products.css'

export const Products = () => {

const { data } = useFetch("http://localhost:3005")
const loadQuantity = (data) => {
  return data?.map((product)=>Object.assign(product, {product_quantity: 0}))
}
const [products, setProduct] = useState([]);

useEffect(()=>{if(data){setProduct(loadQuantity(data))}},[data]);

const increaseQuant = (product_code) => {
   const product = products.filter((product)=> product.product_code === product_code).map((product)=>({...product, product_quantity: product.product_quantity + 1}))
   const b= products.filter((product)=> product.product_code !== product_code)
   setProduct([...b, ...product].sort((x, y)=>{if(x.product_id > y.product_id){return 1}if(x.product_id < y.product_id){return -1}}));
};


const decreaseQuant  = (product_code) => {
    const product = products.filter((product)=> product.product_code === product_code).map((product)=>({...product, product_quantity: (product.product_quantity > 0? product.product_quantity - 1 : product.product_quantity = 0)}))
    const b= products.filter((product)=> product.product_code !== product_code)
    setProduct([...b, ...product].sort((x, y)=>{if(x.product_id > y.product_id){return 1}if(x.product_id < y.product_id){return -1}}));
};
    
  return <div className="containerProduct">
    {
      products?.map((product)=>{
        return(
          <div key= {product.product_id} className="product">
            <h3 className="productlist">{product.product_name} </h3>
            <h4>${product.product_price}</h4>
            <div className="quantity">
              <button onClick={()=>decreaseQuant(product.product_code)}>-</button>
              <p>{product.product_quantity}</p> 
              <button onClick={()=>increaseQuant(product.product_code)}>+</button>
            </div>
            <p>${parseFloat(product.product_price) * parseFloat(product.product_quantity)}</p>
            <div className="buttons">
              <button>Ver</button>
              <button>Descargar</button>
            </div>
          </div>
        )
      })
    }
  </div>
}

