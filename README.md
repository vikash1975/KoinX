# KoinX Tax Loss Harvesting Assignment

## About the Project

This project is a simple implementation of a Tax Loss Harvesting tool using React.
The goal was to build an interface where users can see their capital gains and update them by selecting different holdings.

The UI is inspired from the given Figma design and I tried to keep it as close as possible.

---

## What I Built

* A dashboard with two sections:

  * Pre Harvesting
  * After Harvesting
* A table showing all holdings
* Checkbox selection for each asset
* Real-time update of gains when assets are selected
* Tax saving message when applicable

---

## Tech Used

* React.js
* Tailwind CSS
* JavaScript

---

## How it Works

Initially, capital gains data is loaded from a mock API.

When a user selects any asset:

* If gain is positive → it is added to profits
* If gain is negative → it is added to losses

Based on this, updated gains are calculated and shown in the "After Harvesting" card.

---

## Setup Instructions

1. Clone the repo

```bash
git clone https://github.com/your-username/KoinX.git
cd KoinX
```

2. Install dependencies

```bash
npm install
```

3. Run the project

```bash
npm start
```

---

## Screenshots

(Add screenshots here)

---

## Assumptions

* Used mock data instead of real APIs
* Values are rounded for display
* Focus was mainly on logic and UI, not backend

---

## Things I Could Improve

* Better UI polish to match Figma exactly
* Add loading states
* Improve mobile responsiveness

---

## Author

Vikash Pal
