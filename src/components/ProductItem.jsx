// import React,{useState,useEffect} from "react";

// const ProductItem = () => {

//   const [prod,setProd]=useState([]);


//     fetch(`http://localhost:8080/products`)
//       .then((res)=>res.json())
//       .then(data=>{
//         let products=data.map(product=>{
//           return <>
//             <h2>{product.name}</h2>
//           </>
//         })
//         setProd(products)
//       })
//       .catch((err)=>{console.log(err)
//       })
  

//   return <div>
//     {/* <div>
//         {products.map((product)=>{
//           {console.log(product)}
//           <div key={product.id}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <button onClick={()=>{}}>Increment</button>
//             <button onClick={()=>{}}>Decrement</button>
//             <button onClick={()=>{}}>Delete</button>
//           </div>
          

//         })}
//       </div> */}
//       {prod}
//   </div>
// };

// export default ProductItem;

import React from "react";

const ProductItem = () => {
  return <div>{/* CODE HERE */}</div>;
};

export default ProductItem;