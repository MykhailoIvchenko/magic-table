# React + TypeScript + Vite — Interactive Table

This project is a **React + TypeScript** application bootstrapped with **Vite**.  
It implements an interactive table with dynamic calculations, highlighting, and row management features.

---

## 🚀 Features

- **Matrix generation**:

  - Creates an `M x N` table with random 3-digit numbers in each cell.
  - `M` – number of rows (`0–100`)
  - `N` – number of columns (`0–100`)
  - `X` – number of nearest cells to highlight (validated based on matrix size).

- **Table view**:

  - Each row displays generated cell values.
  - An additional **Sum column** shows row totals.
  - An additional **60th percentile row** shows column statistics.

- **Interactions**:
  - **Increment cell**: click to increase a cell’s value by `+1`, automatically updating sums and percentiles.
  - **Nearest cells highlight**: hover over a cell → highlights `X` nearest values across the table.
  - **Row percentage mode**: hover over a row’s Sum cell → each value is replaced with its % of the row total, with a **heatmap background** (based on % of max in the row).
  - **Row management**:
    - Remove any row (table updates automatically).
    - Add a new row at the end.

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite** (development/build)
- **React Context API** (state management)
- **CSS Modules** for stylingcss-in-js\*\*

---

## 📦 Installation & Usage

Clone the repo and install dependencies:

```bash
git clone https://github.com/MykhailoIvchenko/magic-table.git
cd magic-table
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Deployment

The app is deployed to **GitHub Pages**

## 📖 Summary

This project provides an interactive table with:

- random number generation,
- dynamic calculations,
- interactive cell operations,
- row add/remove,
- highlighting and heatmaps.

Deployed build is available at: **[Live Demo Link](https://MykhailoIvchenko.github.io/magic-table/)**
