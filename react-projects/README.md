# React

## React 'useState' patterns

### 1️⃣ Boolean Toggle
Classic example for showing/hiding something:

```js
const [isVisible, setIsVisible] = useState(false);

<button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
{isVisible && <p>Hello!</p>}
```
✅ Common use: Modals, dropdowns, menus.


### 2️⃣ Object State (Dynamic Keys)
Like our TreeView example:

```js
const [expandedItems, setExpandedItems] = useState({});

function toggleItem(label) {
  setExpandedItems(prev => ({
    ...prev,
    [label]: !prev[label],
  }));
}
```
✅ Common use: Accordions, settings toggles, form field visibility.

### 3️⃣ Array State (Lists)
For adding/removing items:

```js
const [tasks, setTasks] = useState(["Buy milk", "Walk dog"]);

function addTask(task) {
  setTasks(prev => [...prev, task]);
}
```
✅ Common use: Shopping lists, to-do apps, notifications.

### 4️⃣ Counter or Number State
Simple increment/decrement logic:

```js
const [count, setCount] = useState(0);

function increment() {
  setCount(prev => prev + 1);
}
```
✅ Common use: Likes, quantity selectors, pagination counters.

### 5️⃣ Form State (Controlled Inputs)
For handling form input values:

```js
const [formData, setFormData] = useState({ username: "", email: "" });

function handleChange(e) {
  setFormData({ ...formData, [e.target.name]: e.target.value });
}
```
✅ Common use: Login forms, search boxes, signup flows.


|Pattern  |	What It Manages|
|---------|----------------|
Boolean Toggle |	Visibility, on/off states
Object State |	Multi-item dynamic toggles
Array State	| Lists, collections
Counter/Number |	Simple numeric values
Form Controlled  |Inputs	User input data