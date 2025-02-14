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

**My key takeaways for my index.css**  
- opacity: 0; is best for faed-in.  
- z-index ensures proper layering of things like videos and overlays.  
- animation-delay is great for making thigs not looked rushed.  
- @media adjust layouts dynamically for different screen sizes.  


