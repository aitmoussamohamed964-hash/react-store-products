
import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

    return (

        <div className="product-card">

            <img
                src={product.image}
                alt={product.title}
            />

            <h3>{product.title}</h3>

            <p className="price">
                ${product.price}
            </p>

            <Link to={`/product/${product.id}`}>
                <button>Détails</button>
            </Link>

        </div>

    );
}

export default ProductCard;
