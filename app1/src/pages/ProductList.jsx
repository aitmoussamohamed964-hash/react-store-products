
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function ProductList() {

    const [products, setProducts] = useState([]);
    const [searchId, setSearchId] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // Recuperer les produits depuis API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // Rechercher un produit par ID
    function handleSearch() {

        if (searchId === "" || Number(searchId) < 1) {
            setError("Veuillez entrer un ID valide");
            return;
        }

        setError("");
        navigate(`/product/${searchId}`);
    }

    return (
        <div className="container">

            <h1>Discover Our Amazing Products</h1>

            <div className="search">
                <input
                    type="number"
                    placeholder="Enter Product ID..."
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />

                <button onClick={handleSearch}>
                    Rechercher
                </button>
            </div>

            {error && <p className="error">{error}</p>}

            <h2>Our Products</h2>

            <div className="products">

                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </div>
    );
}

export default ProductList;
