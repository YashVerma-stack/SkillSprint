1️⃣ First: What This Project Actually Is

Your project is a Learning Management System (LMS).

Examples of LMS:

Udemy

Coursera

Skillshare

Your LMS allows:

👨‍🏫 Instructor

Create courses

Add lectures

Upload videos

Publish course

See revenue

👨‍🎓 Student

Register/Login

Search courses

Purchase course

Watch lectures

Track progress

2️⃣ High Level Architecture

Your project has two main parts

LMS
│
├── server   → Backend (Node.js + Express + MongoDB)
│
└── client   → Frontend (React + Redux + Tailwind)

Think of it like:

Frontend = Restaurant waiter
Backend  = Kitchen
Database = Food storage

Customer (User) tells waiter what they want.

Waiter goes to kitchen.

Kitchen prepares food.

Waiter brings it back.

Same thing happens in your app.

User → React → API Request → Express → MongoDB
                               ↓
                           Response
                               ↓
                        React shows data

3️⃣ Thought Process Before Writing Code

When I build this project I think like this:

Step 1 → Setup backend server
Step 2 → Connect database
Step 3 → Create models
Step 4 → Create API routes
Step 5 → Create controllers
Step 6 → Setup authentication
Step 7 → Setup file upload
Step 8 → Setup payments
Step 9 → Build frontend
Step 10 → Connect frontend APIs

4️⃣ Backend Folder (Kitchen)
server
│
├── controllers
├── database
├── middlewares
├── model
├── routes
├── utils
└── index.js

Imagine backend as restaurant kitchen.

Each folder has a job.

5️⃣ database/db.js

Your first step.

You need to connect MongoDB.

import mongoose from "mongoose"

mongoose = tool that talks to MongoDB.

Without mongoose your server cannot speak MongoDB language.

