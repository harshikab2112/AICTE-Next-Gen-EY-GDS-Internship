# AICTE-Next-Gen-EY-GDS-Internship - Backend

📌 **Project Overview**
This is the backend part of a **Zomato Clone** built using the **MERN stack** as part of the **AICTE Next-Gen EY GDS Internship**. The backend is developed using **Node.js** and **Express.js**, and it interacts with **MongoDB Atlas** for database operations.

🛠️ **Tech Stack**
- **Node.js** (Runtime Environment)
- **Express.js** (Backend Framework)
- **MongoDB Atlas** (Cloud Database)
- **Mongoose** (MongoDB ORM)
- **JWT (jsonwebtoken)** (Authentication)
- **Bcrypt.js** (Password Hashing)
- **CORS** (Cross-Origin Requests Handling)
- **Dotenv** (Environment Variables Management)
- **Nodemon** (Auto-restart for Development)

📂 **Folder Structure**
```
backend/
│── models/            # Database models (Schemas)
│   ├── User.js
│   ├── Vendor.js
│   ├── Restaurant.js
│   ├── Food.js
│   ├── Order.js
│
│── routes/            # API Routes
│   ├── adminRoutes.js
│   ├── authRoutes.js
│   ├── vendorRoutes.js
│   ├── restaurantRoutes.js
│   ├── foodRoutes.js
│   ├── orderRoutes.js
│
│── middleware/        # Authentication & Middleware
│   ├── authMiddleware.js
|   ├──  adminMiddleware.js
│
│── config/            # Database Connection
│   ├── db.js
│
│── server.js          # Main Server File
│── .env               # Environment Variables
│── package.json       # Project Metadata
│── .gitignore         # Files to Ignore
```

🚀 **Installation & Setup**

1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-repo/AICTE-Next-Gen-EY-GDS-Internship.git
cd backend
```

2️⃣ **Install Dependencies**
```sh
npm install
```

3️⃣ **Set Up Environment Variables**
Create a `.env` file in the `backend/` folder and add:
```
MONGO_URI=mongodb+srv://yourUsername:yourPassword@cluster.mongodb.net/yourDB?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
```

4️⃣ **Start the Server**
```sh
npm run dev
```

🔧 **Features**
✔️ User Authentication (JWT-based Login/Register)  
✔️ CRUD Operations for Restaurants & Food Items  
✔️ Vendor Dashboard to Manage Menus  
✔️ User Cart & Order Processing  
✔️ Secure Password Hashing with Bcrypt.js  
✔️ Responsive API with JSON Responses  

📌 **Next Steps**
- Connect Frontend with API Endpoints
- Implement Payment Gateway Integration
- Enhance Security & Validation

👩‍💻 **Author**
**Harshika Bansal**

📜 **License**
This project is licensed under the **MIT License** – feel free to modify and distribute it. See the LICENSE file for more details.
