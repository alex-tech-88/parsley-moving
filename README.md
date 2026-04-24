# Parsley Moving

Website for a professional moving company in the Bay Area.
Built with React 19, Vite 8, and Tailwind CSS 4.

---

## Tech Stack

- **React 19** — UI components
- **Vite 8** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling
- **ESLint 9** — code linting

---

## Getting Started

### Requirements

- Node.js **18+**
- npm **9+**

### Install dependencies

```bash
npm install
Run dev server
bash
npm run dev
Opens at http://localhost:5173

Build for production
bash
npm run build
Preview production build
bash
npm run preview
Linting
bash
# Check for errors
npm run lint

# Auto-fix errors
npm run lint:fix


Project Structure
text
src/
├── assets/          # Images and static files (logos, icons)
├── components/
│   ├── layout/      # Navbar and layout wrappers
│   ├── sections/    # Page sections (Hero, etc.)
│   └── ui/          # Reusable UI components (ContactForm, etc.)
├── context/         # ThemeContext and useTheme hook
├── theme/           # Light/dark theme tokens
├── constants.js     # Shared constants
├── App.jsx
└── main.jsx
public/              # Favicons, web manifest, SVG icons
scripts/
└── generate-og-pages.js  # Pre-renders per-route index.html for OG meta tags


Path Aliases
Configured in vite.config.js:

Alias	Path
@	src/
@components	src/components/
@context	src/context/
@theme	src/theme/
@assets	src/assets/
@hooks	src/hooks/


Theme
The app supports light and dark mode.
The selected theme is saved in localStorage under the key parsley-theme and persists between sessions.
