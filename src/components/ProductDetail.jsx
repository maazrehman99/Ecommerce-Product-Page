import React, { useEffect, useState } from "react";
import "../styles/productdetails.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const ProductDetail = ({  }) => {
      const dispatch = useDispatch();
    const { id } = useParams();
const [product, setProduct] = useState(null);

useEffect(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => setProduct(json))
    .catch((err) => console.error(err));
}, []);

const addToCart = (options) => {
  dispatch({
    type: "addToCart",
    payload: options,
  });
  toast.success("Item added to cart");
  dispatch({
    type: "calculatePrice",
  });
};


 
  return (
    <div className="productDetails">
      {product ? (
        <ProductPage
          name={product.title}
          price={product.price}
          img={product.image}
          id={product.id}
          category={product.category}
          description={product.description}
          handler={addToCart}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
    
  );
  
};
const ProductPage = ({id,name,price,img,category,description,handler}) => {
    return (
      <div class="product-container">
        <div class="product-image">
          <img src={img} alt="Product Image" />
        </div>
        <div class="product-details">
          <h1 class="product-name">{name}</h1>
          <p class="product-category">{category}</p>
          <p class="product-description">
            {description} Our products are designed with the customer in mind.
            We strive to create items that are not only visually stunning, but
            also perform flawlessly and exceed expectations.
          </p>
          <p class="product-price">${price}</p>
          <button
            className="add-to-cart-button"
            onClick={() => handler({ name, price, quantity: 1, img, id })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
}

export default ProductDetail;
