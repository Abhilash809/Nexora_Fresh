import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import Button from '../components/common/Button';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const { formatPrice } = useCurrency();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart-container">
                <ShoppingBag size={64} color="var(--color-primary-light)" />
                <h2>Your Cart is Empty</h2>
                <p>Looks like you haven't added any fresh produce yet.</p>
                <Link to="/products">
                    <Button variant="primary">Start Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h1 className="page-title">Your Cart</h1>

            <div className="cart-content">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p className="item-unit">Price: {formatPrice(item.priceLKR)} / {item.unit}</p>
                            </div>

                            <div className="cart-item-actions">
                                <div className="quantity-controls">
                                    <button
                                        className="qty-btn"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="qty-value">{item.quantity}</span>
                                    <button
                                        className="qty-btn"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <div className="item-total">
                                    {formatPrice(item.priceLKR * item.quantity)}
                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                    aria-label="Remove item"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>{formatPrice(getCartTotal())}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>{formatPrice(getCartTotal())}</span>
                    </div>

                    <Button
                        variant="primary"
                        className="btn-block checkout-btn"
                        onClick={() => navigate('/checkout')}
                    >
                        Proceed to Checkout <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </Button>

                    <button className="clear-cart-btn" onClick={clearCart}>
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
