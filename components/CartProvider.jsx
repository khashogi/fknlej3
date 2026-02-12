'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import client from '@/lib/shopify';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Initialize checkout on mount
  useEffect(() => {
    const initCart = async () => {
      try {
        // Check for existing checkout in localStorage
        const existingId = typeof window !== 'undefined' && localStorage.getItem('fknlej_checkout_id');
        
        if (existingId) {
          const existingCheckout = await client.checkout.fetch(existingId);
          if (existingCheckout && !existingCheckout.completedAt) {
            setCart(existingCheckout);
            return;
          }
        }
        
        const newCheckout = await client.checkout.create();
        if (typeof window !== 'undefined') {
          localStorage.setItem('fknlej_checkout_id', newCheckout.id);
        }
        setCart(newCheckout);
      } catch (err) {
        console.log('Shopify not connected yet — add your credentials to lib/shopify.js');
      }
    };
    initCart();
  }, []);

  const addToCart = useCallback(async (variantId, quantity = 1) => {
    if (!cart) return;
    setLoading(true);
    try {
      const updatedCart = await client.checkout.addLineItems(cart.id, [
        { variantId, quantity },
      ]);
      setCart(updatedCart);
      setCartOpen(true);
    } catch (err) {
      console.error('Add to cart failed:', err);
    }
    setLoading(false);
  }, [cart]);

  const removeFromCart = useCallback(async (lineItemId) => {
    if (!cart) return;
    setLoading(true);
    try {
      const updatedCart = await client.checkout.removeLineItems(cart.id, [lineItemId]);
      setCart(updatedCart);
    } catch (err) {
      console.error('Remove from cart failed:', err);
    }
    setLoading(false);
  }, [cart]);

  const updateQuantity = useCallback(async (lineItemId, quantity) => {
    if (!cart) return;
    setLoading(true);
    try {
      const updatedCart = await client.checkout.updateLineItems(cart.id, [
        { id: lineItemId, quantity },
      ]);
      setCart(updatedCart);
    } catch (err) {
      console.error('Update quantity failed:', err);
    }
    setLoading(false);
  }, [cart]);

  const goToCheckout = useCallback(() => {
    if (cart?.webUrl) {
      window.open(cart.webUrl, '_self');
    }
  }, [cart]);

  const cartCount = cart?.lineItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const cartTotal = cart?.subtotalPrice?.amount ? `$${parseFloat(cart.subtotalPrice.amount).toFixed(2)}` : '$0.00';

  return (
    <CartContext.Provider value={{
      cart,
      cartOpen,
      setCartOpen,
      cartCount,
      cartTotal,
      loading,
      addToCart,
      removeFromCart,
      updateQuantity,
      goToCheckout,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
