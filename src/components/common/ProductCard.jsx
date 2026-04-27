import React from 'react';
import { Plus, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../../context/CurrencyContext';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { formatPrice } = useCurrency();
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = React.useState(false);

    const handleAddToCart = (e) => {
        e.preventDefault();
        if (!product.available) return;
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <Link to={`/products/${product.id}`} className="product-card-link">
            <div className="product-card">
                <div className="product-image-container">
                    {product.isComingSoon ? (
                        <div className="coming-soon-placeholder">
                            <span>Coming Soon</span>
                        </div>
                    ) : (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                            loading="lazy"
                        />
                    )}
                    {product.isNew && !product.isComingSoon && <span className="badge badge-new">New Harvest</span>}
                    {!product.available && !product.isComingSoon && <span className="badge badge-out">Out of Stock</span>}
                </div>

                <div className="product-info">
                    <div className="product-header">
                        <h3 className="product-name">
                            {product.isComingSoon && <em className="coming-soon-prefix">Coming Soon — </em>}
                            {product.name}
                        </h3>
                        <span className="product-unit">per {product.unit}</span>
                    </div>

                    <p className="product-description">{product.description}</p>

                    <div className="product-footer">
                        <div className="product-price">
                            {formatPrice(product.priceLKR)}
                        </div>

                        <button
                            className={`btn-add-cart ${!product.available ? 'disabled' : ''} ${isAdded ? 'added' : ''}`}
                            onClick={handleAddToCart}
                            disabled={!product.available}
                            aria-label={`Add ${product.name} to cart`}
                        >
                            {isAdded ? <Check size={16} /> : <Plus size={16} />}
                            <span>{isAdded ? 'Added' : 'Add'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
