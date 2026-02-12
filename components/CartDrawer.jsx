'use client';
import { useCart } from './CartProvider';

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, cartCount, cartTotal, loading, removeFromCart, updateQuantity, goToCheckout } = useCart();

  if (!cartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-[9998] bg-dark/50 backdrop-blur-sm" onClick={() => setCartOpen(false)} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-[9999] w-full max-w-[400px] bg-bg shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-dark/[0.08]">
          <h3 className="font-display text-[1rem] font-bold text-dark lowercase">
            your bag <span className="text-text-light font-normal">({cartCount})</span>
          </h3>
          <button onClick={() => setCartOpen(false)} className="text-text-light hover:text-dark transition-colors text-lg">
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {(!cart?.lineItems || cart.lineItems.length === 0) ? (
            <div className="text-center py-12">
              <p className="text-text-light text-[0.85rem] lowercase">your bag is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.lineItems.map(item => (
                <div key={item.id} className="flex gap-4 py-3 border-b border-dark/[0.06]">
                  {item.variant?.image && (
                    <div className="w-20 h-24 bg-bg-alt rounded-sm overflow-hidden flex-shrink-0">
                      <img src={item.variant.image.src} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-[0.78rem] font-medium text-dark lowercase truncate">{item.title}</div>
                    {item.variant?.title !== 'Default Title' && (
                      <div className="text-[0.68rem] text-text-light lowercase">{item.variant.title}</div>
                    )}
                    <div className="text-[0.75rem] text-text-light mt-1">
                      ${parseFloat(item.variant?.price?.amount || 0).toFixed(2)}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => item.quantity > 1 ? updateQuantity(item.id, item.quantity - 1) : removeFromCart(item.id)}
                        className="w-6 h-6 flex items-center justify-center border border-dark/[0.1] text-[0.7rem] text-dark hover:border-dark transition-colors rounded-sm"
                        disabled={loading}
                      >
                        −
                      </button>
                      <span className="text-[0.72rem] font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-dark/[0.1] text-[0.7rem] text-dark hover:border-dark transition-colors rounded-sm"
                        disabled={loading}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-[0.65rem] text-text-light hover:text-accent transition-colors lowercase"
                        disabled={loading}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart?.lineItems?.length > 0 && (
          <div className="px-6 py-5 border-t border-dark/[0.08]">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-[0.78rem] text-text-light lowercase">subtotal</span>
              <span className="font-display text-[1rem] font-bold text-dark">{cartTotal}</span>
            </div>
            <button
              onClick={goToCheckout}
              disabled={loading}
              className="w-full py-3 text-[0.76rem] font-semibold tracking-wide text-white bg-dark hover:bg-accent transition-all lowercase disabled:opacity-50"
            >
              {loading ? 'loading...' : 'checkout'}
            </button>
            <p className="text-[0.6rem] text-text-light text-center mt-2 lowercase">shipping calculated at checkout</p>
          </div>
        )}
      </div>
    </>
  );
}
