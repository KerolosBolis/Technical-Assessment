Technical Assessment

A professional Node.js REST API built with Express, featuring a modular MVC architecture, ES6 Modules, and a MySQL database backend.

## 📂 Project Structure
This project follows a clean Separation of Concerns (SoC) using the **Model-View-Controller** pattern.

TechnicalAssessment/
├── src/
│   ├── controllers/    # Request handling & Logic
│   ├── routes/         # API Endpoint definitions
│   ├── utils/          # SQL File Loader & helpers
│   ├── scripts.sql     # External SQL queries
│   ├── db.js           # Database connection pool
│   └── index.js        # App entry point
├── schema/             # Database creation scripts
├── .env                # Private credentials (ignored by Git)
├── .gitignore          # Files excluded from Git
└── package.json        # Project dependencies

Prerequisites
Node.js (v22.x or higher recommended for native watch mode)
MySQL Server
Getting Started
1. Clone & Install Bash git clone <your-repo-link>
cd DatabaseProject
npm install
2. Database SetupLog into your MySQL instance.Run the SQL code found in schema/ to create the tables.(Optional) Run the data_seeds scripts to add dummy data.
3. Environment VariablesCreate a .env file in the root and add your details:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=your_db_name
PORT=3000
4. Run the ProjectDevelopment (with native watch mode):
 npm run dev
API Endpoints
The API uses the /api prefix for all routes:
MethodEndpointDescription:
GET/api/employeesReturns all employees with their department names.
GET/api/customersReturns customers with their order history and total costs.
GET/api/ordersReturns a list of all orders.
GET/api/salary-sumReturns total salary expenditure per department.
FeaturesNative Watch Mode: Uses node --watch for fast development without Nodemon.External SQL: Demonstrates loading SQL queries from a .sql file for better maintainability.Security: Uses dotenv to protect sensitive database credentials.