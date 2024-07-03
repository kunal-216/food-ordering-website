import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);
    const [itemCount, setItemCount] = useState(cartItems[id] || 0);

    const handleAddToCart = () => {
        addToCart(id);
        setItemCount((prev) => prev + 1);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(id);
        setItemCount((prev) => prev - 1);
    };

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={url+"/images/"+image} alt="" />
                {itemCount === 0 ? (
                    <img className='add' onClick={handleAddToCart} src={assets.add_icon_white} alt='' />
                ) : (
                    <div className='food-item-counter'>
                        <img onClick={handleAddToCart} src={assets.add_icon_green} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt="" />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-description'>{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
