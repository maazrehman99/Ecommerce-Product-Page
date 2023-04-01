import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems,Shipping,SubTotal,Total,Tax } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: {id},

    });
    dispatch({
      type: "calculatePrice",
    });
  }
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({
      type: "calculatePrice",
    });
  }
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({
      type: "calculatePrice",
  
    });
  }

  const img1 =
    "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/_/a/_apple-macbook-pro-m2_-myshop-pk-6_1_1.jpg";
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <Cartitem
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside>
        <h2>Sub Total : $ {SubTotal}</h2>
        <h2>Shipping : $ {Shipping}</h2>
        <h2>Tax : $ {Tax}</h2>
        <h2>Total : $ {Total}</h2>
      </aside>
    </div>
  );
};

const Cartitem = ({
  img,
  name,
  price,
  quantity,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  

  <div className="cartItem">
    <img src={img} alt="" />
    <article>
      <h2>{name}</h2>
      <p> $ {price}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{quantity}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>

);
export default Cart;
