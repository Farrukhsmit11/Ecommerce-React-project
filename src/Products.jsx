import axios from "axios";
import { useState } from "react";

export default function Products() {
    const API_KEY = 'https://dummyjson.com/products';


     const [products, setProducts] = useState(null);

     const getProductData = async () => {
        const response = await axios(API_KEY);
        console.log("response " , response.data.products);

       setProducts(response.data.products)
     };
      const a = getProductData();

   
      
  return (
    <div>Products
        {products?.map}
    </div>
  )
}
