import React from 'react';
import { Plus, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../../context/CurrencyContext';
import { useCart } from '../../context/CartContext';
import Button from './Button';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { formatPrice } = useCurrency();
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = React.useState(false);

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent navigation if clicking the button
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <Link to={`/products/${product.id}`} className="product-card-link">
            <div className="product-card">
                <div className="product-image-container">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        loading="lazy"
                    />
                    {product.isNew && <span className="badge badge-new">New Harvest</span>}
                    {!product.available && <span className="badge badge-out">Out of Stock</span>}
                </div>

                <div className="product-info">
                    <div className="product-header">
                        <h3 className="product-name">{product.name}</h3>
                        <span className="product-unit">per {product.unit}</span>
                    </div>

                    <p className="product-description">{product.description}</p>

                    <div className="product-footer">
                        <div className="product-price">
                            {formatPrice(product.priceLKR)}
                        </div>

                        <Button
                            variant={isAdded ? "success" : "primary"}
                            size="sm"
                            className={`btn-add-cart ${isAdded ? 'added' : ''}`}
                            onClick={handleAddToCart}
                            disabled={!product.available}
                            aria-label={`Add ${product.name} to cart`}
                        >
                            {isAdded ? <Check size={18} /> : <Plus size={18} />}
                            <span style={{ marginLeft: '4px' }}>{isAdded ? 'Added' : 'Add'}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
