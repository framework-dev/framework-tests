import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
const parent = document.getElementById("notebook");
function getNotebook(define) {
  new Runtime().module(define, name => {
    const container = document.createElement("div");
    if (name) {
      container.id = name;
      console.log("name:", name);
      if (name.startsWith("_")) container.style.display = "none";
    }
    parent.append(container);
    const inspctr = new Inspector(container);
    // if (name == "occurrencesMap") console.log(inspctr); // DEBUG etc.
    return inspctr; // was just: new Inspector(container); // DEBUG etc.
  });
}
export { getNotebook }
