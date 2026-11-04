# VAL — Jonas Valdellon Personal Portfolio

A responsive, single-page portfolio branded as VAL and made with HTML, CSS, and vanilla JavaScript. It includes a flip-style profile ID card, orbit effects, a live portrait scan animation, responsive navigation, scroll reveals, and clickable project screenshot galleries.

## Project files

- `index.html` — page content and structure
- `style.css` — layout, colors, responsive design, and animations
- `script.js` — card flip, mobile navigation, scroll reveal, and project lightboxes
- `assets/` — your portrait and supplied PATAG / ResQNest screenshots

## Publish to GitHub Pages

This project is prepared for `https://github.com/ValMarco-Org47/val-portfolio`.

1. Extract this ZIP file on your computer.
2. Open a terminal in the folder where you want the repository copied, then run:

   ```bash
   git clone https://github.com/ValMarco-Org47/val-portfolio.git
   ```

3. Open the newly cloned `val-portfolio` folder in File Explorer. Copy **all the contents** of the extracted portfolio folder (`index.html`, `style.css`, `script.js`, `README.md`, and `assets`) into the cloned `val-portfolio` folder. Allow `README.md` to be replaced.
4. Open the cloned `val-portfolio` folder in VS Code. Open **Terminal → New Terminal**, then run:

   ```bash
   git add .
   git commit -m "Add personal portfolio website"
   git push origin main
   ```

5. Open the repository on GitHub: `https://github.com/ValMarco-Org47/val-portfolio`.
6. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch **main** and folder **/(root)**, then click **Save**.
8. After GitHub Pages finishes deploying, your site should be available at:

   `https://valmarco-org47.github.io/val-portfolio/`

## Included image assets

- `jonas-profile.webp` — your profile portrait
- `patag-admin-dashboard.webp` — PATAG LGU overview
- `patag-pothole-map.webp` — PATAG pothole map
- `patag-citizen-signin.webp` — PATAG citizen sign-in
- `resqnest-admin-dashboard.webp` — ResQNest administrator dashboard
- `resqnest-donation-tracking.webp` — ResQNest donation tracking
- `resqnest-homepage.webp` — ResQNest landing page
- `resqnest-login.webp` — ResQNest login page

The project galleries use the supplied screenshots and open a larger image viewer when selected.

## Customization

- Content: `index.html`
- Colors, layout, and animations: `style.css`
- Interactions: `script.js`
- Images: replace files in `assets/` and keep the same filenames, or update the image paths in `index.html`.

No Node.js, npm, or framework is required.

## Before sharing publicly

Check that the email address in `index.html` is correct. It currently matches the address supplied for the portfolio: `jonasmarcofvaldellon@gmai.com`.
