# Claire Yu Personal Website

This folder contains a complete one-page personal website for GitHub Pages.

## Files

- `index.html` — all website content
- `style.css` — layout, colors, responsive design, cards, buttons, and dark mode
- `script.js` — mobile navigation, active menu highlighting, current year, and dark mode
- `cv.pdf` — add your own CV using this exact filename, or change the filename in `index.html`

## Important edits before publishing

Open `index.html` and replace:

1. `https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/` with your real LinkedIn URL.
2. `your.email@example.com` with your real email address in both locations.
3. Project links written as `href="#"` with your real GitHub repository links.
4. Example experience, project, and teaching content with your final information.

## Add your CV

Upload your resume PDF to the same GitHub repository and name it:

`cv.pdf`

The View CV button will then work automatically.

## Publish with GitHub Pages

1. Sign in to GitHub.
2. Create a new public repository. A good name is `yourusername.github.io`.
3. Upload `index.html`, `style.css`, `script.js`, and your `cv.pdf`.
4. Open the repository's **Settings**.
5. Select **Pages** in the left menu.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and the `/root` folder.
8. Click **Save**.
9. Wait a few minutes, then open `https://yourusername.github.io`.

## One-page layout

Bio, Experience, Projects, and Teaching are all on the same page. Clicking the top navigation smoothly scrolls to each section.

The Projects section uses one column, matching the Experience section.

## Hero image

The hero section uses an online Unsplash image. To use your own image:

1. Upload an image such as `hero.jpg` to the repository.
2. Open `style.css`.
3. Find `.hero`.
4. Replace the online URL with:

```css
background-image: url("hero.jpg");
```
