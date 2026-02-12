# fknlej

clothing brand website — est. 2023

## quick start

```bash
npm install
npm run dev
```

open [http://localhost:3000](http://localhost:3000)

## deploy to vercel

1. push this repo to github
2. go to [vercel.com](https://vercel.com) → new project → import repo
3. vercel auto-detects next.js — just click deploy
4. add custom domain: `fknlej.com`

## project structure

```
├── app/
│   ├── layout.jsx          # root layout (nav + footer)
│   ├── page.jsx             # home page
│   ├── globals.css          # tailwind + global styles
│   ├── catalog/page.jsx     # full product catalog
│   ├── bestsellers/page.jsx # best sellers
│   ├── about/page.jsx       # brand story
│   ├── jams/page.jsx        # spotify playlists
│   └── philanthropy/page.jsx # giving back
├── components/
│   ├── Navbar.jsx           # fixed nav + mobile menu
│   ├── Footer.jsx           # footer + social icons (ig, tiktok, fb, x, pinterest, yt)
│   ├── ProductCard.jsx      # product card with image carousel
│   ├── ProductGrid.jsx      # grid wrapper with lightbox state
│   ├── Lightbox.jsx         # fullscreen lightbox with keyboard nav
│   ├── PageHero.jsx         # page hero with parallax elements
│   ├── RevealOnScroll.jsx   # scroll-triggered animations
│   ├── JamCard.jsx          # spotify playlist card
│   └── EmailCTA.jsx         # email signup band (ready for resend)
├── lib/
│   └── data.js              # all product data, images, jams, philanthropy
├── public/
│   └── images/              # put product photography here
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## features

- next.js 14 app router
- tailwind css with custom brand tokens
- product image carousel (4 images per product)
- fullscreen lightbox with arrow keys + escape
- parallax scroll effects on page heroes
- scroll-triggered reveal animations
- responsive mobile-first design
- all lowercase typography

## integrations (ready to connect)

- **shopify**: add shopify buy sdk or storefront api for cart/checkout
- **spotify**: swap placeholder urls in `lib/data.js` with real playlist links
- **resend**: email form in `components/EmailCTA.jsx` has TODO for api route
- **analytics**: add vercel analytics or google analytics in layout

## stock images

currently using unsplash stock photos. to swap with real product photography:
1. add images to `public/images/`
2. update image arrays in `lib/data.js`
3. change `img` tags to next/image `<Image>` components for optimization

## stack

- next.js 14
- react 18
- tailwind css 3.4
- no other dependencies
