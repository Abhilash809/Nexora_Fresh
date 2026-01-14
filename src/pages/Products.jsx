import React, { useState, useEffect } from 'react';
import ProductCard from '../components/common/ProductCard';
import './Products.css';

// Mock Data
const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Fresh Salad Cucumber",
        category: "Fresh Produce",
        priceLKR: 450,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=2574&auto=format&fit=crop",
        description: "Crisp, refreshing, and grown in our premium greenhouses. Perfect for salads and healthy snacks.",
        available: true,
        isNew: true
    },
    {
        id: 2,
        name: "Coming Soon - Organic Tomato",
        category: "Organic",
        priceLKR: 850,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=2574&auto=format&fit=crop",
        description: "Export-quality organic tomatoes. Rich in flavor and grown without synthetic pesticides.",
        available: false,
        isNew: false
    },
    {
        id: 3,
        name: "Coming Soon - Bell Peppers",
        category: "Organic",
        priceLKR: 1200,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1563565375-f3fdf5efa269?q=80&w=2670&auto=format&fit=crop",
        description: "Vibrant and crunchy bell peppers, perfect for stir-fries and fresh eating.",
        available: false,
        isNew: false
    }
];

const CATEGORIES = ["All", "Fresh Produce", "Organic"];

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS_DATA);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredProducts(PRODUCTS_DATA);
        } else {
            setFilteredProducts(PRODUCTS_DATA.filter(p => p.category === selectedCategory));
        }
    }, [selectedCategory]);

    return (
        <div className="products-page">
            <div className="products-header">
                <h1 className="page-title">Our Harvest</h1>
                <p className="page-subtitle">Freshly picked from our greenhouses to your table.</p>
            </div>

            <div className="category-filter">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="products-grid">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
