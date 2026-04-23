# Day 32: Variables, Data Types & Operators and Expressions

## Part 1: Variables and Data Types

### What are Variables?
Variables are containers that store data values. They have a name, type, and value.

### Variable Declaration Keywords

```javascript
let age = 25;           // Can be reassigned (preferred)
const PI = 3.14159;     // Cannot be reassigned (constant)
var name = "John";      // Old way (avoid using)
```

---

## Data Types in JavaScript

### 1. **String** - Text data
```javascript
const courseName = "JavaScript";
const department = "CSE";
console.log(typeof courseName); // "string"
```
**In your code:**
```javascript
{ id: 1, name: "JavaScript", dept: "CSE", seats: 5 }
```

### 2. **Number** - Integer or decimal values
```javascript
let seats = 5;
let price = 99.99;
console.log(typeof seats); // "number"
```
**In your code:**
```javascript
{ id: 1, name: "JavaScript", dept: "CSE", seats: 5 }
```

### 3. **Boolean** - true or false
```javascript
const availableOnly = true;
const isEnrolled = false;
console.log(typeof availableOnly); // "boolean"
```
**In your code:**
```javascript
if (availableOnly) { ... }
```

### 4. **Array** - Collection of values
```javascript
let courses = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Microprocessors" }
];
console.log(typeof courses); // "object" (arrays are objects in JS)
```
**In your code:**
```javascript
let courses = JSON.parse(localStorage.getItem("courses")) || [...]
```

### 5. **Object** - Key-value pairs
```javascript
const course = {
  id: 1,
  name: "JavaScript",
  dept: "CSE",
  seats: 5
};
console.log(typeof course); // "object"
```
**In your code:**
```javascript
const newCourse = {
  id: Date.now(),
  name: name.value,
  dept: dept.value,
  seats: Number(seats.value)
};
```

### 6. **Null & Undefined**
```javascript
let empty = null;        // Intentionally empty
let notAssigned;         // undefined
console.log(typeof empty);       // "object"
console.log(typeof notAssigned); // "undefined"
```

---

## Part 2: Operators and Expressions

### A. Arithmetic Operators
```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.33... (Division)
console.log(a % b);  // 1  (Modulo - remainder)
console.log(a ** b); // 1000 (Exponentiation)
```

**In your code:**
```javascript
course.seats--;           // Decrement (seats - 1)
seats: Number(seats.value) // Type conversion using Number()
```

### B. Comparison Operators
```javascript
console.log(5 === 5);    // true (Strictly equal)
console.log(5 == "5");   // true (Loosely equal)
console.log(5 !== 5);    // false (Strictly not equal)
console.log(5 > 3);      // true (Greater than)
console.log(5 < 3);      // false (Less than)
console.log(5 >= 5);     // true (Greater than or equal)
console.log(5 <= 3);     // false (Less than or equal)
```

**In your code:**
```javascript
if (course.seats > 0) { ... }      // Greater than
if (dept !== "all") { ... }        // Not equal
if (availableOnly) { ... }         // Truthy check
if (course.seats === 0) { ... }    // Strictly equal
```

### C. Logical Operators
```javascript
// AND (&&) - Both conditions must be true
if (course.seats > 0 && dept === "CSE") { ... }

// OR (||) - At least one condition must be true
let courses = JSON.parse(localStorage.getItem("courses")) || [];

// NOT (!) - Inverts boolean
if (!search) return text;
```

**In your code:**
```javascript
// AND example
if (course.seats > 0) {
  course.seats--;
}

// OR example (Default value)
let courses = JSON.parse(localStorage.getItem("courses")) || [
  { id: 1, name: "JavaScript", dept: "CSE", seats: 5 }
];

// NOT example
if (!search) return text;
```

### D. Assignment Operators
```javascript
let x = 10;
x += 5;    // x = 15 (x = x + 5)
x -= 3;    // x = 12 (x = x - 3)
x *= 2;    // x = 24 (x = x * 2)
x /= 4;    // x = 6  (x = x / 4)
```

**In your code:**
```javascript
course.seats--;  // Same as: course.seats = course.seats - 1
course.seats--;  // Decrement operator
```

