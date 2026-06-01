# 🦦 Ferret Breeding Tracker MVP 2

A React-based frontend application designed to manage ferret breeding records, pairings, and litter history. This project builds upon MVP 1 (Flask + MySQL backend) and demonstrates modern React development techniques including state management, filtering, sorting, and relational data display.

---

## 📋 Project Overview

The Ferret Breeding Tracker helps breeders organize and explore breeding program data through an intuitive user interface.

Users can:

* 🔍 Search ferrets by name
* 🏷️ Filter ferrets by status
* 📊 Sort ferrets by name or age
* 🦦 View individual ferret records
* ❤️ View breeding pair history
* 🍼 View litter history

---

## 🚀 Technologies Used

### Frontend

* ⚛️ React
* 🎨 CSS3
* 📜 JavaScript (ES6+)
* 🧩 Component-Based Architecture

### Backend (MVP 1)

* 🐍 Python
* 🌶️ Flask
* 🗄️ MySQL
* 🔗 SQLAlchemy ORM

---

## ✨ Features

### 📊 Dashboard

* Total Ferrets
* Total Pairings
* Total Litters
* Active Ferrets
* Retired Ferrets
* Rehomed Ferrets
* Inactive Ferrets
* Deceased Ferrets

### 🦦 Ferret Management

* Display ferret records in responsive cards
* Search functionality
* Status filtering
* Name sorting (A-Z / Z-A)
* Age sorting (Oldest → Youngest / Youngest → Oldest)

### 📖 Ferret Detail View

Clicking a ferret card displays:

* Name
* Status
* Sex
* Birth Date
* Color
* Pattern
* Pairing History
* Litter History

### 🔄 React State Management

Implemented using:

* useState
* Props
* Event Handlers
* Conditional Rendering
* Array Filtering
* Array Sorting
* Parent → Child Communication
* Child → Parent Callbacks

---

## 🖼️ Screenshots

### Dashboard
<img width="1877" height="748" alt="Screenshot 2026-06-01 152458" src="https://github.com/user-attachments/assets/0b63c450-d0bf-4734-a8f0-464843ec04af" />

### Ferret List
<img width="1876" height="855" alt="Screenshot 2026-06-01 152519" src="https://github.com/user-attachments/assets/aff498f5-f9ba-486a-bef7-fc3a257c736f" />

### Search, Filter, and Sort Controls
<img width="1876" height="845" alt="Screenshot 2026-06-01 152701" src="https://github.com/user-attachments/assets/b89c99a1-e8d6-4340-9607-37e6feb8e840" />

### Ferret Detail View
<img width="1874" height="847" alt="Screenshot 2026-06-01 152608" src="https://github.com/user-attachments/assets/42f5689a-1461-451c-833b-fd40ea5cb288" />

### Pairings List
<img width="1877" height="794" alt="Screenshot 2026-06-01 152729" src="https://github.com/user-attachments/assets/8ac62521-0858-401b-8b06-55a09727c5fe" />

### Litters List
<img width="1875" height="678" alt="Screenshot 2026-06-01 152742" src="https://github.com/user-attachments/assets/0f9c655a-8564-4913-9ed3-125051bf4660" />

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── DashboardStat.jsx
│   ├── FerretCard.jsx
│   └── FerretDetail.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Ferrets.jsx
│   ├── Pairings.jsx
│   └── Litters.jsx
│
├── data/
│   └── seedData.js
│
├── App.jsx
└── main.jsx
```

## 🎯 Learning Objectives

This project was built to strengthen skills in:

* React Fundamentals
* State Management
* Component Architecture
* UI Development
* Data Relationships
* Full-Stack Application Design

The long-term goal is to evolve this project into a complete breeding management platform with pedigree tracking, breeding analytics, litter management, and genetic analysis tools.

---

## 🔮 Planned Features

### MVP 3

* 📈 Breeding Analytics
* 🧬 Pedigree Tracking
* 🧮 Inbreeding Coefficient Calculations
* 🎨 Color & Pattern Outcome Analysis
* 📊 Breeding Program Statistics
* 📄 Printable Pedigrees

### Future Integration

* 🔗 Flask API Integration
* 🗄️ MySQL Database Connectivity
* 🔐 Authentication & User Accounts
* ☁️ Cloud Deployment

---

## 💡 Lessons Learned

Some of the most valuable lessons from this project included:

* Understanding React component composition
* Managing state with useState
* Building reusable UI components
* Passing data through props
* Implementing parent-child communication
* Creating dynamic filtering and sorting systems
* Structuring applications around relational data
* Designing user interfaces around real-world breeder workflows

---

## 👩‍💻 Author

Erin

Software Engineer | Ferret Breeder | Full-Stack Developer in Training

Building practical software solutions for animal breeding management and genetic record keeping.

## Planned Features

- Pairing management
- Litter tracking
- Dashboard statistics
- Flask API integration
- MySQL backend connectivity

## Status

In active development.
