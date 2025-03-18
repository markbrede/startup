# Notes for CS260

## 3 main take aways
1. Git and GitHub work hand in hand. GitHub allows me to see the things I do in Git more clearly.
2. How to push and pull to and from GitHub. It is important to be succinct with where and when you push and pull.
3. You should commit consistently and often. Doing so allows others to see the small changes you have made with each commit.

4. ## Jan 17 2024 - EC2
**I created the EC2 Instance**
- **Named the Instance marks260webserver**
- **Choose t2.micro for the instance type (May need to change this later**
**Accessed and Configured the Instance**
**SSH into Server Using:**
   ssh -i [my key pair file] ubuntu@3.216.217.181




## Jan 24 2024 - HTTPS
**Secured Web Server Communication with HTTPS**
- Modified Caddyfile:
- Replaced `:80` with my domain name `AutoExpenseTracker.click`.
- Restarted Caddy to apply changes:



## Feb 02 2024 - HTML & CodePen
**Completed HTML structure, input, and media**
- Familiarized myself with CodePen.



## Feb 12 2024 - CSS Animations & Responsive Ipmlementation  
**animations & transitions**  
- Created a **fade-in letf-to-right** effect using @keyframes fadeInLeftToRight.  
- Used animation-delay to give a staggered appearance of elements (I have only applied this to the homepage through index.css tho).  

**background vid & header overlay for HP. .jpeg for  All other pages**  
- Full screen background with "object-fit" to cover.  
- header::before: Added a semi transparent dark overlay using rgba.
- The .jpeg is present behind the vid in the homepage so that all other pages have the same style of background.  

**welcome & form boxes**  
- .welcome-box: Left-aligned, font-size: 1.7em;, fades in using animations.  
- .form-box: Semi-transparent dark background rgba, rounded corners, shadow effect.  
- Login/signup form elements fade in with staggered delays using nth-child selectors.  

**grid layout & responsive resign**  
- Used .grid-container with grid-template-columns: 1fr 1fr; for two-column layout.  
- Added gap: 150px; for spacing, align-items: center; for vertical alignment.  
- **Small Screens (≤ 800px)**:  
  - Switched to single-column layout specifaly grid-template-columns: 1fr;.  
  - Hiding the welcome box with display: none; for better mobile UX. I don't think it is that important anyways  

**My key takeaways from my css**  
- opacity: 0; is best for faed-in.  
- z-index ensures proper layering of things like videos and overlays.  
- animation-delay is great for making thigs not looked rushed.  
- @media adjust layouts dynamically for different screen sizes.



## Mar 03 2025 - React Part-One for Startup.AutoExpenseTracker.click  
**Converting to React & Vite**  
- Transformed **AutoExpenseTracker** from a multi-page to a **single-page application (SPA)**.  
- Used **Vite** as the build tool for faster development and optimized production builds.  
- Modularized code into **React components**, improving maintainability.  

**React Components & JSX**  
- Created **functional components** for each major section (e.g., Login, Dashboard, Reports).  
- Converted **HTML to JSX**, replacing `class` with `className` for React compatibility.  
- Implemented **component-specific CSS** by importing stylesheets directly into component files.  

**React Router**  
- Set up **React Router** for navigation between components without page reloads.  
- Replaced `<a>` tags with **`<NavLink>`** for internal navigation, improving SPA functionality.  
- Defined routes and handled **404 errors** with a catch-all route.  

**State Management & Props**  
- Started thinking about **state management** for user data and expense tracking.  
- Practiced **passing data** between components using **props**.  

**Bootstrap to React-Bootstrap**  
- Converted **Bootstrap components** to **React-Bootstrap** for better integration with React.  
- Imported and used **React-Bootstrap components** like **Button** and **Modal**.  

**Project Structure**  
- Reorganized project structure to fit **React/Vite conventions**:  
  - `public/` for static assets  
  - `src/` for React components and application logic  
  - Component-specific folders for better organization  

**Build & Deployment**  
- Created a new **deployment script** (`deployReact.sh`) for building and deploying the React app.  
- Used `npm run build` to create **production-ready bundles**.



## Mar 12, 2025 - State & Props  
**Charts for Expense Data**  
- Added a chart to show expense data in a visual way.  
- Added chart.js to checkout interactive.  
- Made sure it updates when new data is added.  

**Expenses List & Form**  
- The ExpenseList to show all the expenses.  
- Made ExpenseForm so users can add new expenses.  
- Uhooks to handle form input and submission.  

**Random Quotes on About Page**  
- Added a qutoe generator based off of simon to the About page.  
- Will use hooks to grab random quotes and display them.  
- Fun way to make the page more interesting. 


**State Management Stuff**  
- Messed around with useState, useEffecy, and useContext for managing data.  
- Smodel global state for user login status and expense tracking.  

**Handling Errors & User Feedback**  
- Understanding what API errors will look like.  
- Err messages.  

## Mar 16, 2025 - React Stuff for Part 2  
**Login & Auth Stuff**  
- Made my component to check if users are logged in.  
- Used state to keep track of whether someone is logged in or not.  
- Made it so some pages can’t be accessed unless the user is logged in.  

**CSS*  
- Tweaked the layout to work better on different screen sizes.  
- Used media queries and CSS variables for consistency.  

**Deploying & Fixing Bugs**  
- Pushed the app live using `deployReact.sh`.  
- Used DevTools and console logs to find and fix bugs.  


## Mar 17, 2025 - Testing & Optimizing  
**Testinf & Debugging** 
- Used console logs and DevTools to fix issues.
