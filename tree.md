LMS
│
├── server
│   │
│   ├── controllers
│   │   ├── course.controller.js
│   │   ├── courseProgress.controller.js
│   │   ├── coursePurchase.controllers.js
│   │   └── user.controller.js
│   │
│   ├── database
│   │   └── db.js
│   │
│   ├── middlewares
│   │   └── isAuthenticated.js
│   │
│   ├── model
│   │   ├── course.model.js
│   │   ├── courseProgress.model.js
│   │   ├── coursePurchase.model.js
│   │   ├── lecture.model.js
│   │   └── user.model.js
│   │
│   ├── routes
│   │   ├── course.route.js
│   │   ├── courseProgress.route.js
│   │   ├── media.route.js
│   │   ├── purchaseCourse.route.js
│   │   └── user.route.js
│   │
│   ├── utils
│   │   ├── cloudinary.js
│   │   ├── generateToken.js
│   │   └── multer.js
│   │
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
│
└── client
    │
    ├── node_modules
    │
    ├── public
    │   └── vite.svg
    │
    ├── src
    │   │
    │   ├── app
    │   │   ├── rootReducer.js
    │   │   └── store.js
    │   │
    │   ├── assets
    │   │
    │   ├── components
    │   │   ├── BuyCourseButton.jsx
    │   │   ├── LoadingSpinner.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── ProtectedRoutes.jsx
    │   │   ├── PurchaseCourseProtectedRoute.jsx
    │   │   ├── RichTextEditor.jsx
    │   │   ├── ThemeProvider.jsx
    │   │   │
    │   │   └── ui
    │   │       ├── avatar.jsx
    │   │       ├── badge.jsx
    │   │       ├── button.jsx
    │   │       ├── card.jsx
    │   │       ├── checkbox.jsx
    │   │       ├── dialog.jsx
    │   │       ├── dropdown-menu.jsx
    │   │       ├── input.jsx
    │   │       ├── label.jsx
    │   │       ├── progress.jsx
    │   │       ├── select.jsx
    │   │       ├── separator.jsx
    │   │       ├── sheet.jsx
    │   │       ├── skeleton.jsx
    │   │       ├── sonner.jsx
    │   │       ├── switch.jsx
    │   │       ├── table.jsx
    │   │       └── tabs.jsx
    │   │
    │   ├── features
    │   │   ├── authSlice.js
    │   │   │
    │   │   └── api
    │   │       ├── authApi.js
    │   │       ├── courseApi.js
    │   │       ├── courseProgressApi.js
    │   │       └── purchaseApi.js
    │   │
    │   ├── layout
    │   │   └── MainLayout.jsx
    │   │
    │   ├── lib
    │   │   └── utils.js
    │   │
    │   ├── pages
    │   │   │
    │   │   ├── Login.jsx
    │   │   │
    │   │   ├── admin
    │   │   │   ├── Dashboard.jsx
    │   │   │   ├── Sidebar.jsx
    │   │   │   │
    │   │   │   ├── course
    │   │   │   │   ├── AddCourse.jsx
    │   │   │   │   ├── CourseTab.jsx
    │   │   │   │   ├── CourseTable.jsx
    │   │   │   │   └── EditCourse.jsx
    │   │   │   │
    │   │   │   └── lecture
    │   │   │       ├── CreateLecture.jsx
    │   │   │       ├── EditLecture.jsx
    │   │   │       ├── Lecture.jsx
    │   │   │       └── LectureTab.jsx
    │   │   │
    │   │   └── student
    │   │       ├── Course.jsx
    │   │       ├── CourseDetail.jsx
    │   │       ├── CourseProgress.jsx
    │   │       ├── Courses.jsx
    │   │       ├── Filter.jsx
    │   │       ├── HeroSection.jsx
    │   │       ├── MyLearning.jsx
    │   │       ├── Profile.jsx
    │   │       ├── SearchPage.jsx
    │   │       └── SearchResult.jsx
    │   │
    │   ├── App.css
    │   ├── App.jsx
    │   ├── DarkMode.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── jsconfig.json
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── vite.config.js