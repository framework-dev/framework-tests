# Framework Tests

This site is using a getNotebook() component to access all the cells of the notebook at https://observablehq.com/@shadoof/nb4fw :

---

```js echo
import notebook from "https://api.observablehq.com/@shadoof/nb4fw.js?v=4";
console.log(notebook); // DEBUG
import { getNotebook } from "./components/getNotebook.js";
getNotebook(notebook, document.getElementById("notebook-div"));
```
<div id="notebook-div"></div>