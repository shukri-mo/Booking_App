# 🏨 Hotel Booking Management App

A **full-stack hotel management system** built with **Supabase** for internal use by hotel staff. The application allows users to **manage room bookings, check-ins, check-outs**, and handle guest information securely.

---

## ✨ Features

- 🔐 **Authentication**
  - Only registered users can log in.
  - Unauthenticated users are restricted from accessing booking and guest data.

- 🛏️ **Cabins (Rooms) Management**
  - View and manage available rooms.
  - Includes room details such as price, capacity, and amenities.

- 👤 **Guest Management**
  - Store guest information including name, contact details, and special requests.

- 📅 **Booking Management**
  - View and manage bookings.
  - Track check-in/check-out dates, booking status, and payments.

- ⚙️ **Settings Panel**
  - Configure app-wide settings.
 
  
## 📊 Dashboard

The app includes an interactive dashboard powered by **ECharts** to display:

- Booking trends over time
- Occupancy analytics
- Guest statistics

---

## 🛠 Tech Stack

- **Frontend**: React
- **Backend & Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Hosting**: Your preferred hosting service (e.g., Vercel, Netlify)

---

## 🔐 Authentication

- **Login/Logout functionality** is provided using Supabase Auth.
- Only authenticated users (hotel staff) can access the dashboard and manage data.
- Users must be **pre-registered** within the system.

---

## 📂 Database Tables

| Table      | Purpose                                 |
|------------|-----------------------------------------|
| `cabins`   | Stores information about each room      |
| `guests`   | Stores guest profiles and details       |
| `bookings` | Tracks reservations, dates, and status  |
| `settings` | Contains configurable app-wide settings |
| `users`    | Handles authentication and access       |

---

## 👥 Intended Users

- Hotel reception staff
- Hotel managers or admin users

---

## 📚 Lessons Learned

- 🔐 Gained hands-on experience with **authentication and authorization** using Supabase
- ⚡ Improved skills in building **full-stack applications**
- 🧠 Learned how to structure and manage **relational data** across multiple tables (cabins, guests, bookings, settings)
- 📊 Integrated **ECharts** to create a dynamic and insightful dashboard
- 🧩 Designed UI logic to control access to sensitive data based on user authentication
- 🔄 Built real-time features like booking updates and check-in/check-out tracking
- 🔧 Practiced maintaining clean project structure and code organization


---


## 🚀 Getting Started

1. Clone this repository.
2. Set up a Supabase project and link your credentials.
3. Add your environment variables (`.env.local` or `.env`).
4. Run the development server:

```bash
npm install
npm run dev
