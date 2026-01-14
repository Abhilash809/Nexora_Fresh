import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import Button from '../components/common/Button';
// import { PRODUCTS_DATA } from './Products'; // In a real app, this would be imported
import './ProductDetails.css';

// Re-using mock data here for simplicity since we don't have a backend or separate data file yet
const MOCK_PRODUCT_DB = [
    {
        id: 1,
        name: "Fresh Salad Cucumber",
        category: "Fresh Produce",
        priceLKR: 450,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=2574&auto=format&fit=crop",
        description: "Crisp, refreshing, and grown in our premium greenhouses. Perfect for salads and healthy snacks. Our cucumbers are harvested daily to ensure maximum crunch and flavor.",
        details: "Grown using hydroponic systems with 80% less water. Pesticide-free and rich in vitamins.",
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
        description: "Export-quality organic tomatoes.",
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
        description: "Vibrant and crunchy bell peppers.",
        available: false,
        isNew: false
    }
];

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { formatPrice } = useCurrency();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Simulate API fetch
        const foundProduct = MOCK_PRODUCT_DB.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return <div style={{ padding: '5rem', textAlign: 'center' }}>Loading...</div>;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        // Maybe show a toast
    };

    return (
        <div className="product-details-page">
            <button onClick={() => navigate(-1)} className="back-btn">
                <ArrowLeft size={20} /> Back
            </button>

            <div className="product-details-container">
                <div className="product-gallery">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info-panel">
                    <span className="product-category-badge">{product.category}</span>
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-price-large">
                        {formatPrice(product.priceLKR)}
                        <span className="unit-label"> / {product.unit}</span>
                    </p>

                    <div className="product-description-container">
                        <p className="main-desc">{product.description}</p>
                        {product.details && <p className="sub-desc">{product.details}</p>}
                    </div>

                    {product.available ? (
                        <div className="purchase-actions">
                            <div className="qty-selector">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={18} /></button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)}><Plus size={18} /></button>
                            </div>
                            <Button variant="primary" size="lg" onClick={handleAddToCart} className="add-btn">
                                Add to Cart <ShoppingBag size={20} style={{ marginLeft: '8px' }} />
                            </Button>
                        </div>
                    ) : (
                        <div className="out-of-stock-msg">Currently Out of Stock</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
