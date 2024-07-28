# An Observable Framework Project that Embeds and Displays Highlighted Code from an Observable Notebook

This site is using a `getNotebook.js` component to embed all the cells of the demonstration notebook at https://observablehq.com/@shadoof/nb4fw 

It displays and highlights the code of the notebook using the Observable Runtime. Due to the way the Runtime is constructed, certain coding conventions are required in the notebook.

Specifically, in order to properly display any named-cell declarations which are code blocks or non-literal expressions, the named JavaScript cell is written to call an immediately following function which has its same name prefaced by the character ‘ƒ’. This `ƒ<function>` then contains the code block or expression, which is properly displayed and highlighted, while the Runtime handles display of the returned `value`.

All actual functions in the notebook and literal declarations/definitions for `strings, numbers, booleans, bigints, undefineds, nulls,` and `symbols` are handled without needing to use the convention, but ...

Literal `object` declarations, including`arrays` for example, should also use the `ƒ<function>` convention.

A repo for this project is at https://github.com/framework-dev/framework-tests

@shadoof, July 2024, with help from and thanks to @dhowe

---
```js echo
// some JavaScript in the Framework project’s index.md, for comparison
import notebook from "https://api.observablehq.com/@shadoof/nb4fw.js?v=4";
import { getNotebook } from "./components/getNotebook.js";
getNotebook(notebook, document.getElementById("notebook-div"));
```
<div id="notebook-div"></div>