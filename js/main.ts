import { CodeJar } from "codejar";

import Prism from "prismjs";
import "prismjs/themes/prism.min.css";
import "prismjs/components/prism-javascript.min.js";

function createEditor(
  container: HTMLElement,
  language: string,
  starterCode: string,
  onUpdate: (code: string) => void
): CodeJar {
  const highlighter = (container: Element) => {
    container.innerHTML = Prism.highlight(
      container.textContent ?? "",
      Prism.languages[language],
      language
    );
  };

  const jarEditor = CodeJar(container, highlighter, { tab: "  " });
  jarEditor.updateCode(starterCode);
  jarEditor.onUpdate(onUpdate);

  return jarEditor;
}
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
function onUpdate(code: string) {
  const html = htmlContainer?.innerText;
  const css =
    "body {margin: 0; padding: 0; overflow: hidden;}" + cssContainer?.innerText;
  const js = jsContainer?.innerText;

  displayContainer.contentDocument.body.innerHTML = `${html}<style>${css}</style>`;
  displayContainer.contentWindow.eval?.(js);
}

const jsContainer: HTMLElement | null = document.querySelector("#js-editor");
const htmlContainer: HTMLElement | null =
  document.querySelector("#html-editor");
const cssContainer: HTMLElement | null = document.querySelector("#css-editor");
const displayContainer: HTMLElement | null = document.querySelector("#display");

if (jsContainer == null || htmlContainer == null || cssContainer == null) {
  throw new Error("Could not find all editor containers.");
}

const debouncedUpdate = debounce(onUpdate, 1000);

const jsCode = "console.log('Hello World!');";
createEditor(jsContainer, "javascript", jsCode, debouncedUpdate);

const htmlCode = `<div id="info">A simple three.js editor.</div>`;
createEditor(htmlContainer, "html", htmlCode, debouncedUpdate);

const cssCode = `#info {
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}`;
createEditor(cssContainer, "css", cssCode, debouncedUpdate);

onUpdate("");
