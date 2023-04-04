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
{/*
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

</body> */}
//? The animationName property returns the name of the animation,
//? when an animation event occurs.