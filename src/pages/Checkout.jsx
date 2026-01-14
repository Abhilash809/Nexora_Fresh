import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import Button from '../components/common/Button';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const { formatPrice } = useCurrency();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (cartItems.length === 0) {
        navigate('/cart');
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            clearCart();
            alert("Order Placed Successfully! (This is a demo)");
            navigate('/');
        }, 2000);
    };

    return (
        <div className="checkout-page">
            <h1 className="page-title">Checkout</h1>

            <div className="checkout-container">
                {/* Checkout Form */}
                <div className="checkout-form-container">
                    <h2>Shipping Information</h2>
                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" required placeholder="John" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" required placeholder="Doe" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" required placeholder="john@example.com" />
                        </div>

                        <div className="form-group">
                            <label>Street Address</label>
                            <input type="text" required placeholder="123 Green Lane" />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" required placeholder="City" />
                            </div>
                            <div className="form-group">
                                <label>Postal Code</label>
                                <input type="text" required placeholder="10000" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" required placeholder="+94 7X XXX XXXX" />
                        </div>

                        <div className="form-actions">
                            <Button type="submit" variant="primary" disabled={isSubmitting} className="btn-block">
                                {isSubmitting ? 'Processing...' : 'Place Order'}
                            </Button>
                            <Button variant="outline" className="btn-block" onClick={() => navigate('/cart')}>
                                Back to Cart
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="checkout-summary">
                    <h2>Order Summary</h2>
                    <div className="order-items-list">
                        {cartItems.map(item => (
                            <div key={item.id} className="summary-item">
                                <span>{item.name} x {item.quantity}</span>
                                <span>{formatPrice(item.priceLKR * item.quantity)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>{formatPrice(getCartTotal())}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
