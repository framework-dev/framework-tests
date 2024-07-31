```js echo
console.log("readyState:", document.readyState);
// -> "complete"
document.onreadystatechange = () => {
  // -> [never fires?]
  console.log("no state change indicated by this");
}
// 1. npm run dev
// 2. close browser window
// 3. open a new tab
// 4. type: http://127.0.0.1:3000/#anotherObject into browser
//
// actual undesired behavior:
// - page opens at top
// - clicking on page scrolls to cell (which has the div id)
//   (? works because the div *does* exist after onclick is registered)
//
// desired behavior:
// - page opens and the div with #id scrolls into view
// with no document.onclick and, instead, its code
// moved to a registered event that works!
//
document.onclick = () => {
    let loc = window.location.href;
    console.log("page:", loc); // DEBUG
    let hpos = loc.indexOf("#");
    if (hpos > -1) {
      let id = loc.substring(hpos + 1);
      console.log("scrolling to:", id); // DEBUG
      document.getElementById(id).scrollIntoView();
    }
};
// some JavaScript in the Framework project’s index.md, for comparison
import notebook from "https://api.observablehq.com/@shadoof/nb4fw.js?v=4";
import { getNotebook } from "./components/getNotebook.js";
getNotebook(notebook, document.getElementById("notebook-div"));
```
# An Observable Framework Project that Embeds and Displays Highlighted Code from an Observable Notebook

This site is using a `getNotebook.js` component to embed all the cells of the demonstration notebook at https://observablehq.com/@shadoof/nb4fw 

It displays and highlights the code of the notebook using the Observable Runtime. Due to the way the Runtime is constructed, certain coding conventions are required in the notebook.

Specifically, in order to properly display any named-cell declarations which are code blocks or non-literal expressions, the named JavaScript cell is written to call an immediately following function which has its same name prefaced by the character ‘ƒ’. This `ƒ<function>` then contains the code block or expression, which is properly displayed and highlighted, while the Runtime handles display of the returned `value`.

All actual functions in the notebook and literal declarations/definitions for `strings, numbers, booleans, bigints, undefineds, nulls,` and `symbols` are handled without needing to use the convention, but ...

Literal `object` declarations, including`arrays` for example, should also use the `ƒ<function>` convention.

A repo for this project is at https://github.com/framework-dev/framework-tests

@shadoof, July 2024, with help from and thanks to @dhowe

---
<div id="notebook-div"></div>