connectDB function
const connectDB = async () => {

Async because database connection takes time.

await mongoose.connect(process.env.MONGO_URI)

This connects your server to MongoDB.

Example URI:

mongodb+srv://user:password@cluster.mongodb.net/lms

Why .env?

Security.

Never put passwords in code.

Then:

console.log("MongoDB Connected")

Just to confirm connection.

6️⃣ Models (Database Structure)
model

Models define how data is stored in database.

Example:

User
Course
Lecture
Purchase
Progress

Like tables in SQL.

user.model.js
const userSchema = new mongoose.Schema({

Schema = blueprint of data.

Think of it like form fields.

Example:

name
email
password
role
photo

Why role?

Because there are 2 users:

student
instructor

Example document in MongoDB:

{
 name: "Yash",
 email: "yash@gmail.com",
 role: "student"
}

7️⃣ Routes
routes

Routes = API endpoints

Example:

POST /login
POST /register
GET /courses

Routes decide:

Which controller runs.

Example:

router.post("/login", login)

When user sends request to:

POST /login

Server calls:

login controller

8️⃣ Controllers

Controllers contain actual logic.

Example:

User login.

Controller:

check email
check password
generate token
send response

Routes only decide which controller runs.

Controllers do the real work.

8️⃣ Controllers

Controllers contain actual logic.

Example:

User login.

Controller:

check email
check password
generate token
send response

Routes only decide which controller runs.

Controllers do the real work.

9️⃣ Middleware
middlewares/isAuthenticated.js

Middleware runs before controller.

Example:

User wants to watch course.

Server checks:

Is user logged in?

If not → reject request.

If yes → continue.

🔟 Utils

Utilities = helper functions.

Examples in your project:

cloudinary
multer
generateToken
multer

Handles file uploads.

Example:

Uploading video.

cloudinary

Stores videos/images online.

Because storing videos in server is bad idea.

generateToken

Creates JWT token.

JWT = login session.

11️⃣ Backend Entry File
index.js

This is the heart of backend.

First:

import express

Express = backend framework.

Then:

connectDB()

Connect database.

Then:

app.use(express.json())

Allows server to read JSON.

Example:

POST { email:"yash@gmail.com" }

Then:

app.use(cors())

Allows frontend to talk to backend.

Without this React cannot call API.

Then routes:

app.use("/api/v1/user", userRoute)

Meaning:

/api/v1/user/login
/api/v1/user/register

Then server start:

app.listen(PORT)

Backend is now running.

12️⃣ Frontend

Now we build React app.

client/src

Main file:

main.jsx

This loads React.

createRoot(document.getElementById("root"))

React attaches to HTML.

Redux Store
app/store.js

Redux = global state manager.

Example:

logged in user
auth status
RTK Query APIs
features/api

These connect frontend to backend.

Example:

authApi.js
courseApi.js
purchaseApi.js

Example login request:

POST /api/v1/user/login

RTK Query sends request automatically.

Routing

Your routes are defined in:

App.jsx

Example:

/login
/profile
/admin/dashboard

Each route loads a page component.

Student Pages
pages/student

Examples:

Courses
CourseDetail
CourseProgress
Search
Profile
Admin Pages
pages/admin

Examples:

Dashboard
Create Course
Add Lecture
Edit Course
UI Components
components/ui

These are from shadcn UI.

Examples:

button
card
dialog
input

Reusable UI pieces.

Data Flow Example

Let’s see real flow.

User logs in

1️⃣ User clicks login.

Login.jsx

2️⃣ RTK Query sends request.

POST /api/v1/user/login

3️⃣ Backend route handles request.

user.route.js

4️⃣ Controller runs.

user.controller.js

5️⃣ Check password.

6️⃣ Generate JWT.

7️⃣ Send response.

8️⃣ Redux saves user.

Payment Flow

Student clicks:

Purchase Course

Frontend:

createCheckoutSession()

Backend:

Stripe checkout session

User pays.

Stripe calls webhook.

Backend marks purchase:

status = completed

Course Watching Flow

Student opens:

/course-progress/:courseId

Frontend fetches:

courseProgressApi

Backend returns:

course details
lecture progress
completion status

Student watches lecture.

Backend updates:

lectureProgress = viewed

Why Each Library Exists
Library -  Purpose
express -  backend server
mongoose    -  MongoDB ORM
bcrypt  -  password hashing
jsonwebtoken    -  login tokens
stripe  -  payments
multer  -  file uploads
cloudinary  -  media storage
react   -  frontend
redux   -  state management
RTK Query   -  API handling
tailwind    -  styling
shadcn  -  UI components
lucide  -  icons
recharts    -  dashboard graphs

---

steps

Step 1 → Understand backend from scratch
Step 2 → Understand database models
Step 3 → Understand authentication
Step 4 → Understand routes & controllers
Step 5 → Understand payments & uploads
Step 6 → Understand frontend architecture
Step 7 → Understand Redux & APIs
Step 8 → Understand pages and UI flow

---

PART 1 — Starting the Backend (index.js)

File:

server/index.js

Your code:

import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js"
import courseRoute from './routes/course.route.js'
import mediaRoute from './routes/media.route.js'
import purchaseRoute from './routes/purchaseCourse.route.js'
import courseProgressRoute from "./routes/courseProgress.route.js"

dotenv.config({})

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

//apis
app.use('/api/v1/media', mediaRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/course', courseRoute);
app.use('/api/v1/purchase', purchaseRoute);
app.use('/api/v1/progress', courseProgressRoute);

app.get("/home", (_, res) => {
    res.status(200).json({
        success:true,
        message:"Hello i am coming from backend"
    })
})

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})

Now we go line by line.

1️⃣ Importing Express
import express from "express"
What is Express?

Express is a Node.js framework for building servers.

Without express you would write raw Node HTTP server like this:

const http = require("http")

http.createServer((req,res)=>{
   res.end("hello")
})

That is painful.

Express simplifies everything.

Example:

app.get("/login")
app.post("/register")

So express helps us create APIs easily.

2️⃣ Import dotenv
import dotenv from "dotenv"

dotenv loads environment variables from .env.

Example .env

MONGO_URI=mongodb://....
SECRET_KEY=abcd1234
STRIPE_SECRET=sk_test_xxx

We don't write secrets directly in code.

Instead we write:

process.env.MONGO_URI

That is secure practice.

3️⃣ Import cookieParser
import cookieParser from "cookie-parser";

Cookies store login session data in browser.

Example cookie:

token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

cookie-parser allows express to read cookies from requests.

Example:

req.cookies.token
4️⃣ Import CORS
import cors from "cors";

CORS = Cross Origin Resource Sharing.

Why needed?

Because:

Frontend → localhost:5173
Backend → localhost:8080

Different origins.

Browsers block requests between them unless CORS allows it.

So we enable it.

5️⃣ Import Database Connection
import connectDB from "./database/db.js";

This imports the function we wrote earlier:

connectDB()

Which connects MongoDB.

6️⃣ Import Routes

Routes connect URL endpoints to controllers.

import userRoute from "./routes/user.route.js"

Means:

/api/v1/user/login
/api/v1/user/register

Will be handled there.

Same for:

courseRoute
mediaRoute
purchaseRoute
progressRoute

Each route file contains API endpoints.

7️⃣ Load Environment Variables
dotenv.config({})

This loads .env.

Without this line:

process.env.PORT
process.env.MONGO_URI

Would not work.

8️⃣ Connect Database
connectDB();

Now your server connects to MongoDB.

Without this your app cannot read/write data.

9️⃣ Create Express App
const app = express();

This creates the server instance.

Think of it like:

app = restaurant
routes = menu
controllers = chefs
🔟 Define PORT
const PORT = process.env.PORT || 3000;

Meaning:

If .env has PORT → use that
Otherwise use 3000

Example:

PORT=8080

11️⃣ Middleware Setup
app.use(express.json());

This allows server to read JSON.

Example request:

POST /login

{
 "email":"yash@gmail.com"
}

Without this express cannot read JSON body.

app.use(cookieParser());

Allows server to read cookies.

Example:

req.cookies.token
app.use(cors({
 origin:"http://localhost:5173",
 credentials:true
}));

This allows frontend to send cookies with requests.

Important for login system.

12️⃣ Register API Routes

Example:

app.use('/api/v1/user', userRoute);

Meaning:

If request is:

/api/v1/user/login

Express sends it to:

user.route.js

Routes organize APIs.