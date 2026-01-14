import React, { createContext, useState, useContext } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState('LKR'); // Default to LKR

    // Exchange rate placeholder (1 USD = 300 LKR approximately, needs real API or static update)
    const exchangeRate = 300;

    const toggleCurrency = () => {
        setCurrency((prev) => (prev === 'LKR' ? 'USD' : 'LKR'));
    };

    const formatPrice = (priceInLKR) => {
        if (currency === 'LKR') {
            return `LKR ${priceInLKR.toLocaleString()}`;
        } else {
            const priceInUSD = (priceInLKR / exchangeRate).toFixed(2);
            return `$${priceInUSD}`;
        }
    };

    return (
        <CurrencyContext.Provider value={{ currency, toggleCurrency, formatPrice }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => useContext(CurrencyContext);
