# Notes for CS260

## 3 main take aways
1. Git and GitHub work hand in hand. GitHub allows me to see the things I do in Git more clearly.
2. How to push and pull to and from GitHub. It is important to be succinct with where and when you push and pull.
3. You should commit consistently and often. Doing so allows others to see the small changes you have made with each commit.

4. ## Sep 17 2024 - EC2
**I created the EC2 Instance**
- **Named the Instance marks260webserver**
- **Choose t2.micro for the instance type (May need to change this later**
**Accessed and Configured the Instance**
**SSH into Server Using:**
   ssh -i [my key pair file] ubuntu@3.216.217.181




## Sep 24 2024 - HTTPS
**Secured Web Server Communication with HTTPS**
- Modified Caddyfile:
- Replaced `:80` with my domain name `AutoExpenseTracker.click`.
- Restarted Caddy to apply changes:



## Oct 02 2024 - HTML & CodePen
**Completed HTML Structure, Input, and Media**
- Familiarized myself with CodePen.

## Oct 21 2024 - CSS Practice
- **CSS Declarations**: CSS declarations consist of properties and values that define the styling of HTML elements. Common properties include `background-color`, `border`, `color`, and `font`.
  ```css
  p {
    color: blue;
    background-color: yellow;
    border: 1px solid black;
  }
  ```

- **Units in CSS**: CSS supports various units for defining sizes, such as `px` (pixels), `%` (percentages), `em` (relative to the parent element's font size), and `vh` (viewport height).
  ```css
  div {
    width: 50%;
    padding: 10px;
    font-size: 1.5em;
  }
  ```

- **Color Representation**: Colors in CSS can be defined using keywords (e.g., "red"), RGB values, or HSL values, allowing for a wide range of color customization.
  ```css
  h1 {
    color: rgb(255, 0, 0); /* Red */
    background-color: hsl(120, 100%, 50%); /* Green */
  }
  ```

- **Font Styling**: CSS allows you to customize fonts using properties like `font-family`, `font-size`, and `font-weight`. You can also import fonts from external sources like Google Fonts.
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  ```

- **Responsive Design**: CSS properties like `flex` and `grid` are essential for creating responsive designs that adapt to different screen sizes.
  ```css
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  ```

- **CSS Animations**: Animations in CSS are created using the `animation` property and `keyframes`. These allow elements to transition smoothly between styles over time.
  ```css
  .box {
    animation: moveRight 2s infinite;
  }

  @keyframes moveRight {
    from { transform: translateX(0); }
    to { transform: translateX(100px); }
  }
  ```

- **Keyframes in Animations**: Keyframes define the start and end points of an animation, as well as any intermediate steps. They help create complex animations with smooth transitions.
  ```css
  @keyframes fadeInOut {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
  
  .fade {
    animation: fadeInOut 3s ease-in-out infinite;
  }
  ```

- **Animation Timing**: The `animation-duration` property specifies how long an animation should take to complete, allowing you to control the speed of animations.
  ```css
  .spin {
    animation: rotate360deg;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
   }

   @keyframes rotate360deg {
     from { transform: rotate(0deg); }
     to { transform: rotate(360deg); }
   }
   ```

- **Advanced Animation Effects**: Additional keyframes can be added to create effects like bouncing or easing, enhancing the visual appeal of animations.
   ```css
   @keyframes bounce {
     from, to { transform: translateY(0); }
     50% { transform: translateY(-30px); }
   }

   .bouncy {
     animation: bounce ease-in-out infinite alternate;
     animation-duration: .5s;
   }
   ```

- **Practical Experimentation**: Experimenting with different CSS properties and animations on platforms like CodePen can deepen understanding and inspire creativity in web design. For example, try creating a hover effect:
   ```css
   .hover-effect:hover {
     color: white;
     background-color: black;
     transition-duration:.3s ease-in-out ;
   }
   ```



## Oct 21 2024 - CSS Flex

   - **Flexbox Layout**: Flexbox is a CSS layout model that allows you to design complex layouts with ease by distributing space within a container. It uses the `display: flex` property to activate flexbox on a container.
  ```css
  .container {
    display: flex;
  }
  ```

- **Flex Direction**: The `flex-direction` property defines the direction in which flex items are placed in the flex container. It can be set to `row`, `column`, `row-reverse`, or `column-reverse`.
  ```css
  .container {
    display: flex;
    flex-direction: column; /* Items are stacked vertically */
  }
  ```

- **Justify Content**: The `justify-content` property aligns flex items along the main axis (horizontal by default). It can be set to values like `flex-start`, `flex-end`, `center`, `space-between`, and `space-around`.
  ```css
  .container {
    display: flex;
    justify-content: space-between; /* Evenly distributes items */
  }
  ```

- **Align Items**: The `align-items` property aligns flex items along the cross axis (vertical by default). Possible values include `stretch`, `center`, `flex-start`, and `flex-end`.
  ```css
  .container {
    display: flex;
    align-items: center; /* Centers items vertically */
  }
  ```

- **Flex Property**: The `flex` property is a shorthand for setting the grow, shrink, and basis of a flex item. It determines how much space an item should take relative to its siblings.
  ```css
  .item {
    flex: 1; /* Item will grow to fill available space equally */
  }
  ```
  
These key points summarize the fundamental aspects of CSS Flexbox, providing a solid foundation for creating responsive and adaptable web layouts.


## Oct 21 2024 - JavaScript Essentials for the Mid-term

# Beginner JavaScript Concepts

- **Hello World Example**
  - Display a message using JavaScript:
    ```javascript
    console.log("Hello World!");
    ```
  - Use an alert box:
    ```html
    <script type="text/javascript">
      alert("Hello World");
    </script>
    ```

- **Variables and Data Types**
  - Declare variables using `let`, `const`, or `var`:
    ```javascript
    let name = "John";
    const age = 30;
    var isStudent = true;
    ```

- **Basic Operations**
  - Arithmetic operations:
    ```javascript
    let sum = 5 + 3;
    let product = 4 * 2;
    ```

- **Functions**
  - Define and use a function:
    ```javascript
    function greet(name) {
      return "Hello, " + name;
    }
    
    console.log(greet("Alice"));
    ```

- **Control Structures**
  - Conditional statements:
    ```javascript
    if (age > 18) {
      console.log("Adult");
    } else {
      console.log("Minor");
    }
    ```
  - Loops:
    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    
    let j = 0;
    while (j < 5) {
      console.log(j);
      j++;
    }
    ```

- **Arrays**
  - Create and manipulate arrays:
    ```javascript
    let fruits = ["Apple", "Banana", "Cherry"];
    
    fruits.push("Orange");
    
    console.log(fruits); // Banana
    ```

- **Objects**
  - Define and use objects:
    ```javascript
    let person = {
      firstName: "John",
      lastName: "Doe",
      age: 25
    };
    
    console.log(person.firstName); // John
    ```

- **Events**
  - Add event listeners to elements:
    ```html
    <button id="myButton">Click me</button>
    
    <script>
      document.getElementById("myButton").addEventListener("click", function() {
        alert("Button clicked!");
      });
    </script>
    ```

- **DOM Manipulation**
  - Change HTML content with JavaScript:
    ```html
    <h1 id="title">Original Title</h1>
    
    <script>
      document.getElementById("title").textContent = "New Title";
    </script>
    ```

    3 Main Takeaways
React Router and Routing

Learned how to use React Router for navigation between pages in a React app. This allows users to move between different components like login, track expenses, and view expense history without reloading the page.
State Management with useState

Learned how to use React’s useState hook to manage state in functional components. This includes managing form data (like vehicle, expense type, and amount) and tracking expenses across components.
Passing Props Between Components

Learned how to pass data (like expenses) between components by using props. This allows the Track component to send new expenses to the App component, and for the History component to display the list of expenses.
Dec 11, 2024 - React Components & Routing
Created Main Components for Tracking Expenses

App Component

Set up App.jsx as the main entry point and router using BrowserRouter and Routes from react-router-dom. This component handles routing between pages like Login, Track, and History.
Login Component

Implemented the Login.jsx component with conditional rendering based on the user’s authentication state. The login state is stored in localStorage, and the user can log in or out with corresponding actions.
Track Component

Built the Track.jsx component where users can add new expenses. The component includes form inputs for vehicle, expense type, and amount. Upon submission, the expense is passed to the App component and stored in the state.
History Component

Developed the History.jsx component to display a list of expenses in a table format. It receives the list of expenses as props from App.jsx.
Dec 11, 2024 - State Management & Event Handling
Managing Expense State

useState Hook
Used the useState hook to manage data like the username, expenses, and form input fields across the components. This helps ensure that data is passed dynamically from one component to another.
Form Handling

Implemented form submission in the Track.jsx component to add new expenses. The data from the form inputs (vehicle, expense type, amount) is collected, stored, and passed to the parent App component.
Dec 11, 2024 - Component Integration
Integrated Components for Shared State

Integrated the Track and History components within the App component. This allows Track to send data to the App and History to receive the expenses, creating a shared state between components.
Conditional Rendering

Used conditional rendering in Login.jsx to display either the login form or a welcome message based on the user’s authentication status. This helps control access to other parts of the app.



#Notes for the final (Everything I learned while finishing my Startup React and Services. Even the stuff I didn't get to finish such as Websockets and Loging)


# Perplexity AI Assistant Guidelines

## Core Principles
- Provide accurate, detailed, and comprehensive answers
- Use search results when available, but rely on existing knowledge if needed
- Incorporate information naturally without mentioning sources
- Cite search results using [index] format after relevant sentences
- Optimize for readability with proper formatting

## Answer Structure
- Use level 2 headers (##) for main sections
- Use bolding (**) for subsections
- Incorporate variety in formatting (lists, headers, text)
- Never start with a header
- Use lists sparingly, preferring other formatting methods
- Use numbered lists only for ranking, otherwise use bullet points
- Never nest lists or mix ordered and unordered lists
- Use markdown tables for comparisons
- Bold specific words for emphasis
- Use code blocks for code snippets with language specification
- Wrap math expressions in LaTeX: $$ $$ for inline, $$ $$ for block formulas

## Citation Guidelines
- Cite immediately after the sentence using [index]
- No space between last word and citation
- Cite only the most relevant search results
- Maximum of three citations per sentence
- No References section at the end

## Query-Specific Rules

### Academic Research
- Long, detailed answers formatted as scientific write-up
- Use paragraphs and sections with markdown and headings

### Coding
- Use markdown code blocks with language specification
- Write code first, then explain
- No citations within or right after code blocks

### People
- Short, comprehensive biography
- Describe each person individually if multiple people
- Don't start with person's name as header

### Weather
- Provide forecast only if available in search results

### Cooking Recipes
- Step-by-step instructions
- Clearly specify ingredients, amounts, and precise steps

### Translation
- Provide translation without citations

### Creative Writing
- Follow user instructions precisely
- Don't use search results

### Science and Math
- Simple calculations: final result only
- Formulas: Use LaTeX with $$ $$ for inline, $$ $$ for block
- Cite formulas at the end
- No $ or $$ for LaTeX rendering
- No unicode for math expressions
- No \label instruction in LaTeX

### Recent News
- Concise summary grouped by topics
- Use lists with highlighted news titles
- Diverse perspectives from trustworthy sources
- Combine and cite multiple sources for same event
- Prioritize recent events
- No heading at the start

## Restrictions
- No URLs or links
- No bibliographies
- Avoid moralization or hedging language
- No verbatim copyrighted content
- Never output song lyrics directly
- State when information is unavailable
- Avoid phrases like "According to search results" or similar constructions

## Personalization
- Write in the language of the user's request

## Date Awareness
- Consider current date when answering queries


# Simon React Phase 2: JavaScript Implementation

## Overview
This phase focuses on implementing JavaScript functionality for the Simon game using React, making the application interactive and functionally complete.

## Key Components

### About Component
- Uses `useState` and `useEffect` hooks for managing state and side effects
- Placeholder implementation for fetching random images and quotes
- State variables: `imageUrl`, `quote`, and `quoteAuthor`

### Play Component
- Parent component for the game view
- Composed of two child components: Players and SimonGame

### Players Component
- Listens for game notifier events using `useEffect`
- Manages and displays events from other players

### SimonGame Component
- Implements core game logic
- Key state variables:
  - `allowPlayer`: Controls player interaction
  - `sequence`: Current sequence to reproduce
  - `playbackPos`: Current position in the sequence

#### Game Logic Highlights
- `onPressed` function:
  - Checks if player interaction is allowed
  - Validates button press against the sequence
  - Increases sequence or ends game based on player performance
- Implements game reset, score updates, and sequence generation

### Scores Component
- Reads scores from local storage
- Displays scores in a table generated with JSX

### Login Component
- Uses child components to render different views based on authentication state
- Implements "Lifting State Up" React pattern for managing auth state
- Stores username in local storage for persistent login

## React Patterns and Techniques
- Use of hooks: `useState`, `useEffect`
- Lifting State Up for sharing state between components
- Conditional rendering based on state

## Deployment
- Uses a custom `deployReact.sh` script
- Requires Vite package for bundling the React application
- Deploys bundled static files to production environment

## Best Practices
- Commit and test incrementally
- Use Git for version control
- Debug frontend code in the browser

## Code Structure
- Separate files for different components (`about.jsx`, `play.jsx`, etc.)
- Support files for game logic (`delay.js`, `gameNotifier.js`)

## Future Enhancements
- Implement actual fetch requests for images and quotes
- Replace mock WebSocket messages with real-time player data
- Enhance authentication with server-side token verification

# Startup Service Notes

## Backend Setup

### Node.js and Express

- Create `service/index.js` for backend
- Use Express to create web service
- Select port:
  ```javascript
  const port = process.argv.length > 2 ? process.argv[2] : 4000;
  ```
- Serve static files:
  ```javascript
  app.use(express.static('public'));
  ```

### Vite Configuration

- Create `vite.config.js` in main directory:
  ```javascript
  import { defineConfig } from 'vite';

  export default defineConfig({
    server: {
      proxy: {
        '/api': 'http://localhost:4000',
      },
    },
  });
  ```

## API Endpoints

- Create new endpoints in `service/index.js`
- Implement similar to Simon project
- Use `fetch()` in frontend to call backend endpoints

## Third-Party APIs

- Integrate third-party service calls in frontend
- Use `fetch()` for API requests

## Debugging

- Backend: Use VS Code's Node debugger on `service/index.js`
- Frontend: Use browser's inspect dev tools
- Run frontend with `npm run dev`

## Deployment

- Copy `deployService.sh` from Simon Service
- Deploy to production environment:
  ```bash
  ./deployService.sh -k <yourpemkey> -h <yourdomain> -s startup
  ```

## Version Control

- Commit and push code to GitHub regularly
- Update `notes.md` in repository
- Ensure sufficient commits to prove ownership

# Startup Login Notes

## Authentication and Authorization in Node.js

### User Registration

```markdown
## User Registration
- Create a registration form to collect user data
- Hash and salt passwords before storing in the database
- Use bcrypt for password hashing:
  ```
  const bcrypt = require('bcrypt');
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  ```
- Store user data, including hashed password, in MongoDB
```

### User Login

```markdown
## User Login
- Create a login form for users to provide credentials
- Validate credentials against stored data in the database
- Use bcrypt to compare provided password with stored hash:
  ```
  const passwordMatch = await bcrypt.compare(password, user.password);
  ```
- Create a session or generate a token for authenticated users
```

### User Logout

```markdown
## User Logout
- Implement a logout functionality
- Clear session data or invalidate tokens on logout
```

### Password Security

```markdown
## Password Security
- Never store plain text passwords
- Use strong hashing algorithms like bcrypt
- Implement password strength requirements
```

### MongoDB Integration

```markdown
## MongoDB Integration
- Install MongoDB driver: `npm install mongodb`
- Connect to MongoDB:
  ```
  const { MongoClient } = require('mongodb');
  const client = new MongoClient(uri);
  await client.connect();
  ```
- Create, read, update, and delete (CRUD) operations on the database
```

### API Endpoints

```markdown
## API Endpoints
- Implement RESTful API endpoints for data operations
- Use Express.js for routing:
  ```
  app.post('/api/users', createUser);
  app.get('/api/users/:id', getUser);
  app.put('/api/users/:id', updateUser);
  app.delete('/api/users/:id', deleteUser);
  ```
```

### Authorization Middleware

```markdown
## Authorization Middleware
- Create middleware to check user authentication status
- Protect routes that require authentication:
  ```
  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ error: 'Unauthorized' });
  }
  
  app.get('/api/protected', isAuthenticated, protectedRoute);
  ```
```

### Frontend Integration

```markdown
## Frontend Integration
- Use fetch or Axios for API calls from frontend
- Update DOM to reflect user authentication status
- Implement login/logout UI components
```

### Error Handling

```markdown
## Error Handling
- Implement proper error handling for authentication failures
- Provide meaningful error messages to users
- Log errors on the server for debugging
```

### Security Best Practices

```markdown
## Security Best Practices
- Use HTTPS for all communications
- Implement rate limiting to prevent brute-force attacks
- Keep dependencies up-to-date
- Regularly audit your code for security vulnerabilities
```

### Deployment

```markdown
## Deployment
- Use `deployService.sh` script for deployment
- Ensure MongoDB connection works in production environment
- Set up proper environment variables for production
```

# WebSocket Implementation Notes

## Backend Setup

```markdown
## Backend WebSocket Setup

1. Install required dependencies:
   ```
   npm install ws
   ```

2. Create WebSocket server:
   ```
   const WebSocket = require('ws');
   const wss = new WebSocket.Server({ server });
   ```

3. Handle new connections:
   ```
   wss.on('connection', (ws) => {
     console.log('New client connected');
     
     ws.on('message', (message) => {
       console.log('Received:', message);
       // Handle incoming messages
     });
     
     ws.on('close', () => {
       console.log('Client disconnected');
     });
   });
   ```

4. Broadcast messages to all clients:
   ```
   wss.clients.forEach((client) => {
     if (client.readyState === WebSocket.OPEN) {
       client.send(JSON.stringify(data));
     }
   });
   ```
```

## Frontend Setup

```markdown
## Frontend WebSocket Setup

1. Create WebSocket connection:
   ```
   const socket = new WebSocket('ws://localhost:8080');
   ```

2. Handle connection open:
   ```
   socket.onopen = (event) => {
     console.log('WebSocket connection established');
   };
   ```

3. Handle incoming messages:
   ```
   socket.onmessage = (event) => {
     const data = JSON.parse(event.data);
     // Process and display the received data
   };
   ```

4. Send messages to the server:
   ```
   socket.send(JSON.stringify(message));
   ```

5. Handle connection close:
   ```
   socket.onclose = (event) => {
     console.log('WebSocket connection closed');
   };
   ```
```

## Integration with Application

```markdown
## Integrating WebSocket with Application

1. Update UI elements in real-time based on received WebSocket messages.

2. Trigger WebSocket messages on user interactions (e.g., button clicks, form submissions).

3. Implement error handling and reconnection logic for WebSocket connections.

4. Use appropriate data structures (e.g., JSON) for message formatting.

5. Consider implementing a heartbeat mechanism to keep the connection alive.
```

## Deployment Considerations

```markdown
## Deployment Notes

1. Update `vite.config.js` to proxy WebSocket requests during development:
   ```
   export default defineConfig({
     server: {
       proxy: {
         '/ws': {
           target: 'ws://localhost:8080',
           ws: true,
         },
       },
     },
   });
   ```

2. Ensure proper WebSocket URL is used in production (wss:// for secure connections).

3. Configure server to handle WebSocket upgrade requests.

4. Test WebSocket functionality in both development and production environments.
```

## Best Practices

```markdown
## WebSocket Best Practices

1. Implement proper error handling and logging for WebSocket connections.

2. Use secure WebSocket connections (wss://) in production.

3. Implement authentication and authorization for WebSocket connections.

4. Optimize message size and frequency to reduce network load.

5. Implement reconnection logic on the client-side to handle disconnections.

6. Use appropriate data serialization methods (e.g., JSON) for message content.

7. Consider implementing a messaging protocol for complex applications.

8. Properly close WebSocket connections when they are no longer needed.
```






