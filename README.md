# 🚀 DevStack — Technology Stack Builder

DevStack is a simple and interactive React application that allows users to explore different web technologies and build their own technology stack. Users can add technologies to their stack, remove them, and get instant feedback through toast notifications.

## ✨ Features

* 🔍 **Explore Technologies** — Browse technologies from different categories such as Frontend, Backend, Database, Language, Styling, and DevOps.
* 🧩 **Build Your Stack** — Add technologies to your personal stack and prevent duplicate selections.
* 🔔 **Interactive Feedback** — Get toast notifications when technologies are added, removed, or selected more than once.

## 🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* React Toastify
* JSON
* Vite

---

# 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React UI code easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent to a child. **State** is data managed and changed inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` manages changing data in a component. I used it for technologies, loading status, and selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after rendering. I used it to load the JSON technology data when the component starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item and efficiently update the list.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it to show **"Your stack is empty"** when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data through **props**. A child can send an action back by calling a **function passed as a prop**.

