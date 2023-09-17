
# Onine Music School - MERN stack

The harmony heights is an online music School that runs on summertime. Has a vast variety of lessons and experienced Instructors.
This is a single-page-application project made from the technologies that falls under the MERN stack, with Firebase and JWT authentication.
Stripe is used as the payment method.


## Features

- Beatiful UI/UX
- RBAC (Role-Based Access Control)
- Firebase technology 
- JWT Authentication and Authorization 
- Single-Page-Application (SPA)
- Payment Method Using Stripe


## Tech Stack

**Client:** React, TailwindCSS, DaisyUI, React-router, Firebase, React-spring etc.  

**Server:** Node, Express, Stripe

**DataBase:** Mongodb


## Run Locally

1. Clone the project

```bash
  git clone https://github.com/Samiislam851/Harmony-heights-FE.git
```

2. Go to the project directory


3. Install dependencies

```bash
  npm install
```

4. Start the server

```bash
  npm run dev
```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Demo

https://harmonyheights.netlify.app/


## Documentation

[Documentation](https://linktodocumentation)


## Role Based Access Controls

#### Admin Features : 
- Admins can Approve classes that are requested from the Instructors.

- Can update the role of a student or teacher 

#### Instructor Role Features : 
- Instructors can add classes which will later be displayed in the dashboard of admin until he/she approves it.

- Instructors can set the maximum number of students that can enroll.



#### Student Role Features : 
- Students can enroll as many classes as they want to. 

- They will be redirected to the payment method while enrolling.

- Any user including Admin, Instructors, Students can see the How many students have enrolled and how many seats are left.