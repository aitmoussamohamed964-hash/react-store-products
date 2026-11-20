
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Recuperer un produit par ID
    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)

            .then(response => {
                if (!response.ok) {
                    throw new Error("Produit introuvable");
                }
                return response.json();
            })

            .then(data => {
                setProduct(data);
            })

            .catch(error => {
                console.log(error);
                setProduct(null);
            })

            .finally(() => {
                setLoading(false);
            });

    }, [id]);

    if (loading) {
        return <h2>Chargement...</h2>;
    }

    if (!product) {
        return (
            <div className="container">
                <h2>Produit introuvable</h2>
                <Link to="/">Retour aux produits</Link>
            </div>
        );
    }

    return (

        <div className="container">

            <Link to="/" className="back">
                ← Back to products
            </Link>

            <div className="details">

                <img
                    src={product.image}
                    alt={product.title}
                />

                <div className="details-info">

                    <h2>{product.title}</h2>

                    <p className="price">
                        ${product.price}
                    </p>

                    <p>{product.description}</p>

                    <p>
                        Category: {product.category}
                    </p>

                    <p>
                        Rating: {product.rating.rate} / 5
                    </p>

                    <p>
                        Count: {product.rating.count}
                    </p>

                    <button>Continue shopping</button>

                </div>

            </div>

        </div>

    );
}

export default ProductDetails;
