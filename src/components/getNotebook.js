import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";

const parent = document.getElementById("notebook");

function getNotebook(define) {
  new Runtime().module(define, name => {
    const _node = document.createElement("div");
    const _inspector = new Inspector(_node);
    _inspector._fulfilled = _inspector.fulfilled;
    _inspector.fulfilled = (value) => {
      _inspector._fulfilled(value, name);
      if (typeof value === 'function') {
        let pre = document.createElement("pre");
        let code = document.createElement("code");
        code.className = "language-js";
        code.appendChild(document.createTextNode(value.toString()));
        pre.appendChild(code);
        _node.appendChild(pre);
        //prismjs.highlightElement(code);
      }
    };
    parent.appendChild(_node);
    return _inspector;
  });
}

export { getNotebook }
