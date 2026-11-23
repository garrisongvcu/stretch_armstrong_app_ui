# Stretch Armstrong Client UI (`stretch_armstrong_app_ui`)

> **Client Application Frontend** for Team Stretch Armstrong's system development project in INFO 530.

---

## 📋 Project Overview

This application serves as the mobile-responsive client interface for a private gym centered on science-driven, trainer-monitored athletic workouts. 

The primary business objective is to eliminate traditional paper-based workout binders and manual caddy logs by providing:
1. **Point-of-Use Workout Tracking:** Digital entry forms replacing physical sheets for logging sets, reps, and weights.
2. **Pre-Workout Biometric Check-In:** Collection of Heart Rate Variability (HRV) and recovery scores to dynamically trigger standard vs. low-recovery exercise variations.
3. **Historical Performance Review:** Direct access to past training data for both athletes and trainers.

---

## 🏗️ Tech Stack & Architecture

In alignment with course guidance for introductory graduate development:
* **UI Framework:** [React.js](https://react.dev) (Standard Function Components & Hooks: `useState`, `useEffect`)
* **Styling:** [Tailwind CSS](https://tailwindcss.com) (Utility-first styling replacing complex custom CSS)
* **Client-Side Routing:** [React Router](https://reactrouter.com) (`BrowserRouter`, `Routes`, `Route`)
* **Bundler & Tooling:** [Parcel](https://parceljs.org) for zero-config bundling and rapid local hot-reloading
* **Runtime:** Node.js (`v18+` or `v20+`) and `npm`

---

## 🚀 Repository Consolidation Roadmap (Upcoming Iteration)

> ⚠️ **Important Notice on Monorepo Migration (Sprint 2 / US-2.1):**
> 
> Currently, the frontend client (`stretch_armstrong_app_ui`) and the backend API (`stretch_armstrong_app_services`) exist as isolated repositories. To streamline pull requests, eliminate cross-repo branch drift, and resolve merge conflicts, **the services repository will be merged into this repository in an upcoming commit/iteration**.
> 
> ### Target Project Layout
> Once consolidated, the root repository will follow this structure:
> ```text
> stretch-armstrong-system/
> ├── client/                  # Frontend React + Tailwind application (this code)
> │   ├── index.html           # HTML entry point (references src/index.jsx)
> │   ├── package.json
> │   └── src/
> │       ├── components/      # UI components (RecoveryCheckIn, WorkoutSheet, etc.)
> │       └── index.jsx        # Root React hydration
> ├── server/                  # Backend Node / Express REST API (from services repo)
> │   ├── config/db.js         # MySQL pool connection
> │   ├── routes/              # Route handlers (/api/workouts, /api/clients)
> │   ├── server.js            # Express server entry point
> │   └── package.json
> └── db/                      # Standalone .sql schema files (dump.sql conventions)
> ```
> *Note: Outstanding Sprint 1 PRs will be integrated prior to finalizing the folder restructuring.*

---

## 🛠️ Getting Started (Local Development)

### Prerequisites
* [Node.js](https://nodejs.org) installed on your machine (`v18.x` or higher recommended).
* `npm` package manager (included with Node).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-org-or-username>/stretch_armstrong_app_ui.git
   cd stretch_armstrong_app_ui
