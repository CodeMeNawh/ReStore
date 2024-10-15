import { Fragment } from "react/jsx-runtime";
import { Product } from "../../app/models/product"
import { ProductList } from "./ProductList";
import { useState, useEffect } from "react";



export function Catalog() { // normalnie props: Props i wtedy props.products ale poprzez destrukalizacje tak jest przejrzysciej
    

        const [products, setProducts] = useState<Product[]>([]);

        useEffect(()=> {
          fetch('http://localhost:5000/api/products')
          .then(response => response.json())
          .then(data => setProducts(data))
          .catch(error => console.error('Error:', error));
        },[])
      
        
        
    return(
        <Fragment>
            <ProductList products={products} />
            
        </Fragment>
        
    );
}

