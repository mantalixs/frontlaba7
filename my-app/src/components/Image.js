import React from "react";

function Image() {
    return (
        <div className="city-image">
            <img
                src={`${process.env.PUBLIC_URL}/img/fastov.jpg`}
                alt="Фастів"
            />
            <p className="image-caption">
                Панорама Фастова — затишного міста на Київщині.
            </p>
        </div>
    );
}

export default Image;
