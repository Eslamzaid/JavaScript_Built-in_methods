//! MouseEvent.altKey
//? It returns a boolean if an alt key was pressed with a mouse trigger

{
  /* <p>Click anywhere to test the <code>altKey</code> property.</p>
<p id="log"></p> */
}
let log = document.querySelector("#log");
document.addEventListener("click", logKey);
function logKey(e) {
  log.textContent = `The alt key is pressed: ${e.altKey}`;
}

//! KeyboardEvent altKey
{
  /* <script>
function showChar(e) {
  alert(
    "Key KeyDown: " +
      String.fromCharCode(e.charCode) +
      "\n" +
      "charCode: " +
      e.charCode +
      "\n" +
      "ALT key KeyDown: " +
      e.altKey +
      "\n"
  );
}
</script>
</head>

<body onkeydown="showChar(event);">
<p>
Press any character key, with or without holding down the ALT key.<br />
You can also use the SHIFT key together with the ALT key.
</p>
</body> */
}
//? The altKey property returns a Boolean value that
//? indicates whether or not the “ALT” key was pressed
//? when a key event was triggered.

//! AnimationEvent animationName
{
  /*
<style> 
#myDIV {
  width: 100%;
  height: 50px;
  padding: 16px;
  background: orange;
  position: relative;
  font-size: 20px;
  text-align: center;
  animation: mymove 5s infinite;
}
@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}
</style>

<body>
<h1>Animation Events</h1>
<h2>The animationName Property</h2>

<p>This example uses the addEventListener() method to attach an "animationstart" event to a DIV element.</p>
<p>The animationName property returns the animation name used in this animation:</p>

<div id="myDIV"></div>

<script>
const div = document.getElementById("myDIV");
div.addEventListener("animationstart", myStartFunction);

function myStartFunction(event) {
  this.innerHTML = "The animation-name is: " + event.animationName;
}
</script>

</body> */
}
//? The animationName property returns the name of the animation,
//? when an animation event occurs.

// ! bubbles
function handleInput(e) {
  // Check whether the event bubbles passes the event along
  if (!e.bubbles) {
    passItOn(e);
  }

  // Already bubbling
  doOutput(e);
}

//? The bubbles event property returns a Boolean value
//? that indicates whether or not an event is a bubbling
//? event.

// ! MouseEvent button

//<p id="demo"></p>
function WhichButton(event) {
  let text = "You pressed buttfon: " + event.button;
  document.getElementById("demo").innerHTML = text;
}

// ! MouseEvent Buttons
{
  /*
<p>Click anywhere with one or more mouse buttons.</p>
<pre id="log">buttons: </pre> 
*/
}
let logg = document.createTextNode("?"); // let log = new Text('?');

function logButtons(e) {
  logg.data = `${e.buttons} (${e.type})`; // log.nodeValue= `${e.buttons} (${e.type})`;
}

document.addEventListener("mouseup", logButtons);
document.addEventListener("mousedown", logButtons);
// document.addEventListener('mousemove', logButtons);

document.querySelector("#log").appendChild(logg);
//? The buttons property returns a number that indicates
//? which mouse button or mouse buttons were pressed
//? when a mouse event was triggered.

// ! cancelable
function preventScrollWheel(event) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    // The event can be canceled, so we do so.
    event.preventDefault();
  } else {
    // The event cannot be canceled, so it is not safe
    // to call preventDefault() on it.
    console.warn(`The following event couldn't be canceled:`);
    console.dir(event);
  }
}

document.addEventListener("wheel", preventScrollWheel);
//? The cancelable event property returns a Boolean
//? value indicating whether or not an event is a
//? cancelable event.

//! The clientX read-only property of the MouseEvent interface provides the horizontal coordinate within the application's viewport at which the event occurred (as opposed to the coordinate within the page).

// HTML
// <p>Move your mouse to see its position.</p>
// <p id="screen-log"></p>
// Copy to Clipboard
// JavaScript
let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
//? The clientX property returns the horizontal
//? coordinate (according to the client area) of the
//? mouse pointer when a mouse event was triggered

//! KeyboardEvent code
{
  /* 
HTML
<p>
  Press keys on the keyboard to see what the KeyboardEvent's key and code values
  are for each one.
</p>
<div id="output" tabindex="0"></div>
Copy to Clipboard
CSS
#output {
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
  width: 95%;
  margin: auto;
}
#output:focus-visible {
  outline: 3px solid dodgerblue;
}
Copy to Clipboard
*/
}
// JavaScript
window.addEventListener(
  "keydown",
  (event) => {
    const p = document.createElement("p");
    p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    document.getElementById("output").appendChild(p);
    window.scrollTo(0, document.body.scrollHeight);
  },
  true
);

// ? The code property returns the key that triggered the
// ? event.

//! // Create the event.
const Ourevent = document.createEvent("Event");

// Define that the event name is 'build'.
Ourevent.initEvent("build", true, true);

// Listen for the event.
elem.addEventListener(
  "build",
  (e) => {
    // e.target matches elem
  },
  false
);

// Target can be any Element or other EventTarget.
elem.dispatchEvent(Ourevent);

//? The createEvent() method creates an event object

//! MouseEvent ctrlKey

{
  /* 
<p>Click anywhere to test the <code>ctrlKey</code> property.</p>
<p id="log"></p>
Copy to Clipboard
*/
}
let log2 = document.querySelector("#log");
document.addEventListener("click", logKey);

function logKey(e) {
  log2.textContent = `The ctrl key is pressed: ${e.ctrlKey}`;
}
// ? The ctrlKey property returns a Boolean value that
// ? indicates whether or not the “CTRL” key was pressed
// ? when a mouse event was triggered.

// ! currentTarget
const element = event.currentTarget;
//? The currentTarget property returns the element whose event listener triggered the event.

//! InputEvent
//?The data read-only property of the InputEvent interface returns a string with inserted characters.
//? This may be an empty string if the change doesn't insert text,
//? such as when characters are deleted.

// *<p>Some text to copy and paste.</p>
// <input type="text" />
// <p class="result"></p>

const editable = document.querySelector("input");
const result = document.querySelector(".result");

editable.addEventListener("input", (e) => {
  result.textContent = `Inputted text: ${e.data}`;
});

//! defaultPrevented Event

// Example
// Prevent a link from opening the URL, and check if preventDefault() was called:

document.getElementById("myAnchor").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Was preventDefault() called: " + event.defaultPrevented);
});

//? The defaultPrevented event property checks whether the preventDefault() method was called for the event.

//! WheelEvent: deltaX property

function myFunction(event) {
  var x = event.deltaX;
}

//? The deltaX property returns a positive value when scrolling to the right, and a negative value when scrolling to the left, otherwise 0.
//? Note: Most mouse devices do not have the ability to scroll left and right, and will always return 0.
//? Note: This property is read-only.

//! WheelEvent: deltaY property

function myFunction(event) {
  var y = event.deltaY;
}

//? The deltaY property returns a positive value when scrolling down, and a negative value when scrolling up, otherwise 0.
//? Note: This property is read-only.

//! WheelEvent: deltaZ property

function myFunction2(event) {
  var z = event.deltaZ;
}

//? The deltaZ property returns a positive value when scrolling in, and a negative value when scrolling out, otherwise 0.

//* Note: Most mouse devices do not have the ability to scroll along the z-axis, and will always return 0.
//* Note: This property is read-only.

//! WheelEvent deltaMode

function deltaModeWheel(event) {
  let z = event.deltaMode;
}

//? The deltaMode property returns a number
//? representing the length unit of the scrolling values
//? (deltaX, deltaY, and deltaZ).
