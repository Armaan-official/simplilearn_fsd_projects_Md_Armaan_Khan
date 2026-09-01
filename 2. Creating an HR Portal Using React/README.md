# HR Portal

A React front-end HR management application with role-based access for HR and Employees, backed by a JSON Server mock API.

## Features

- Persistent navbar (HR Portal / Employee Portal / Login) shown on every page
- Separate login flows for HR and Employees, with protected, role-based routing
- ID-verified employee registration: HR creates a profile (name, email, department, designation) which generates an employee ID; the employee verifies with that ID to complete registration
- **HR Portal**
  - Dashboard — summary cards and charts
  - Employee Directory — full CRUD, search, sort by name, calendar widget
  - Leave Management — view all leave requests, search, sort by date
- **Employee Portal**
  - Home — landing page showing the logged-in employee's name
  - My Profile — the employee's own profile details
  - My Leaves — apply for leave, view leave history
- Role-specific sidebars (hover-expand on desktop, toggle drawer on mobile)
- Fully responsive layout throughout

## Tech Stack

- React + Vite
- Redux Toolkit (`createSlice`, `createAsyncThunk`)
- React Router
- Axios
- JSON Server (mock backend)
- Tailwind CSS
- react-icons, react-calendar, date-fns, recharts

## Project Structure

```
src/
├── components/
│   ├── employee-nested-components/
│   │   ├── EmployeePortal.jsx
│   │   ├── EmployeeSidebar.jsx
│   │   └── signUPform.jsx
│   ├── hr-nested-components/
│   │   ├── AddEmployee.jsx
│   │   ├── Calendar.jsx
│   │   ├── CardsForDirectory.jsx
│   │   ├── DashboardCharts.jsx
│   │   ├── DashboardDummyData.js
│   │   ├── EditEmployee.jsx
│   │   ├── EmployeeList.jsx
│   │   ├── HRPortal.jsx
│   │   ├── HRSidebar.jsx
│   │   └── Listitem.jsx
│   ├── LoginEmployee.jsx
│   ├── LoginHR.jsx
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
├── images/
├── pages/
│   ├── Dashboard.jsx
│   ├── EmployeeDirectory.jsx
│   ├── EmployeeHome.jsx
│   ├── EmployeeProfile.jsx
│   ├── LeaveApplication.jsx
│   ├── LeaveManagement.jsx
│   ├── Login.jsx
│   └── PageNotFound.jsx
├── slices/
│   └── EmployeeSlice.jsx
├── store/
│   └── AppStore.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```terminal
npm install
```

### Running the project

The frontend and the mock backend run as two separate processes — start both.

**1. Start the JSON Server backend**

```terminal
npm run dev-server
```

This serves `db.json` at `http://localhost:3000`. Employee data is available at:

```
http://localhost:3000/employees
```

**2. Start the frontend**

```terminal
npm run dev
```

## Screenshots


### Login

![Login](./screenshots/1.png)

### HR Portal

#### Dashboard
![HR Dashboard (1)](./screenshots/3.png)
![HR Dashboard (2)](./screenshots/4.png)

#### Employee Directory
![Employee Directory](./screenshots/13.png)

#### Leave Management
![Leave Management](./screenshots/27.png)

### Employee Portal

### Registration

![Employee Registration](./screenshots/19.png)

#### Home
![Employee Home](./screenshots/20.png)

#### My Profile
![Employee Profile](./screenshots/23.png)

#### My Leaves
![Leave Application (1)](./screenshots/25.png)
![Leave Application (2)](./screenshots/26.png)


## License

Not applicable.
