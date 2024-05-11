import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { REACT_APP_AUTH_DOMAIN, REACT_APP_CLIENT_ID } from './.env';
const root = ReactDOM.createRoot(document.getElementById('root'));

// Domain
// dev-4sh38sflzcxe70tg.us.auth0.com

// Client ID
// GnteJdrltIJyjsDEvuBumu4wQAws1GnL


root.render(
    <Auth0Provider
        domain='dev-4sh38sflzcxe70tg.us.auth0.com'
        clientId='GnteJdrltIJyjsDEvuBumu4wQAws1GnL'
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
        cacheLocation="localStorage"
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
);
