# Framework Tests

This site is using a getNotebook() component to access all the cells of the notebook at https://api.observablehq.com/@shadoof/nb4fw :

---

```js
import define from "https://api.observablehq.com/@shadoof/nb4fw.js?v=3";
import { getNotebook } from "./components/getNotebook.js";
getNotebook(define);
```
<div id="notebook"></div>