# Fun – React Tutorial Project

A small React tutorial project built with [Parcel](https://parceljs.org/) for bundling and [json-server](https://github.com/typicode/json-server) for a mock REST API.

---

## 🚀 Features

- ⚛️ React 18 with React Router DOM
- ⚡ Bundled with Parcel (zero-config)
- 📡 Mock API served by `json-server` (`db.json`)
- 🔄 Concurrent dev setup (`npm run dev`) runs frontend + backend together
- 🧪 Jest testing ready (scripts included)

---

## 📦 Getting Started

### 1. Clone the repo

```bash
TODO: FILL IN REAL STUFF ONCE IT'S ON GIT HUB
git clone <your-repo-url>
cd fun
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development

Run both **Parcel** and **json-server** at once:

```bash
npm run dev
```

- Frontend: [http://localhost:1234](http://localhost:1234)
- API: [http://localhost:4000/restaurants](http://localhost:4000/restaurants)

Stop both with **CTRL + C**.  
You’ll see:

```
👋 Shutting down servers...
```

---

## 🔨 Available Scripts

- **`npm run start`** → Start Parcel dev server (frontend only)
- **`npm run api`** → Start mock API server on port `4000`
- **`npm run dev`** → Run frontend + API together with `concurrently`
- **`npm run build`** → Build production bundle with Parcel
- **`npm test`** → Run Jest tests

---

## 🗄️ Mock API

The mock API is powered by `json-server` and serves data from **`db.json`**.

- `GET /restaurants` → list of all restaurants
- `GET /restaurants/:id` → details (including fake menu) for a single restaurant

---

## 👩‍💻 Author

**Vanessa Keeton**  
License: ISC
