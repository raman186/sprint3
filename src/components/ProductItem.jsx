import React,{useState,useEffect} from "react";

const ProductItem = () => {

  const [products,setProducts]=useState([]);

  useEffect(()=>{
    fetch(`http://localhost:8080/products`)
      .then((res)=>res.json())
      .then((res)=>setProducts(res))
      .catch((err)=>console.log(err))
  },[])

  return <div>
    <div>
        {products.map((product)=>{
          {console.log(product)}
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button onClick={()=>{}}>Increment</button>
            <button onClick={()=>{}}>Decrement</button>
            <button onClick={()=>{}}>Delete</button>
          </div>
          

        })}
      </div>
  </div>
};

export default ProductItem;
