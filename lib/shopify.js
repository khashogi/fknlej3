import Client from 'shopify-buy';

/*
 * ═══ SHOPIFY SETUP ═══
 * 
 * To connect your Shopify store:
 * 
 * 1. Go to your Shopify admin → Settings → Apps and sales channels
 * 2. Click "Develop apps" → Create an app
 * 3. Configure Storefront API scopes:
 *    - unauthenticated_read_product_listings
 *    - unauthenticated_read_checkouts
 *    - unauthenticated_write_checkouts
 * 4. Install the app and copy your Storefront access token
 * 5. Replace the values below with your store details
 * 
 * For local dev, you can also use .env.local:
 *   NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
 *   NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your-token
 */

const client = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'your-store.myshopify.com',
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN || 'your-storefront-access-token',
});

export default client;
