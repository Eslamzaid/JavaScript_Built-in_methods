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
