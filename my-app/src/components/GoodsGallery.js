import React from "react";
import GoodsCard from "./GoodsCard";

function GoodsGallery() {
    const goods = [
        {
            id: 1,
            name: "Apple",
            price: 15,
            imgSrc: `${process.env.PUBLIC_URL}/img/apple.png`,
        },
        {
            id: 2,
            name: "Pear",
            price: 20,
            imgSrc: `${process.env.PUBLIC_URL}/img/pear.png`,
        },
        {
            id: 3,
            name: "Grape",
            price: 25,
            imgSrc: `${process.env.PUBLIC_URL}/img/grape.png`,
        },
        {
            id: 4,
            name: "Peach",
            price: 18,
            imgSrc: `${process.env.PUBLIC_URL}/img/peach.png`,
        },
        {
            id: 5,
            name: "Banana",
            price: 17,
            imgSrc: `${process.env.PUBLIC_URL}/img/banana.png`,
        },
        {
            id: 6,
            name: "Orange",
            price: 19,
            imgSrc: `${process.env.PUBLIC_URL}/img/orange.png`,
        },
    ];

    return (
        <div className="goods-gallery">
            {goods.map((item) => (
                <GoodsCard
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    imgSrc={item.imgSrc}
                />
            ))}
        </div>
    );
}

export default GoodsGallery;
