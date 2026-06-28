# Little Manna Landing Page

Responsive one-page Nuxt 2 landing site for Little Manna, an in-home meal prep service for babies and toddlers.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Edit the main content

Most repeatable content is in [pages/index.vue](pages/index.vue):

- Navigation: `navItems`
- Difference cards: `differenceCards`
- How it works: `steps`
- Packages and prices: `packages`
- Example meals: `meals`
- FAQ: `faqs`

## Replace the logo

`static/images/little-manna-logo-full.png`

This full Little Manna logo is used in the loading screen, header, about section, footer, and favicon source. Replace it using the same filename, or update the image paths in [pages/index.vue](pages/index.vue) and [nuxt.config.js](nuxt.config.js).

## Replace the Google Drive hero video

The hero video source is set in [pages/index.vue](pages/index.vue):

```js
googleDriveVideoSourceUrl: '/videos/little-manna-hero.mp4'
```

The current video file lives at `static/videos/little-manna-hero.mp4`. To replace it from Google Drive:

1. Upload the video to Google Drive.
2. Set sharing to `Anyone with the link can view`.
3. Copy the file ID from the share link.
4. Download it into `static/videos/little-manna-hero.mp4`, or use this source format if your Drive file streams directly: `https://drive.google.com/uc?export=download&id=FILE_ID`.

The page uses a native `<video>` element with `autoplay`, `muted`, `loop`, and `playsinline`, with no controls.

## Replace the form URL

The enquiry form currently uses a placeholder action:

```html
action="https://example.com/formspree-placeholder"
```

Replace it with your Formspree endpoint. If you prefer Typeform, replace the form block in the `#enquire` section with your Typeform embed script/container. Comments are included in the code where the embed should go.

## Update Instagram and email

Footer links are near the bottom of [pages/index.vue](pages/index.vue):

- Instagram: `https://instagram.com/littlemanna`
- Email: `hello@littlemanna.co.uk`

Replace them with the live links when ready.

## Hero image

The previous placeholder hero image is still at `static/images/little-manna-hero.png`, but the current minimal layout uses the logo and Google Drive video instead.

## Favicon

The favicon uses `static/images/little-manna-favicon.png` via [nuxt.config.js](nuxt.config.js). Replace that image file to update the browser tab icon.
