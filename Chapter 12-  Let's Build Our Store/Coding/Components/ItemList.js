import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NEW_CDN_URL } from '../utils/constant';
import { addItem, incrementQuantity, decrementQuantity, clearCart, removeItem } from '../utils/cartSlice';

const ItemList = ({ items, resInfo }) => {
  console.log("items", items);
  console.log("resInfo", resInfo);

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem({ item, resInfo }));
  };

  const handleIncrement = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.card.info.id === item.card.info.id
    );

    if (existingItemIndex !== -1) {
      // If item already exists in the cart, dispatch the incrementQuantity action
      dispatch(incrementQuantity(existingItemIndex));
    }
  };

  const handleDecrement = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.card.info.id === item.card.info.id
    );

    if (existingItemIndex !== -1) {
      // If item already exists in the cart, dispatch the decrementQuantity action
      dispatch(decrementQuantity(existingItemIndex));
    }
  };


  return (
    <div className="category-item">
      {items.map((item) => (
        <div className="item-container" key={item.card.info.id}>
          <div className="item-info">
            {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
              <i id="veg-logo" className="fa-regular fa-circle-stop"></i>
            ) : (
              <i id="nonveg-logo" className="fa-regular fa-square-caret-up"></i>
            )}
            <h3>{item.card.info.name}</h3>
            <h4>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </h4>
            <p>{item.card.info.description}</p>
          </div>
          <div className="item-img">
            <img src={NEW_CDN_URL + item.card.info.imageId} />
            {cartItems.some(
              (cartItem) => cartItem.card.info.id === item.card.info.id
            ) ? (
              // If item is in the cart, show inc-dec-counter
              <div className="inc-dec-count menu-counter">
                <div className="minus-counter" onClick={() => handleDecrement(item)}>-</div>
                <span>
                  {
                    cartItems.find(
                      (cartItem) => cartItem.card.info.id === item.card.info.id
                    )?.quantity
                  }
                </span>
                <div className="plus-counter" onClick={() => handleIncrement(item)}>+</div></div>
            ) : (
              // If item is not in the cart, show ADD button
              <button onClick={() => handleAddItem(item)} >ADD</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList