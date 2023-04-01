import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const img1 =
    "https://mobipro.pk/media/catalog/product/cache/9dec5760a6263cc3ba39ca8d9164bdba/a/p/apple-iphone-x-silver_1.png";
  const img2 =
    "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-l.jpg";

  const img3 = "https://m.media-amazon.com/images/I/41xssMLI2DL._SL500_.jpg";
  const img4 =
    "https://phonedroid.com.pk/wp-content/uploads/2023/02/samsung-galaxy-s23-500x500.jpeg?x21157";
  const img5 =
    "http://cdn.shopify.com/s/files/1/0575/3628/2777/products/Untitled_500x500px_-2022-09-14T161837.851.png?v=1663190327";

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

const [products, setProducts] = useState([]);

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setProducts(json));
}, []);
  // const products = [
  //   {
  //     id: "asdas",
  //     name: "Samsung",
  //     price: 600,
  //     image: img1,
  //   },
  //   {
  //     id: "sadas",
  //     name: "Iphone X",
  //     price: 1399,
  //     image: img2,
  //   },
  //   {
  //     id: "saddas",
  //     name: "Realme",
  //     price: 1567,
  //     image: img3,
  //   },
  //   {
  //     id: "fdfs",
  //     name: "Oppo",
  //     price: 678,
  //     image: img4,
  //   },
  //   {
  //     id: "asdadsfs",
  //     name: "Iphone 12",
  //     price: 579,
  //     image: img5,
  //   },
  // ];

  return (
    <div className="home">
      {products.map((i) => (
        <ProductComponent
          key={i.id}
          name={i.title}
          price={i.price}
          img={i.image}
          id={i.id}
          handler={addToCart}
        />
      ))}
    </div>
  );
};

const ProductComponent = ({ name, price, img, handler, id}) => {
  return (
    <Link to={`/product/${id}`}  >
    <div className="productCard">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <h4>${price}</h4>
      <button onClick={() => handler({ name, price, quantity: 1, img, id })}>
        Add to Cart
      </button>
    </div>
    </Link>
  );
};

export default Home;
