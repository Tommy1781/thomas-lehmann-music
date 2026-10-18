THOMAS LEHMANN MUSIC — WEBSITE VERSION 15
Domain: thomaslehmannmusic.com (managed via Cloudflare; not yet connected to GitHub Pages)

HOW TO PREVIEW
1. Unzip this archive completely.
2. Open index.html in Chrome, Edge, or another browser.
3. The 14 edited 45-second MP3 previews and their small album covers should work locally.
4. The two YouTube video galleries contain 6 personal videos and 8 artist collaborations. When launched locally via file://, videos open on YouTube to avoid error 153. Once the site is hosted via HTTPS, videos attempt to embed directly in the page, subject to YouTube embed permissions.

CONTACT FORM — CONNECTED TO FORMSPREE
Endpoint: https://formspree.io/f/xgaoq1wp
Form name: Thomas Lehmann Music Contact
Intended recipient: thlehmann1871@gmail.com (set in Formspree, not exposed on the website)
- The form is now configured; it posts name, email, subject and message using Formspree.
- IMPORTANT: Confirm/verify the recipient email with Formspree if it asks. This cannot be verified from the website files.
- Test after deployment on GitHub Pages: submit a short test message, verify success confirmation,
  and make sure it appears in your Gmail inbox (check spam) and Formspree dashboard.
- Formspree delivery has NOT been tested by this offline packaging step; no real message was sent.
- The Formspree endpoint is embedded in client-side website source and publicly visible;
  the recipient Gmail address is not exposed in the website HTML or JavaScript.
- Use Formspree's anti-spam protections; contact form has a simple honeypot too.
- If a visitor has JavaScript disabled, the HTML form can submit to Formspree directly.

GITHUB PAGES
- Make a public GitHub repository (GitHub Pages free hosting requires public repository on GitHub Free).
- Upload ALL CONTENTS inside this extracted folder to the repository root, not the ZIP file itself.
- Contents must include: index.html, style.css, script.js, tracks.json, assets/, covers/, music/.
- Under Settings > Pages choose Deploy from a branch; branch main, folder /(root).
- Test the generated github.io URL BEFORE connecting the custom domain.
- GitHub Pages custom domain and Cloudflare DNS setup comes later. Enable HTTPS when available.

CONTENT IN VERSION 14
- Expanded English 'About the Composer' text, based on confirmed information and broad creative descriptions; please review wording before publishing.
- Responsive contact form with validation, subject selection, status messages and a configured Formspree endpoint.
- 14 separate 45-second music excerpts and 14 matching mini-cover images.
- Six original music videos and eight collaborative video projects.
- Dark forest green and champagne gold design, with Cinzel/Lato fonts.
