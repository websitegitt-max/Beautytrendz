# ATELIER ÉLAN — Luxury Unisex Salon Website

A production-grade, architectural unisex salon website crafted with bespoke typography, zero-price editorial services (Men's & Women's collections), a 3-frame Master Stylists showcase, interactive reservation modals, and a faithful reproduction of the Google Maps UI in Andrahalli, Bengaluru.

---

## 🚀 How to Fix the GitHub 404 Error & Go Live in 60 Seconds

GitHub Pages shows a **404 error** when it can't find `index.html` at the root of the repository branch. Follow this instant fix:

### Method A: Direct Upload (No Terminal / No Build Required)
1. In your GitHub repository, make sure the files are extracted **directly at the root**.
   - ✅ Correct: `your-repo/index.html`
   - ❌ Wrong: `your-repo/atelier-elan/index.html` (If you upload the extracted parent folder, move the files out to the root!)
2. Click **Settings** (tab at the top of your GitHub repository).
3. In the left menu, click **Pages**.
4. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or `master`)
   - **Folder**: `/(root)`
5. Click **Save**.
6. Wait 60–90 seconds. Refresh your GitHub Pages link (e.g. `https://<username>.github.io/<repo-name>/`).
7. Hard-refresh your browser (`Ctrl + F5` on Windows or `Cmd + Shift + R` on Mac). Your website will load perfectly!

---

### Method B: Git Command Line (Recommended for Developers)
```bash
# 1. Unzip the project folder and navigate inside
cd atelier-elan-salon

# 2. Initialize git repository
git init
git add .
git commit -m "Initial commit of Atelier Elan salon website"

# 3. Rename branch to main
git branch -M main

# 4. Link to your GitHub repository
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git

# 5. Push to GitHub
git push -u origin main
```

---

## 💻 Local Development (Optional)
If you want to run the project locally with hot-reloading:

```bash
# Install dependencies
npm install

# Run Vite dev server
npm run dev

# Build for production
npm run build
```

---

## 🎨 Design & Feature Highlights
1. **Zero Prices & Small Photo Thumbnails**:
   - Strict adherence to the requested format: clean service titles, small photo previews, rich descriptions, and reservation buttons without any pricing markers or menus.
2. **Dedicated Women's & Men's Collections**:
   - Easy tabbed switching between Haute Coiffure / French Balayage and Executive Barbering / Straight-Razor Grooming.
3. **3-Frame Master Stylists Showcase**:
   - Highlighting Marcus Vance (*Creative Director*), Maya Rao (*Master Colorist*), and Aryan Kapoor (*Master Barber*) with direct booking buttons.
4. **Exact Google Maps Integration**:
   - Centered on: `110, Andrahalli Main Rd, Lingadeeranhalli, Syndicate Bank Layout, Bengaluru, Karnataka 560091`.
   - Floating white info card with **Open in Maps** button.
   - High-contrast floating bottom dark bar with pin badge and lime **GET DIRECTIONS** action button.
