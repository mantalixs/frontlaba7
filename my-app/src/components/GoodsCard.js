import React from "react";

function GoodsCard(props) {
    const { name, price, imgSrc } = props;

    return (
        <div className="goods-card">
            <img className="goods-image" src={imgSrc} alt={name} />
            <h3 className="goods-name">{name}</h3>
            <p className="goods-price">Ціна: {price} грн</p>
        </div>
    );
}

export default GoodsCard;
