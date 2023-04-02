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
