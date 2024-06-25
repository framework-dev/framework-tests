notebook: https://observablehq.com/@dhowe/test-embed-function

---

<div id="notebook-div"></div>

```js
import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import notebook from "https://api.observablehq.com/@dhowe/test-embed-function.js?v=4";

let container = document.getElementById("notebook-div");
container.replaceChildren();

new Runtime().module(notebook, name => {   // hack: is there a better way to do this?
  const node = document.createElement("div");
  const inspector = new Inspector(node);

  inspector.original = inspector.fulfilled; // preserve default fulfilled
  
  inspector.fulfilled = (value) => {  // override fulfilled
    
    inspector.original(value, name); // do default fulfilled

    if (typeof value === 'function') { // handle functions only
      const pre = document.createElement("pre");
      pre.innerHTML = value.toString();
      node.appendChild(pre);
    }
  };
  container.appendChild(node);
  
  return inspector;
});
```
