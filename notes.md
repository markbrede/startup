Here's a reformatted version of your notes for better readability on GitHub:

# CS260 Notes
**Notes.md** is used for notes in CS260. These notes can be used on the midterm and final exam.

## GitHub Assignment Notes

I have never used GitHub before. I had no idea about the level of ingenuity behind the repositories. I learned how to copy repositories so that they can be moved to my computer as well as copied so that others can collaborate.

## Amazon Web Services - EC2 Notes

- **Server IP Address:** http://54.166.215.17
- **Command to Server:** `ssh -i /Users/markbrede/Documents/docs/cs260/********.pem ubuntu@54.166.215.17`

**Command Output:**
```
ls -l

total 4

lrwxrwxrwx 1 ubuntu ubuntu   20 Apr 13 15:06 Caddyfile -> /etc/caddy/Caddyfile

lrwxrwxrwx 1 ubuntu ubuntu   16 Apr 13 15:06 public_html -> /usr/share/caddy

drwxrwxr-x 4 ubuntu ubuntu 4096 Apr 13 16:48 services
```

## HTTPS, TLS, and Web Certificates Notes

- **Domain Name:** [autoexpensetracker.click](https://autoexpensetracker.click/)

## Purchasing a Domain - Manage Your DNS Records

- To manage DNS records, navigate to the Route 53 service in AWS.
- Create a root domain DNS record to associate your domain name with your server's IP address.
- Create a DNS record for any subdomain of your root domain name to map to your server.

## Caddy

For our work, we are using the web service Caddy to act as a gateway to our different services and to host our static web application files. Caddy has ACME support built into it by default, so all you need to do is configure Caddy with the domain name for your web server. Here are the steps to take:

1. SSH into your production environment server.
2. Edit Caddy's configuration (Caddyfile) file.
3. Modify the Caddy rule for handling requests to port 80 (HTTP) to handle requests for your domain name.
4. Modify the Caddy rules that route the traffic for the two web applications that we will build.

Restart Caddy so that your changes take effect.

## Console Commands

Some basic console commands that you can experiment with:

- `echo`: Output the parameters of the command.
- `cd`: Change directory.
- `mkdir`: Make directory.
- `rmdir`: Remove directory.
- `rm`: Remove file(s).
- `mv`: Move file(s).
- `cp`: Copy files.
- `ls`: List files.
- `curl`: Command line client URL browser.
- `grep`: Regular expression search.
- `find`: Find files.
- `top`: View running processes with CPU and memory usage.
- `df`: View disk statistics.
- `cat`: Output the contents of a file.
- `less`: Interactively output the contents of a file.
- `wc`: Count the words in a file.
- `ps`: View the currently running processes.
- `kill`: Kill a currently running process.
- `sudo`: Execute a command as a super user (admin).
- `ssh`: Create a secure shell on a remote computer.
- `scp`: Securely copy files to a remote computer.
- `history`: Show the history of commands.
- `ping`: Check if a website is up.
- `tracert`: Trace the connections to a website.
- `dig`: Show the DNS information for a domain.
- `man`: Look up a command in the manual.

You can also chain the input and output of commands using special characters like `|`, `>`, and `>>`.

## HTML Structure

Some of the common HTML structural elements include:

- `<body>`: Represents the content of an HTML document.
- `<header>`: Defines a header section for the document.
- `<footer>`: Defines a footer section for the document.
- `<main>`: Defines the main content of the document.
- `<section>`: Defines a section of the document.
- `<aside>`: Defines content that is tangentially related to the content around it.
- `<p>`: Defines a paragraph of text.
- `<table>`: Defines a table of data.
- `<ol>`/`<ul>`: Used to create ordered or unordered lists.



- `<div>`: Defines a division or a section of the document.
- `<span>`: Used to apply styles to a specific section of text.

These elements are essential for structuring and organizing the content of an HTML document, making it easier to understand and style.

HTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTML
From the early days of HTML, elements were available for accepting user input. These elements include:

- `<form>`: A container for input elements that can be submitted to a server.
- `<fieldset>`: Groups related elements within a form and provides a label.
- `<input>`: Accepts various types of user input, such as text, password, email, etc.
- `<select>`: Creates a dropdown list for selection.
- `<optgroup>`: Groups related options within a select element.
- `<option>`: Represents an option in a select element.
- `<textarea>`: Allows for multiline text input.
- `<label>`: Provides a label for an individual input element.
- `<output>`: Represents the result of a calculation or user action.
- `<meter>`: Displays a value within a known range.

While the `<form>` element was crucial in the early days for submitting data to servers, with the advent of JavaScript and single-page applications, its necessity has decreased. However, it is still used as a container for inputs.

Here's an example of a simple form that submits the value of a textarea element:

```html
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">
    Some text
  </textarea>
  <button type="submit">Submit</button>
</form>
```

Pressing the submit button sends data to the server, generated by combining the textarea's name attribute with its current value.

The `<input>` element is versatile, supporting various types like text, password, email, number, checkbox, radio, range, date, and more. Attributes like name, disabled, value, and required are common to most input types.

Validation is built into some input types, such as number, URL, range, and email. The `required` attribute can be used to mark an input as mandatory. Additionally, the `pattern` attribute can be used to provide a regular expression for validating the input.

To provide a good user experience, it's essential to provide feedback on input validity early in the input process. This can be done using CSS to style the input based on its validity state. 

For a more detailed explanation and examples, refer to the complete text above.

HTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTML
## CSS Flexbox

Flexbox is a powerful layout tool in CSS that allows you to create flexible and responsive layouts with ease. Here's a brief overview of how you can use Flexbox to create a simple application layout with a header, footer, and main content area split into two sections.

### Structural HTML

```html
<body>
  <header>
    <h1>CSS flex &amp; media query</h1>
  </header>
  <main>
    <section>
      <h2>Controls</h2>
    </section>
    <section>
      <h2>Content</h2>
    </section>
  </main>
  <footer>
    <h2>Footer</h2>
  </footer>
</body>
```

### CSS Flexbox Styling

```css
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}

header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}

section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}

section:nth-child(2) {
  flex: 3;
  background-color: white;
}

@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header,
  footer {
    display: none;
  }
}
```

In this example, we use Flexbox to create a column-oriented layout for the body. The header and footer have fixed heights, while the main content area grows to fill the remaining space. Within the main content area, we use Flexbox again to create a row-oriented layout for the two sections, with the controls taking up 25% of the space and the content taking up 75% of the space. We also use media queries to adjust the layout for portrait orientation and small screen heights.

This is just a basic example of what you can do with Flexbox. It's a powerful tool that can help you create complex layouts that adapt to different screen sizes and orientations.

CSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSSCSS
## Getting Started with CSS for Beginners

### Introduction
CSS (Cascading Style Sheets) is a powerful language used to style the presentation of web pages. It allows you to control the layout, colors, fonts, and other visual aspects of your web pages. This guide will help you get started with CSS and teach you the basics of styling your web pages.

### Setting Up
To start using CSS, you need a basic understanding of HTML, which is used to structure the content of your web pages. You can include CSS in your HTML files using the `<style>` tag in the `<head>` section of your document, or by linking an external CSS file using the `<link>` tag.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a paragraph of text.</p>
</body>
</html>
```

### Selectors
CSS uses selectors to target specific elements in your HTML document. Selectors can be based on element names, classes, IDs, attributes, and more. Here are some examples:

- Element selector: `p { color: blue; }` targets all `<p>` elements and sets their text color to blue.
- Class selector: `.my-class { font-weight: bold; }` targets all elements with the class "my-class" and makes their text bold.
- ID selector: `#my-id { text-decoration: underline; }` targets the element with the ID "my-id" and underlines its text.

### Properties and Values
CSS properties define the style of an element, such as its color, size, font, etc. Properties are set to specific values. Here are some examples:

- `color: red;` sets the text color to red.
- `font-size: 16px;` sets the font size to 16 pixels.
- `background-color: #f0f0f0;` sets the background color to a light gray.

### Applying Styles
You can apply styles to elements using CSS in several ways:

1. Inline CSS: Apply styles directly to individual HTML elements using the `style` attribute.
   ```html
   <h1 style="color: blue;">Hello, World!</h1>
   ```

2. Internal CSS: Define styles in the `<style>` tag within the `<head>` section of your HTML document.
   ```html
   <style>
     h1 { color: blue; }
     p { font-size: 16px; }
   </style>
   ```

3. External CSS: Link an external CSS file containing your styles to your HTML document using the `<link>` tag.
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

### Conclusion
This is just a basic introduction to CSS. As you continue to learn, you'll discover more advanced techniques and features that will help you create beautiful and responsive web designs. Practice is key, so don't be afraid to experiment with different styles and layouts to see what works best for your projects.

JavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJavaJava

Certainly! Here's a more in-depth version of GitHub notes for beginners on how to use Java:

---

# Java Programming for Beginners

Welcome to the Java programming guide for beginners! This repository contains comprehensive notes, examples, and best practices to help you learn Java programming from scratch.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Setting Up Your Development Environment](#setting-up-your-development-environment)
3. [Java Basics](#java-basics)
    - Variables and Data Types
    - Operators
    - Control Flow (if-else, switch)
    - Loops (for, while, do-while)
4. [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
    - Classes and Objects
    - Inheritance
    - Polymorphism
    - Encapsulation
5. [Arrays and Collections](#arrays-and-collections)
    - Arrays
    - ArrayList
    - HashMap
6. [Exception Handling](#exception-handling)
7. [File Handling](#file-handling)
8. [Multithreading](#multithreading)
9. [Input and Output (I/O)](#input-and-output-io)
10. [Networking](#networking)
11. [Database Connectivity](#database-connectivity)
12. [GUI Programming with Swing](#gui-programming-with-swing)
13. [JavaFX](#javafx)
14. [Best Practices](#best-practices)
15. [Further Reading](#further-reading)

## Getting Started

### What is Java?
Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle) in the mid-1990s. It is known for its portability, security features, and robustness.

### Installing Java Development Kit (JDK)
1. Download the latest JDK from the [Oracle website](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html).
2. Install the JDK following the instructions for your operating system.

### Setting Up Your Development Environment
- Use an Integrated Development Environment (IDE) such as IntelliJ IDEA, Eclipse, or NetBeans for a smoother development experience.
- Configure your IDE to use the installed JDK.

## Java Basics

### Variables and Data Types
- Java has several primitive data types, such as int, double, char, boolean, etc.
- Variables must be declared before they can be used.

```java
int age = 30;
double height = 5.9;
char gender = 'M';
boolean isStudent = true;
```

### Operators
- Java supports various operators, including arithmetic, relational, logical, and bitwise operators.

```java
int result = 10 + 5; // Addition
boolean isGreater = 10 > 5; // Greater than
boolean isTrue = true && false; // Logical AND
```

### Control Flow
- Java supports if-else statements and switch-case statements for control flow.

```java
if (age >= 18) {
    System.out.println("You are an adult.");
} else {
    System.out.println("You are a minor.");
}
```

### Loops
- Java provides for, while, and do-while loops for iteration.

```java
for (int i = 0; i < 5; i++) {
    System.out.println("Iteration: " + i);
}
```

## Object-Oriented Programming (OOP)

### Classes and Objects
- Java is an object-oriented programming language, which means it uses classes and objects to model real-world entities.

```java
class Person {
    String name;
    int age;

    Person(String n, int a) {
        name = n;
        age = a;
    }

    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

Person p1 = new Person("Alice", 25);
p1.display();
```

### Inheritance
- Inheritance allows one class to inherit properties and behavior from another class.

```java
class Student extends Person {
    String studentId;

    Student(String n, int a, String id) {
        super(n, a);
        studentId = id;
    }

    void display() {
        super.display();
        System.out.println("Student ID: " + studentId);
    }
}

Student s1 = new Student("Bob", 20, "S12345");
s1.display();
```

### Polymorphism
- Polymorphism allows objects of different classes to be treated as objects of a common superclass.

```java
Person p2 = new Student("Charlie", 22, "S67890");
p2.display(); // This will call the display method of the Student class
```

### Encapsulation
- Encapsulation is the practice of keeping fields within a class private and providing access to them via public methods.

```java
class Employee {
    private String name;
    private double salary;

    public String getName() {
        return name;
    }

    public void setName(String n) {
        name = n;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double s) {
        if (s > 0) {
            salary = s;
        }
    }
}
```

## Arrays and Collections

### Arrays
- Arrays in Java are homogeneous collections of elements with a fixed size.

```java
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}
```

### ArrayList
- ArrayList is a resizable array implementation provided by Java's Collection Framework.

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");
System.out.println(names.get(0)); // Output: Alice
```

### HashMap
- HashMap stores key-value pairs and allows you to retrieve values based on their keys.

```java
HashMap<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);
ages.put("Charlie", 35);
System.out.println(ages.get("Bob")); // Output: 30
```

## Exception Handling

- Java uses try-catch blocks to handle exceptions.

```java
try {
    // Code that may throw an exception
} catch (Exception e) {
    // Code to handle the exception
}
```

## File Handling

- Java provides classes like FileReader, FileWriter, BufferedReader, and BufferedWriter for file handling operations.

```java
try (BufferedReader br = new BufferedReader(new FileReader("input.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    System.out.println("An error occurred.");
    e.printStackTrace();
}
```

## Multithreading

- Java supports multithreading to allow concurrent execution of tasks.

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running.");
    }
}

MyThread t1 = new MyThread();
t1.start();
```

## Input and Output (I/O)

- Java provides classes like Scanner and System.in for reading user input.

```java
Scanner scanner = new Scanner(System.in);
System.out.print("Enter your name: ");
