<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css">

notebook: https://observablehq.com/@dhowe/test-embed-function

---
<div id="notebook-div"></div>

```js
import Prism from 'https://cdn.jsdelivr.net/npm/prism-es6@1.2.0/prism.min.js'
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
      pre.className = 'language-javascript';
      const code = document.createElement("code");
      code.className = 'language-javascript';
      code.innerHTML = value.toString();
      pre.appendChild(code);
      node.appendChild(pre);
      Prism.highlightElement(pre); // syntax highlight
    }
  };
  container.appendChild(node);
  return inspector;
});
```