### E. Increment/Decrement Operators
```javascript
let count = 5;
count++;    // 6 (Post-increment)
++count;    // 7 (Pre-increment)
count--;    // 6 (Post-decrement)
--count;    // 5 (Pre-decrement)
```

**In your code:**
```javascript
course.seats--;  // Decrease seats by 1
```

### F. Ternary Operator (Conditional)
```javascript
let status = age >= 18 ? "Adult" : "Minor";
// condition ? valueIfTrue : valueIfFalse
```

**In your code:**
```javascript
<p>Seats: ${course.seats > 0 ? course.seats : '<span class="full">Full</span>'}</p>
// If seats > 0, show seats. Otherwise show "Full"

<button ${course.seats === 0 ? "disabled" : ""}>Enroll</button>
// If no seats, disable button. Otherwise, no attribute
```

### G. String Operators
```javascript
let first = "Hello";
let second = "World";
let result = first + " " + second;  // "Hello World"
```

**In your code:**
```javascript
text.replace(new RegExp(search, "gi"), match =>
  `<span class="highlight">${match}</span>`
);
```

---

## Real-World Examples from Your Code

### Example 1: Filtering with Comparison & Logical Operators
```javascript
if (dept !== "all") {
  filtered = filtered.filter(c => c.dept === dept);
}

if (availableOnly) {
  filtered = filtered.filter(c => c.seats > 0);
}
```
- `dept !== "all"` - Comparison operator
- `c.seats > 0` - Comparison operator for filtering

### Example 2: Sort with Arithmetic Operators
```javascript
if (sort === "low") {
  filtered.sort((a, b) => a.seats - b.seats);  // Subtraction
} else if (sort === "high") {
  filtered.sort((a, b) => b.seats - a.seats);  // Subtraction
}
```

### Example 3: Type Coercion & Conversion
```javascript
const newCourse = {
  id: Date.now(),
  name: name.value,
  dept: dept.value,
  seats: Number(seats.value)  // Converting string to number
};
```
- `Number()` converts string to number type

### Example 4: Logical OR for Default Values
```javascript
let courses = JSON.parse(localStorage.getItem("courses")) || [
  { id: 1, name: "JavaScript", dept: "CSE", seats: 5 }
];
```
- If `localStorage.getItem()` returns null, use the array as default

---

## Practice Exercises

### Exercise 1: Identify the data types
```javascript
const courseId = 1;              // ?
const courseName = "JavaScript"; // ?
const hasSeats = true;           // ?
const enrolledStudents = [1,2,3]; // ?
```

**Answer:**
```javascript
const courseId = 1;              // number
const courseName = "JavaScript"; // string
const hasSeats = true;           // boolean
const enrolledStudents = [1,2,3]; // object (array)
```

### Exercise 2: Evaluate the expression
```javascript
let seats = 5;
let enrolled = 2;
let available = seats - enrolled;  // What is the value?
let hasAvailable = available > 0;   // What is the value?
```

**Answer:**
```javascript
let available = 3;       // 5 - 2
let hasAvailable = true; // 3 > 0 is true
```

### Exercise 3: Using operators
```javascript
// Create an expression that checks if:
// - The course has seats available (seats > 0)
// - AND the department is "CSE"
// - AND the enrollment is open (isOpen === true)

if (seats > 0 && dept === "CSE" && isOpen === true) {
  console.log("You can enroll!");
}
```

---

## Summary Table

| Category | Example | Result |
|----------|---------|--------|
| **Variables** | `let x = 10;` | Stores value 10 |
| **Data Types** | `typeof "hello"` | "string" |
| **Arithmetic** | `5 + 3` | 8 |
| **Comparison** | `5 > 3` | true |
| **Logical** | `true && false` | false |
| **Assignment** | `x += 5` | x increases by 5 |
| **Ternary** | `x > 5 ? "big" : "small"` | Returns string |

---

## Key Takeaways

1. ✅ **Variables** store data with meaningful names
2. ✅ **Data Types** define what kind of data (string, number, boolean, array, object)
3. ✅ **Operators** perform operations on values
4. ✅ **Expressions** combine variables and operators to produce results
5. ✅ **Use `const` by default**, `let` when reassignment is needed
6. ✅ **Logical operators** (`&&`, `||`, `!`) are powerful for conditions
7. ✅ **Ternary operator** is cleaner than simple if-else statements
