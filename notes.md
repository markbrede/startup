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
