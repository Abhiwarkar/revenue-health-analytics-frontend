# 📊 Revenue Health Analytics Dashboard (Frontend)

Modern Executive Dashboard built using **React.js** to visualize enterprise revenue KPIs exposed via FastAPI backend.

This frontend consumes REST APIs and displays:

- 📈 Monthly Revenue Trend
- 📊 Revenue Leakage %
- ⚠ Customer Concentration Risk
- 🚦 Executive Revenue Health Status

---

## 🚀 Live Architecture

Oracle Database
↓
SQL Analytics Layer
↓
FastAPI Backend
↓
React Frontend (This Project)
↓
Vercel Deployment


---

## 🧠 Features

✔ Dynamic Revenue Charts  
✔ API-driven Data Rendering  
✔ Executive KPI Cards  
✔ Health Status Indicator (HEALTHY / AT RISK)  
✔ Clean, Modular Component Structure  

---

## 🔌 API Integration

This dashboard connects to:



GET /revenue/monthly
GET /dashboard/health


Example API Response:

```json
{
  "year_month": "2024-03",
  "total_revenue": 2200,
  "mom_growth_pct": -45,
  "leakage_pct": 57.69,
  "top_customer_pct": 100,
  "status": "AT RISK"
}

🏗 Project Structure
revenue-health-analytics-frontend/
│
├── src/
│   ├── components/
│   ├── services/
│   ├── App.js
│
├── public/
├── package.json
└── README.md

⚙ Tech Stack

React.js

Axios

Recharts

CSS / Tailwind

REST API Integration

▶ Getting Started
1️⃣ Install Dependencies
npm install

2️⃣ Start Development Server
npm start


App runs on:

http://localhos5173
🎯 Skills Demonstrated

✔ Frontend API Integration
✔ Dashboard UI Development
✔ Data Visualization
✔ React Hooks
✔ RESTful Architecture
✔ Full-Stack Integration

👨‍💻 Author

Abhiwarkar

📌 Purpose

This dashboard simulates an executive revenue monitoring system used in enterprise environments for KPI tracking and risk management.
