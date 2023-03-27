import React from "react";
import { toast } from "react-hot-toast";


const Home = () => {

  const img1 =
    "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/_/a/_apple-macbook-pro-m2_-myshop-pk-6_1_1.jpg";
const img2 =
  "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-l.jpg";
  const addToCart = (options) => {
    console.log(options);
      toast.success("Item added to cart")
  }

  const products = [
    {
      id: "asdas",
      name: "Mac Book",
      price: 1000,
      image:  img1 ,
    },
    {
      id: "sadas",
      name: "Iphone",
      price: 2000,
      image:  img2 ,
    },
  ];

  return (
    <div className="home">
      {products.map((i) => (
        <ProductComponent
          key={i.id}
          name={i.name}
          price={i.price}
          img={i.image}
          id={i.id}
          handler={addToCart}
        />
      ))}
    </div>
  );
};

const ProductComponent = ({ name, price, img, handler, id }) => {
  return (
    <div className="productCard">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <h4>${price}</h4>
      <button onClick={()=>handler({name,price,quanity:1,img,id})}>Add to Cart</button>
    </div>
  );
};

export default Home;
