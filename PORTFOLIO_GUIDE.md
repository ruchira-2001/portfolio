# Ruchira Perera — Portfolio Website Guide

---

## 🌐 Your Live Website

```
https://portfolio-gold-eta-h81zttj02k.vercel.app
```

Share this link on your LinkedIn, CV, emails, and applications.

---

## 💻 Viewing Locally (Localhost)

Use this when you want to preview changes on your own computer.

### Step 1 — Open PowerShell and go to your project folder

```powershell
cd "C:\Users\Ruchira Perera\Portfolio - Ruchira Perera\portfolio"
```

### Step 2 — Start the local server

```powershell
npm run dev
```

### Step 3 — Open your browser and go to

```
http://localhost:3000
```

### To stop the server

Press `Ctrl + C` in the terminal.

> The terminal window must stay open while viewing locally.
> Closing the terminal stops the local server — but your live Vercel site keeps running 24/7 regardless.

---

## ✏️ How to Update Your Content

All your website content is stored in **one single file**:

```
C:\Users\Ruchira Perera\Portfolio - Ruchira Perera\portfolio\src\data\personal.ts
```

Open this file in any code editor (VS Code recommended) and edit:

| What you want to change | Where in the file |
|---|---|
| Publications | `publications` array |
| Projects | `projects` array |
| Skills | `skills` array |
| SMART Goals | `smartGoals` object |
| Education | `education` array |
| Certifications | `certifications` array |
| Leadership & Achievements | `leadership` array |
| Your name, email, links | `personal` object (top of file) |

---

## 🚀 Publishing Updates to Your Live Site

After making any changes, run these commands in order:

### Step 1 — Go to your project folder

```powershell
cd "C:\Users\Ruchira Perera\Portfolio - Ruchira Perera\portfolio"
```

### Step 2 — Stage your changes

```powershell
git add .
```

### Step 3 — Save your changes with a message

```powershell
git commit -m "Describe what you changed here"
```

For example:
```powershell
git commit -m "Added new publication"
```

### Step 4 — Push to GitHub (Vercel auto-updates in ~1 minute)

```powershell
git push
```

That's it! Your live site updates automatically. ✅

---

## 📄 Adding or Updating Your Resume PDF

1. Name your file exactly: `resume.pdf`
2. Place it in this folder:
   ```
   C:\Users\Ruchira Perera\Portfolio - Ruchira Perera\portfolio\public\resume.pdf
   ```
3. Replace the old file if one already exists
4. Then push the update to GitHub:
   ```powershell
   git add .
   git commit -m "Updated resume PDF"
   git push
   ```

---

## 📁 Project Folder Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile-formal.png       ← Your headshot (Hero section)
│   │   └── smartecobin-demo.jpg     ← Smart Eco-Bin project photo
│   └── resume.pdf                   ← Your downloadable CV
├── src/
│   ├── app/
│   │   ├── layout.tsx               ← SEO metadata & fonts
│   │   ├── page.tsx                 ← Assembles all sections
│   │   └── globals.css              ← Global styles
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Research.tsx
│   │   ├── Projects.tsx
│   │   ├── SmartGoals.tsx
│   │   ├── Education.tsx
│   │   ├── Leadership.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── personal.ts              ← ⭐ ALL YOUR CONTENT IS HERE
└── tailwind.config.ts               ← Design colours & tokens
```

---

## 🔗 Important Links

| Resource | Link |
|---|---|
| Live Portfolio | https://portfolio-gold-eta-h81zttj02k.vercel.app |
| GitHub Repository | https://github.com/ruchira-2001/portfolio |
| Vercel Dashboard | https://vercel.com/dashboard |
| LinkedIn | https://www.linkedin.com/in/ruchira-perera-80a200280 |

---

## 🛠️ Tech Stack Used

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS v4 | Styling & design tokens |
| Framer Motion | Animations & transitions |
| Lucide React | Icons |
| Vercel | Free hosting & deployment |

---

## ❓ Quick Troubleshooting

**"npm run dev" doesn't work**
→ Make sure you `cd` into the portfolio folder first

**Changes not showing on live site**
→ Make sure you ran `git add .` → `git commit` → `git push`

**Live site showing old version**
→ Wait 1–2 minutes after pushing — Vercel takes a moment to redeploy

**Resume not downloading**
→ Make sure the file is named exactly `resume.pdf` and placed in the `public/` folder

---

*Portfolio built with Next.js · Tailwind CSS · Framer Motion · Hosted on Vercel*
